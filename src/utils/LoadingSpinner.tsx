import React from "react";
interface LoadingSpinnerProps {
    text: string;
}
const LoadingSpinner : React.FC<LoadingSpinnerProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-1 relative">
      <div className="w-5 h-5 absolute left-[4px]  border-[3px]  border-solid rounded-full  border-gray-200 ring-0 ring-transparent "></div>
        <div className="w-5 h-5  border-[3px]  border-solid rounded-full animate-slow-spin border-gray-200 border-t-orange-500"></div>
        <span className=" text-sm font-normal">
          {text}...
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
