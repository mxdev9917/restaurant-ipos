import { useState } from "react";
import Nav from "../components/nav"
import { FaUserCircle } from "react-icons/fa";
import { Dropdown, DropdownItem } from "flowbite-react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { RiEmojiStickerLine } from "react-icons/ri";
function message() {
    const [translate, setTranslate] = useState(true);
    function isCheckMenu() {
        setTranslate(!translate);
        console.log(translate);

    }
    return (

        <div className="flex flex-col h-full w-[100vw] overflow-visible">
            <Nav isMenu={true} handelMenu={isCheckMenu} />
            <div className="flex flex-row h-full w-full overflow-hidden relative">
                <div className={`${translate ? "flex" : "hidden"} flex-col gap-1 max-h-screen h-full w-full sm:w-[400px] shadow-inner bg-slate-100 overflow-y-auto sm:block absolute z-50`}>
                    <div className="flex flex-col justify-between w-full h-24 bg-slate-100 p-2 border-b-[1px] border-slate-100 sursor-pointer  transition duration-200 ease-in-out">
                        <div className="flex items-center justify-between w-full text-gray-600">
                            <p className="font-semibold text-xl">ຂໍ້ຄວາມ</p>
                            <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full p-1 cursor-pointer" ><HiOutlineDotsVertical  className="text-xl" /></span>}>
                                <DropdownItem>Dashboard</DropdownItem>
                                <DropdownItem>Settings</DropdownItem>
                                <DropdownItem>Earnings</DropdownItem>
                                <DropdownItem>Sign out</DropdownItem>
                            </Dropdown>

                        </div>
                        <form className="flex items-center max-w-full mx-auto relative ">
                            <input
                                // onChange={(e) => setTxtSearch(e.target.value)} value={txtSearch} required
                                className="w-[450px] h-10 text-xs md:text-sm rounded-md border-gray-300 focus:outline-transparent focus:ring-0 focus:border-orange-500"
                                type="text" placeholder="ຄົ້ນຫາ..." />
                            <button className="absolute right-3 top-2 flex  ">

                                <svg className="w-6 h-6 text-gray-500 "
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round"
                                        strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                </svg>

                            </button>
                        </form>
                    </div>
                    <div className="flex items-center w-full  h-20 bg-slate-100 p-2 border-b-[1px] border-slate-200 sursor-pointer hover:bg-slate-200 transition duration-200 ease-in-out ">
                        <FaUserCircle className="text-5xl text-slate-400" />
                        <div className="flex flex-col justify-center items-start ml-2 pl-3">
                            <p className="font-semibold text-xl">ໂຕະ 01</p>
                            <p className="truncate w-56 text-sm text-slate-500">This should take remaining space fsdfsd dsfsdfSD sdasdasas</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full  h-20 bg-slate-100 p-2 border-b-[1px] border-slate-200 sursor-pointer hover:bg-slate-200 transition duration-200 ease-in-out">
                        <FaUserCircle className="text-5xl text-slate-400" />
                        <div className="flex flex-col justify-center items-start ml-2 pl-3">
                            <p className="font-semibold text-xl">ໂຕະ 01</p>
                            <p className="truncate w-56 text-sm text-slate-500">This should take remaining space fsdfsd dsfsdfSD sdasdasas</p>
                        </div>
                    </div>

                </div>
                <div className={`flex flex-col h-full w-full bg-slate-200  ${translate ? "pl-[405px]" : "pl-[0px] "} sm:pl-[405px]`}>
                    <div className="flex items-center  h-20 bg-slate-200 ">
                        <FaUserCircle className="text-5xl text-slate-400" />
                        <div className="flex flex-col justify-center items-start ml-2 pl-3">
                            <p className="font-semibold text-2xl">ໂຕະ 01</p>
                            {/* <p className="truncate w-64 text-sm text-slate-500">This should take remaining space fsdfsd dsfsdfSD sdasdasas</p> */}
                        </div>
                    </div>
                    <div className="flex-grow bg-slate-100">This should take remaining space</div>
                    <div className="flex items-center gap-1.5 h-16 bg-slate-200 z-40 px-5">
                    <button className="flex justify-center items-center h-10 w-10 bg-white rounded-md"><RiEmojiStickerLine  className="text-2xl text-slate-600" /></button>
                        <input type="text" className="h-10 w-full outline-none border-0 rounded-md focus:ring-1 focus:ring-orange-500" placeholder="ຂໍ້ຄວາມ ..." />
                        <button className="flex justify-center items-center h-10 w-12 bg-white rounded-md"><IoIosSend className="text-2xl text-slate-600" /></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default message