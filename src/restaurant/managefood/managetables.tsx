import { Link } from "react-router-dom"
import { useState } from "react"
import Sidebar_Nav from "../components/sidebar-nav"
import TableItem from "../components/tableitem"

function ManageTables() {
    const [isCheckModel, setisCheckModel] = useState(false)
    const [titleModel, setTitleModel] = useState('')
    const [isCheckEven, setisEven] = useState(true)
    function handleModel(evens: string) {
        if (evens == 'add') {
            setTitleModel('ເພີ່ມໂຕະ')
            setisCheckModel(!isCheckModel)
            setisEven(true)
        } else if (evens == 'edit') {
            setTitleModel('ແກ້ໄຂໂຕະ')
            setisCheckModel(!isCheckModel)
            setisEven(false)
        } else {
            setisCheckModel(!isCheckModel)
        }
    }
    const items = Array.from({ length: 10 }, (_, index) => index);
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="pt-8 sm:ml-64">
                <div className="p-1 mt-14">
                    <div className="flex justify-between w-full h-fit items-end border-b-2">
                        <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                            <div className="flex text-gray-500 ">
                                <Link className="hover:text-orange-500 text-xs md:text-sm" to={""}>ຈັດການຮ້ານ</Link>
                                <Link className="text-xs md:text-sm" to={""}>|</Link>
                                <Link className="text-orange-500 text-xs md:text-sm" to={""}>ຈັດການໂຊນຮ້ານ</Link>
                            </div>
                            <div className="flex flex-col md:flex-row ">
                                <form className="flex items-center max-w-lg mx-auto mt-2 pr-0 md:pr-2">
                                    <select className="w-48 md:w-64 h-9 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0">
                                        <option className="" value="">--ເລືອກໂຊນ--</option>
                                    </select>
                                </form>
                                <form className="flex items-center max-w-lg mx-auto mt-2 relative">
                                    <input className="w-48 md:w-64 h-9 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
                                        type="text" placeholder="ຄົ້ນຫາ..." />
                                    <button className="absolute right-3 top-1.5 flex  ">

                                        <svg className="w-6 h-6 text-gray-500 "
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round"
                                                strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                        </svg>

                                    </button>
                                </form>

                            </div>
                        </div>

                        <div className=" pr-1 mb-2  md:pr-5 ">
                            <button onClick={() => handleModel('add')} className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">ເພີ່ມໂຕະ</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-3 w-fit ">
                        {items.map((_item, index) => (
                            <div key={index} className=" w-28 md:w-44 h-32 md:h-44">
                                <TableItem onEdit={handleModel} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`w-screen ${!isCheckModel ? 'hidden' : 'block'}  h-screen bg-black/10  absolute  flex justify-center items-center`}>
                <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
                    <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
                        <p className="text-xl font-semibold text-orange-500 ">{titleModel}</p>
                        <button onClick={() => handleModel('close')} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal </span>
                        </button>

                    </div>
                    <div className="px-3 mt-3">
                        <form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">Table Name <span className="text-red-600"> *</span></label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name..." />
                                </div>
                            </div>
                            {
                                isCheckEven ?

                                    <button type="submit" className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg  px-5 py-2.5 text-center text-xs md:text-sm">
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        ເພີ່ມ
                                    </button>
                                    :
                                    <button type="submit" className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center ">
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        ແກ້ໄຂ
                                    </button>
                                }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageTables