interface MessageItemProps {
  text: string;
  time: string;
  isSender: boolean;
  isSeen?: boolean;
}

function MessageItem({ text, time, isSender, isSeen = false }: MessageItemProps) {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`max-w-xs sm:max-w-sm px-3 py-2 rounded-xl ${isSender ? "bg-orange-100 text-right" : "bg-gray-200"} relative`}>
        <p className="text-sm break-words whitespace-pre-wrap">{text}</p>

        {/* Always show time */}
        <div className="flex items-center gap-1 justify-end mt-1 text-xs text-gray-500">
          <span>{time}</span>
          {/* Only show check marks for sender */}
          {isSender && (
            <>
              {isSeen ? '✔✔' : '✔'}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
