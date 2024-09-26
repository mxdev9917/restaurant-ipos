
import { Link } from "react-router-dom"
import { useState } from "react"
import Sidebar_Nav from "../components/sidebar-nav"
function ManageZone() {
    const [isCheckModel, setisCheckModel] = useState(false)
    const [titleModel, setTitleModel] = useState('')
    const [isCheckEven, setisEven] = useState(true)
    function handleModel(evens: string) {
        console.log(evens);

        if (evens == 'add') {
            console.log('if add');
            setTitleModel('ເພີ່ມໂຊນຮ້ານ')
            setisCheckModel(!isCheckModel)
            setisEven(true)
        } else if (evens == 'edit') {
            setTitleModel('ແກ້ໄຂໂຊນຮ້ານ')
            setisCheckModel(!isCheckModel)
            setisEven(false)
        } else {
            setisCheckModel(!isCheckModel)
        }

    }
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="p-8 sm:ml-64">

                <div className="p-1 mt-14">
                    <div className="flex justify-between w-full h-fit items-end">
                        <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                            <div className="flex text-gray-500 ">
                                <Link className="hover:text-orange-500 text-xs md:text-sm" to={""}>ຈັດການຮ້ານ</Link>
                                <Link className="text-xs md:text-sm" to={""}>|</Link>
                                <Link className="text-orange-500 text-xs md:text-sm" to={""}>ຈັດການໂຊນຮ້ານ</Link>

                            </div>
                            <div className="flex">
                                <form className="flex items-center max-w-lg mx-auto mt-2 relative">
                                    <input className="w-48 md:w-64 h-8 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
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
                            <button onClick={() => handleModel('add')} className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">ເພີ່ມ</button>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full  text-left rtl:text-right text-gray-500 ">
                            <thead className="text-base text-gray-600  bg-gray-50 px-10">
                                <tr className="flex justify-between ">

                                    <th scope="col" className="px-1 md:px-6 py-3 text-xs md:text-sm">
                                        ຊື່ໂຊນ
                                    </th>
                                    <th scope="col" className="  py-3 text-xs md:text-sm">
                                        ຈຳນວນໂຕະ
                                    </th>
                                    <th scope="col" className="px-1 md:px-10 py-3 text-xs md:text-sm">
                                        ເມນູ
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="px-10 text-sm">

                                <tr className="bg-white border-b  hover:bg-gray-50 flex justify-between">

                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ext-xs md:text-sm">
                                        ໂຊນ A
                                    </th>
                                    <td className="px-6 py-4 text-xs md:text-sm">
                                        11
                                    </td>

                                    <td className="px-6 py-4 flex">
                                        <button onClick={() => handleModel('edit')} className="font-medium   hover:underline">
                                            <svg className="w-6 h-6 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                            </svg>

                                        </button>
                                        <a href="#" className="font-medium   hover:underline">
                                            <svg className="w-6 h-6 text-red-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                            </svg>

                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
                                    <label htmlFor="name" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">Zone Name <span className="text-red-600"> *</span></label>
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

export default ManageZone