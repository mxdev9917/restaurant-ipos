import React from "react";
interface LoadingSpinnerProps {
  text: string;
}
const LoadingSpinnerMessage: React.FC<LoadingSpinnerProps> = ({ text }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center ">
      <div className="flex items-center space-x-1 relative">
        <div className="flex w-8 h-8 absolute left-[4px]  border-[3px]  border-solid rounded-full  border-gray-200 ring-0 ring-transparent "/>
        <div className="w-8 h-8  border-[4px]  border-solid rounded-full animate-slow-spin border-gray-200 border-t-orange-500"/>

      </div>
      <span className=" text-base font-normal">
        {text}...
      </span>
    </div>
  );
};

export default LoadingSpinnerMessage;
