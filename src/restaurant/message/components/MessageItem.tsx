type MessageItemProps = {
    text: string;
    time: string;
    isSender: boolean;
  };
  
  export default function MessageItem({ text, time, isSender }: MessageItemProps) {
    return (
      <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
        <div
          className={`
            relative max-w-[75%] px-4 py-2 rounded-lg 
            ${isSender ? "bg-lime-200 text-right rounded-br-none" : "bg-slate-100 text-left rounded-bl-none"}
          `}
        >
          <p className="text-sm">{text}</p>
          <span className="text-xs text-gray-500 mt-1 block">
            {time}
          </span>
        </div>
      </div>
    );
  }
  