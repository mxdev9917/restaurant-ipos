import { FaUserCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { RiEmojiStickerLine } from "react-icons/ri";
import EmojiPicker from "emoji-picker-react";
import MessageItem from "./MessageItem";
import { generalErrors } from "../../../utils/error";
import { MessageService } from "../../../services/messages/message";
import { useAuth } from "../../../context/context";

interface MessageItemProps {
  text: string;
  time: string;
  isSender: boolean;
  isRead: boolean;
}

interface ChatAreaProps {
  messages: MessageItemProps[];
  setMessages: React.Dispatch<React.SetStateAction<MessageItemProps[]>>;
  messageText: string;
  setMessageText: React.Dispatch<React.SetStateAction<string>>;
  showPicker: boolean;
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  endOfMessagesRef: React.RefObject<HTMLDivElement>;
  onEmojiClick: (emojiData: any) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  translate: boolean;
  tableName: string;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  messages,
  setMessages,
  messageText,
  setMessageText,
  showPicker,
  setShowPicker,
  inputRef,
  endOfMessagesRef,
  onEmojiClick,
  handleKeyDown,
  translate,
  tableName
}) => {
  const { data, token } = useAuth();
  return (
    <div className={`flex flex-col h-full w-full bg-white ${translate ? "sm:pl-[405px]" : ""}`}>
      <div className="flex items-center h-16 bg-slate-50 px-2">
        <FaUserCircle className="text-5xl text-slate-400" />
        <div className="flex flex-col ml-4">
          <p className="font-semibold text-2xl">{tableName}</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow px-5 py-4 overflow-y-auto scrollbar-hide">
        {messages.map((msg, index) => (

          <MessageItem key={index} text={msg.text} time={msg.time} isSender={msg.isSender} isSeen={msg.isRead} />


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
          onClick={async () => {
            if (messageText.trim()) {
              const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
              setMessages([...messages, { text: messageText.trim(), time, isSender: true, isRead: false }]);

              try {
                const resId = String(data.restaurant_ID);
                const res = await MessageService.postMessages(String(resId), "34", "admin", messageText)
                console.log("is working now")
                console.log(res);
                setMessageText("");

              } catch (error) {
                generalErrors(error)

              }

            }
          }}
          className="flex justify-center items-center h-10 w-12 bg-white rounded-md"
        >
          <IoIosSend className="text-2xl text-slate-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
