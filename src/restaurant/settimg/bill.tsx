import { useState } from "react"
import Sidebar_Nav from "../componets/sidebar-nav"
import { Link } from "react-router-dom"



function settingBill() {
    const [bg, setBg] = useState(true)
    function handleBg() {
        setBg(!bg);
    }
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="p-1 sm:ml-64">
                <div className="mt-14 flex flex-col-reverse md:flex-row">
                    <div className="w-full">olwef</div>
                    <div className=" w-[365px] h-full border-l-2 shadow-md flex flex-col ">
                        <div className="flex w-full  h-14 border-b-2">
                            <button onClick={handleBg} className={`w-full   focus:bg-orange-500  ${bg ? 'bg-orange-500 text-white' : 'bg-transparent'}`} >Default</button>
                            <button onClick={handleBg} className={`w-full  focus:bg-orange-500  ${!bg ? 'bg-orange-500 text-white' : 'bg-transparent'}`}>Custom</button>
                        </div>
                        <div className={`w-full flex flex-col  pt-6  pb-5 items-center ${bg ? 'block' : 'hidden'}`}>
                            <p className="text-xl font-medium ">ໃບເກັບເງີນ</p>
                            <div className="flex justify-between w-full text-sm font-medium pt-3 px-5">
                                <p>ຮ້ານ: ອາຫານເຍົາວະລາດ</p>
                                <p>ເບີໂທ: 020 56085825</p>
                            </div>
                            <div className="flex justify-between w-full text-sm pt-2 px-5">
                                <p>ວັນທີ: 19/09/2024 11:00 PM</p>
                                <p>ໂຕະ: 11</p>
                            </div>
                            <div className="flex justify-between w-full text-sm pt-2 px-5 ">
                                <p>ພງ: eh</p>
                                <p>ເລກທີບີນ: 2311</p>
                            </div>
                            <div className="relative w-[360px]  overflow-x-auto pt-2 px-0 md:px-2  m">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-100  ">
                                        <tr>
                                            <th scope="col" className="px-4 py-3 rounded-s-lg">
                                                Product name
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Qty
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Price
                                            </th>
                                            <th scope="col" className="px-4 py-3 rounded-e-lg">
                                                Total
                                            </th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                Apple MacBook"
                                            </th>
                                            <td className="px-4 py-4">
                                                1
                                            </td>
                                            <td className="px-4 py-4">
                                                $2999
                                            </td>
                                            <td className="px-4 py-4">
                                                $2999
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                Microsoft
                                            </th>
                                            <td className="px-4 py-4">
                                                1
                                            </td>
                                            <td className="px-4 py-4">
                                                $1999
                                            </td>
                                            <td className="px-4 py-4">
                                                $1999
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-4 py-4">
                                                1
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-4 py-4">
                                                1
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-4 py-4">
                                                1
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-4 py-4">
                                                1
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-4 py-4">
                                                1
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-4 py-4">
                                                1
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-4 py-4">
                                                1
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                            <td className="px-4 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        
                                    </tbody>

                                </table>
                                <div className="flex justify-between w-full text-sm p-5 border-t-2 border-b-2">
                                    <div className="flex flex-col">
                                        <p className="pb-1 font-medium">ອັດຕາແລກປ່ຽນ</p>
                                        <p>฿ 670</p>
                                        <p>$ 22.000</p>
                                    </div>
                                    <div className="flex flex-col items-end font-medium pb-1">
                                        <p>
                                            ລວມເງີນ ₭:
                                        </p>
                                        <p>฿:</p>
                                        <p>$:</p>
                                    </div>
                                    <div className="flex flex-col pb-1">
                                        <p className="font-medium">1.902.340</p> 
                                        <p>2000</p>
                                        <p> 90.15</p>
                                    </div>
                                </div>
                                
                            </div>
                            <p className="pt-3 text-base font-medium">ຂອບໃຈ</p>
                            <p className=" text-sm ">ໂອກາດໜ້າເຊີນໄໝ່</p>

                        </div>
                        <div className={`w-full ${bg ? 'hidden' : 'block'}`}>on</div>
                    </div>




                </div>
            </div>


        </div>
    )
}

export default settingBill