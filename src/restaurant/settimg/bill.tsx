import { useState } from "react"
import Sidebar_Nav from "../componets/sidebar-nav"
import { Link } from "react-router-dom"



function settingBill() {
    const[bg,setBg]=useState(true)
    function handleBg(){
        setBg(!bg);
    }
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="p-1 sm:ml-64">
                <div className="mt-14 flex">
                    <div className="w-full">olwef</div>
                    <div className=" w-[450px] h-screen border-l-2 shadow-md flex flex-col ">
                        <div className="flex w-full  h-14 border-b-2">
                            <button onClick={handleBg} className={`w-full   focus:bg-orange-500  ${bg ?'bg-orange-500 text-white':'bg-transparent'}`} >Default</button>
                            <button onClick={handleBg} className={`w-full  focus:bg-orange-500  ${!bg ?'bg-orange-500 text-white':'bg-transparent'}`}>Custom</button>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    )
}

export default settingBill