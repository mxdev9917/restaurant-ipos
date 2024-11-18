import React from "react";

interface LoadingProps {
    text: string;
}

const Loading: React.FC<LoadingProps> = ({ text }) => {
    return (
        <div className=" flex justify-center items-end space-x-0">
            <span className="font-medium mr-1">{text}</span>
            <span className="font-medium animate-pulse animation-delay-700">.</span>
            <span className="font-medium animate-pulse animation-delay-800">.</span>
            <span className="font-medium animate-pulse animation-delay-900">.</span>
            <span className="font-medium animate-pulse animation-delay-1000">.</span>
        </div>
    );
};



export default Loading;
