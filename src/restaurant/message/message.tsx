import { useState, useRef, useEffect } from "react";
import Nav from "../components/nav";
import { FaUserCircle } from "react-icons/fa";
import { Dropdown, DropdownItem } from "flowbite-react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { RiEmojiStickerLine } from "react-icons/ri";
import EmojiPicker from "emoji-picker-react";
import { IoSearch } from "react-icons/io5";
import MessageItem from "./components/MessageItem";
import { generalErrors } from "../../utils/error";
import { MessageService } from "../../services/messages/message";

function Message() {
    const [translate, setTranslate] = useState(false);
    const [messageText, setMessageText] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Ut aliquip ex ea commodo consequat...", time: "10:42", isSender: false },
        { text: "In voluptate velit esse", time: "10:44", isSender: true },
        { text: "Cillum dolore eu fugiat nulla pariatur...saassa sfasvf asfeefXv efsedfwe", time: "10:45", isSender: true },
        { text: "Excepteur sint occaecat cupidatat...", time: "11:08", isSender: false },
    ]);
    const [itemMessage, setItemMessage] = useState<any[]>([]);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

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
          // Or however you store it
          const res = await MessageService.getMessages("65");
          if(res.status === "200") {
            setItemMessage(res.data);
          }
        } catch (error) {
          console.error("Error fetching messages:", error);
          generalErrors(error);
        }
      };
      
      useEffect(() => {
        fetchingItemMessages();
        console.log(itemMessage);
        
      }, []);
      useEffect(() => {
        console.log(itemMessage);
        
      }, [itemMessage]);
    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden">
            <Nav isMenu={true} handelMenu={() => setTranslate(!translate)} />

            <div className="flex flex-row h-full w-full overflow-hidden relative">
                {/* Sidebar */}
                <div
                    className={`${translate ? "flex" : "hidden"
                        } flex-col gap-1 h-full w-full sm:w-[405px] sm:flex shadow-inner overflow-y-auto absolute sm:relative z-50 pr-2 bg-slate-50 transition-all duration-300`}
                >
                    <div className="flex flex-col justify-between w-full h-24 p-2 border-b border-slate-100">
                        <div className="flex items-center justify-between text-gray-600">
                            <p className="font-semibold text-xl">ຂໍ້ຄວາມ</p>
                            <Dropdown
                                label=""
                                dismissOnClick={false}
                                renderTrigger={() => (
                                    <span className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full p-1 cursor-pointer">
                                        <HiOutlineDotsVertical className="text-xl" />
                                    </span>
                                )}
                            >
                                <DropdownItem>Dashboard</DropdownItem>
                                <DropdownItem>Settings</DropdownItem>
                                <DropdownItem>Earnings</DropdownItem>
                                <DropdownItem>Sign out</DropdownItem>
                            </Dropdown>
                        </div>
                        <form className="flex items-center relative">
                            <input
                                className="w-full max-w-md h-10 text-xs md:text-sm rounded-md border-gray-300 focus:outline-transparent focus:ring-0 focus:border-orange-500"
                                type="text"
                                placeholder="ຄົ້ນຫາ..."
                            />
                            <button className="absolute right-3 top-2">
                                <IoSearch className="text-2xl text-gray-400" />
                            </button>
                        </form>
                    </div>
                    {itemMessage.map((item) => (
                        <div key={item.chat_id} className="flex items-center w-full h-20 p-2 border-b border-slate-200 cursor-pointer hover:bg-slate-100">
                            <FaUserCircle className="text-5xl text-slate-400" />
                            <div className="flex flex-col ml-5">
                                <p className="font-semibold text-xl">{item.table_name}</p>
                                <p className="truncate w-56 text-sm text-slate-500">{item.messages}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat Area */}
                <div className={`flex flex-col h-full w-full bg-white ${translate ? "sm:pl-[405px]" : ""}`}>
                    <div className="flex items-center h-16 bg-slate-50 px-2">
                        <FaUserCircle className="text-5xl text-slate-400" />
                        <div className="flex flex-col ml-4">
                            <p className="font-semibold text-2xl">ໂຕະ 011</p>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-grow px-5 py-4 overflow-y-auto scrollbar-hide">
                        {messages.map((msg, index) => (
                            <MessageItem key={index} text={msg.text} time={msg.time} isSender={msg.isSender} />
                        ))}
                        <div ref={endOfMessagesRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="relative flex items-end gap-1.5 min-h-[3rem] bg-slate-50 px-5 py-1">
                        <button
                            onClick={() => setShowPicker(!showPicker)}
                            className="flex justify-center items-center h-10 w-10 bg-white rounded-md"
                        >
                            <RiEmojiStickerLine className="text-2xl text-slate-600" />
                        </button>

                        {showPicker && (
                            <div className="absolute bottom-20 left-5 z-50">
                                <EmojiPicker onEmojiClick={onEmojiClick} />
                            </div>
                        )}

                        <textarea
                            ref={inputRef}
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="h-10 w-full resize-none px-3 bg-white outline-none border-0 rounded-md focus:ring-1 focus:ring-orange-500 overflow-y-auto"
                            placeholder="ຂໍ້ຄວາມ ..."
                        />

                        <button
                            onClick={() => {
                                if (messageText.trim()) {
                                    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                                    setMessages([...messages, { text: messageText.trim(), time, isSender: true }]);
                                    setMessageText("");
                                }
                            }}
                            className="flex justify-center items-center h-10 w-12 bg-white rounded-md"
                        >
                            <IoIosSend className="text-2xl text-slate-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
