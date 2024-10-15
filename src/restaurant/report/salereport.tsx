
import { useState } from "react";
import Sidebar_Nav from "../components/sidebar-nav"
import { Link } from "react-router-dom"
import Datepicker from "react-tailwindcss-datepicker";


function saleReport() {
    const NEXT_MONTH = new Date();
    NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: NEXT_MONTH,
    });

    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="p-1 sm:ml-64">
                <div className="flex flex-col">
                    <div className="flex justify-between w-full h-fit items-end">
                        <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                            <div className="flex text-gray-500 pb-2 ">
                                <Link className="hover:text-orange-500 text-xs md:text-sm" to={""}>ລາຍງານ</Link>
                                <Link className="text-xs md:text-sm" to={""}>|</Link>
                                <Link className="text-orange-500 text-xs md:text-sm" to={""}>ຍອດຂາຍ</Link>

                            </div>
                            <div className="flex flex-col md:flex-row gap-3 items-center">
                                <form className="flex items-center max-w-lg mx-auto  relative">
                                    <select name="" id="" className="w-56 md:w-64 h-10 text-xs md:text-sm rounded-md border-gray-300 focus:outline-transparent focus:ring-0">
                                        <option value="">-- ເລືອກປະເພດອາຫານ--</option>
                                    </select>
                                </form>
                                <Datepicker
                                    primaryColor={"orange"}
                                    value={value}
                                    onChange={(newValue) =>
                                        setValue({
                                            startDate: newValue?.startDate ?? new Date(),
                                            endDate: newValue?.endDate ?? new Date(),
                                        })
                                    }
                                    showShortcuts={true}
                                />
                            </div>
                        </div>

                        <div className=" pr-1 mb-2  md:pr-5 ">
                            <button className="flex items-end bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">
                                Export CSV
                            </button>
                        </div>
                    </div>


                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>

                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>

                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>

                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>

                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>

                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>

                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Google Pixel Phone
                                    </th>

                                    <td className="px-6 py-4">
                                        Phone
                                    </td>
                                    <td className="px-6 py-4">
                                        $799
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple Watch 5
                                    </th>

                                    <td className="px-6 py-4">
                                        Wearables
                                    </td>
                                    <td className="px-6 py-4">
                                        $999
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>








                </div>
            </div>


        </div>
    )
}

export default saleReport