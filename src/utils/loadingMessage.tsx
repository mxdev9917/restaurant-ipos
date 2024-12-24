
interface loadingMessageProps {
    text: string;
}

const loadingMessage: React.FC<LoadingSpinnerProps> = ({ text }) => {

    return (
        <div className="flex justify-center items-center bg-black/10 w-full h-full absolute z-50 ">
            <div className="w-[280px] h-[150px] bg-white rounded">
                <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
                        <div className="w-9 h-9 absolute left-[4px]  border-[3px]  border-solid rounded-full  border-gray-200 ring-0 ring-transparent "></div>
                        <div className="w-9 h-9  border-[3px]  border-solid rounded-full animate-slow-spin border-gray-200 border-t-orange-500"></div>
                       <span className="text-sm">{text}...</span>
                </div>
            </div>
        </div>
    )

}

export default loadingMessage;