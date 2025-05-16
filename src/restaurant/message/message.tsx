import { useState, useRef, useEffect } from "react";
import Nav from "../components/nav";
import { FaUserCircle } from "react-icons/fa";
// import { Dropdown, DropdownItem } from "flowbite-react";
// import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { generalErrors } from "../../utils/error";
import { MessageService } from "../../services/messages/message";
import ChatArea from "./components/chatArea";
import { useAuth } from "../../context/context";
import { t } from "i18next";

function Message() {
    const { data, token } = useAuth();
    const [translate, setTranslate] = useState(false);
    const [messageText, setMessageText] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [itemMessage, setItemMessage] = useState<any[]>([]);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const endOfMessagesRef = useRef<HTMLDivElement>(null);
    const [tableName, setTableName] = useState("");
    const [isCheckBTNItemMessage, setIsCheckBTNItemMessage] = useState(false);
    const [tableID, setTableID] = useState("");
    const [txtSearch, setTxtSearch] = useState("");

    const formSumit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const resId = String(data.restaurant_ID);
            const res = await MessageService.filterMessage(String(resId), txtSearch);
            if (res.status === "200") {
                setItemMessage(res.data);
            }
        } catch (error) {
            generalErrors(error)
        }
    }

    const handleMessage = async (id: string) => {

          setMessages([]);
        setIsCheckBTNItemMessage(true)
        setTableID(id);
        getMessages(id);
      
    };

    const getMessages = async (id: string) => {
        try {
            const resId = String(data.restaurant_ID);
            const res = await MessageService.postMessagesItem(String(resId), String(id));
            const datas = res.data;
            if (datas.length <= 0 ){  
                localStorage.removeItem("messageTableID")
            }

            // Set table name if available
            if (datas.length > 0) {
                setTableName(datas[0].table_name);
                setTableID(datas[0].table_ID);
                localStorage.setItem("messageTableID", datas[0].table_ID)
            }

            // Create a set of existing unique keys to avoid duplicates
            setMessages(prevMessages => {
                const existingKeys = new Set(
                    prevMessages.map(msg => `${msg.text}-${msg.time}`)
                );
                const newMessages = datas
                    .map((message: any) => ({
                        text: message.messages,
                        time: new Date(message.sent_at).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                        }),
                        isRead: message.is_read,
                        isSender: message.chat_type === "client" ? false : true,
                    }))
                    .filter(msg => !existingKeys.has(`${msg.text}-${msg.time}`)); // Skip if already exists

                return [...prevMessages, ...newMessages];
            });

        } catch (error) {
            generalErrors(error);         
        }
    };
    const onEmojiClick = (emojiData: any) => {
        const emoji = emojiData.emoji;
        const cursorPos = inputRef.current?.selectionStart ?? 0;
        const textBefore = messageText.slice(0, cursorPos);
        const textAfter = messageText.slice(cursorPos);
        setMessageText(textBefore + emoji + textAfter);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (messageText.trim() !== "") {
                const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                setMessages([...messages, { text: messageText.trim(), time, isSender: true }]);
                setMessageText("");
            }
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = "10px";
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
        }
    }, [messageText]);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const fetchingItemMessages = async () => {
        try {
            const resId = String(data.restaurant_ID);
            const res = await MessageService.getMessages(String(resId));
            if (res.status === "200") {
                setItemMessage(res.data);
            }
        } catch (error) {
            console.error("Error fetching messages:", error);
            generalErrors(error);
        }
    };
    useEffect(() => {
        fetchingItemMessages();
    }, []);

    useEffect(() => {
        if (!isCheckBTNItemMessage) return;
        const interval = setInterval(() => {

            if (!isCheckBTNItemMessage && tableID != "") return;
            console.log("interval is working");
            getMessages(tableID);
        }, 3000);

        return () => clearInterval(interval);
    }, [isCheckBTNItemMessage, tableID]);
    useEffect(() => {
        const id = localStorage.getItem("messageTableID");
        if (id) {
            getMessages(id);
        }
    }, []);
    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden">
            <Nav isMenu={true} handelMenu={() => setTranslate(!translate)} />

            <div className="flex flex-row h-full w-full overflow-hidden relative">
                {/* Sidebar */}
                <div
                    className={`${translate ? "flex" : "hidden"
                        } flex-col gap-1 h-full w-full sm:w-[405px] sm:flex shadow-inner overflow-y-auto absolute sm:relative z-50 pr-2 bg-slate-50 transition-all duration-300`}
                >
                    <div className="flex flex-col justify-between w-full h-16 p-2 border-b border-slate-100">
                        <form onSubmit={formSumit} className="flex items-center relative">
                            <input
                                className="w-full max-w-md h-10 text-xs md:text-sm rounded-md border-gray-300 focus:outline-transparent focus:ring-0 focus:border-orange-500"
                                type="text"
                                placeholder={`${t("search")} ...`}
                                value={txtSearch}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setTxtSearch(value);
                                    if (value === "" || value.trim() === "") {
                                        fetchingItemMessages();
                                    }
                                }}
                            />
                            <button className="absolute right-3 top-2" type="button">
                                <IoSearch className="text-2xl text-gray-400" />
                            </button>
                        </form>
                    </div>

                    {itemMessage.map((item, index) => (
                        <div
                            key={item.chat_id ?? `${item.table_ID}-${index}`}
                            onClick={() => handleMessage(item.table_ID)}
                            className="flex items-center w-full h-20 p-2 border-b border-slate-200 cursor-pointer hover:bg-slate-100"
                        >
                            <FaUserCircle className="text-5xl text-slate-400" />
                            <div className="flex flex-col ml-5">
                                <p className="font-semibold text-xl">{item.table_name}</p>
                                <p className="truncate w-56 text-sm text-slate-500">{item.messages}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat Area */}
                <ChatArea
                    messages={messages}
                    setMessages={setMessages}
                    messageText={messageText}
                    setMessageText={setMessageText}
                    showPicker={showPicker}
                    setShowPicker={setShowPicker}
                    inputRef={inputRef}
                    endOfMessagesRef={endOfMessagesRef}
                    onEmojiClick={onEmojiClick}
                    handleKeyDown={handleKeyDown}
                    translate={translate}
                    tableName={tableName}
                    tableID={tableID}
                />
            </div>
        </div>
    );
}

export default Message;
