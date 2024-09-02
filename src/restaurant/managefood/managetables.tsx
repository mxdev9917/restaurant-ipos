import { Link } from "react-router-dom"
import NavBar from "../componets/navbar"
import Sidebar from "../componets/sidebar"
import TableItem from "../componets/tableitem"
import { useState } from "react"

function manageTables() {
    const [isCheckModel, setisCheckModel] = useState(false)
    const [titleModel, setTitleModel] = useState('')
    const [isCheckEven, setisEven] = useState(true)
    function handleModel(evens) {
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
        <div className="w-screen h-screen">
            <NavBar />
            <div className="flex w-full ">
                {/* ໃນສ່ວນນີ້ມີບັນ ເວລາສະແດງໃນຈໍໂທລະສັບ */}
                <div className="">
                    <Sidebar />
                </div>
                <div className="flex w-full   ">
                    <div className="flex flex-col w-full py-5 px-3">
                        <div className="flex justify-between w-full h-fit items-end border-b-[1px] border-gray-400">
                            <div className="flex flex-col w-fit h-fit pb-4">
                                <div className="flex text-gray-500">
                                    <Link className="hover:text-orange-500" to={""}>ຈັດການຮ້ານ</Link>
                                    <Link className="" to={""}>|</Link>
                                    <Link className="text-orange-500 " to={""}>ຈັດການໂຕະ</Link>

                                </div>
                                <div className="flex">
                                    <form className="flex items-center max-w-lg mx-auto mt-4 mr-2 relative">
                                        <select className="w-52 md:w-72 rounded-full border-gray-300 focus:outline-transparent focus:ring-0">
                                            <option value="">ໂຊກ A</option>
                                            <option value="">ໂຊກ B</option>
                                            <option value="">ໂຊກ C</option>
                                        </select>

                                    </form>
                                    <form className="flex items-center max-w-lg mx-auto mt-4 relative">
                                        <input className="w-52 md:w-72 rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
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
                            </div>

                            <div className=" pr-1 mb-6  md:pr-5 ">
                                {/* <Link to={'/addfood'} className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white">ເພີ່ມເມນູ</Link> */}
                                <button onClick={() => handleModel('add')} className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white">ເພີ່ມໂຕະ</button>
                            </div>
                        </div>



                        <div className="flex flex-wrap gap-3 mt-3 w-fit ">
                            {items.map((item, index) => (
                                <div key={index} className="w-52 h-60">
                                    <TableItem onEdit={handleModel} />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

                <div className={`w-screen ${!isCheckModel ? 'hidden' : 'block'}  h-screen bg-black/10  absolute  flex justify-center items-center`}>
                    <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
                        <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
                            <p className="text-xl font-semibold text-orange-500">{titleModel}</p>
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
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Table Name <span className="text-red-600"> *</span></label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name..." />
                                    </div>
                                    
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Zone<span className="text-red-600"> *</span></label>
                                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  ">
                                            <option value=''>Select zone</option>
                                            <option value="TV">TV/Monitors</option>
                                            <option value="PC">PC</option>
                                            <option value="GA">Gaming/Console</option>
                                            <option value="PH">Phones</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                {
                                    isCheckEven ?

                                        <button type="submit" className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                            ເພີ່ມໂຕະ
                                        </button>
                                        :
                                        <button type="submit" className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                           ແກ້ໄຂໂຕະ
                                        </button>
                                }
                            </form>



                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default manageTables