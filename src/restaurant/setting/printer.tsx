import Sidebar_Nav from "../components/sidebar-nav"
import { Link } from "react-router-dom";
import PrinterItem from "./components/prnteritem";
import { useState } from "react"
import { Label } from "flowbite-react";

function Printer() {
    const items = Array.from({ length: 5 }, (_, index) => index);
    const [isCheckModel, setisCheckModel] = useState(true)
    const [ipTitle, setIpTitle] = useState("")
    function handleModel() {
        setisCheckModel(!isCheckModel)
    }
    function SelectIP(ip:string) {
        setIpTitle(ip);
        console.log(ip);
    }

    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="pt-8 sm:ml-64">
                <div className="mt-14">
                    <div className="flex flex-col">
                        <div className="flex justify-between w-full h-fit items-end border-b-2">
                            <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                                <div className="flex text-gray-500 ">
                                    <Link className="text-orange-500 text-xs md:text-sm" to={""}>
                                        ຕັ້ງຄ່າປີ້ນເຕີ
                                    </Link>
                                </div>
                                <div className="flex">
                                    <form className="flex items-center max-w-lg mx-auto mt-2 relative">
                                        <input
                                            className="w-48 md:w-64 h-8 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
                                            type="text"
                                            placeholder="ຄົ້ນຫາ..."
                                        />
                                        <button className="absolute right-3 top-1.5 flex  ">
                                            <svg
                                                className="w-6 h-6 text-gray-500 "
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                                />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className=" pr-1 mb-2  md:pr-5 ">
                                <button
                                    onClick={handleModel}
                                    className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm"
                                >
                                    ເພີ່ມ
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap  gap-2 md:gap-3 mt-3 w-fit px-3 ">
                            {items.map((_item, index) => (
                                <div key={index} className="">
                                    <PrinterItem />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-screen ${!isCheckModel ? 'hidden' : 'block'}  h-screen bg-black/10  absolute  flex justify-center items-center`}>
                <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
                    <div className="flex justify-between p-3 border-b-2">
                        <p className="text-xl font-medium">ເພີ່ມປີ້ນເຕີ</p>
                        <button onClick={handleModel} className="text-red-500 px-2 rounded-lg hover:bg-slate-100">ຍົກເລີກ</button>
                    </div>
                    <form className="flex flex-col p-3">
                        <Label htmlFor="printerNane">ຊື່ປີ້ນເຕີ</Label>
                        <input type="text" name="printerNane" id="printerNane" className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-none block w-full  cursor-pointer  " />
                        <Label htmlFor="printerNane">ໄອພີປີ້ນເຕີ</Label>
                        <input type="text" disabled value={ipTitle} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full  cursor-not-allowed  " />
                    </form>
                    <div className=" w-full min-h-40 p-3 overflow-y-scroll border-t-2 ">
                        <div className="flex justify-between items-center border-b-2 mb-1">
                            <p className="text-sm text-orange-500 ">IP ທີ່ຄົ້ນຫາພົບ</p>
                            <button className=" rounded-lg hover:bg-slate-100 p-1">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
                                </svg>
                            </button>
                        </div>
                        <p onClick={() => SelectIP("192.168.0.20")} className="font-medium text-sm cursor-pointer hover:text-orange-500">192.168.0.20</p>
                        <p onClick={() => SelectIP("192.168.0.26")} className="font-medium text-sm cursor-pointer hover:text-orange-500">192.168.0.21</p>
                    </div>
                    <div className="flex justify-end p-3 border-t-2">
                        <button onClick={handleModel} className="flex justify-center items-center text-white bg-green-500 p-2 rounded-lg ">ບັກທືກ</button>
                    </div>


                </div>
            </div>
        </div>
    )

}
export default Printer