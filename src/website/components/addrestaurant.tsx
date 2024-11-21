import { Button, Label } from "flowbite-react";
import { BiGift } from "react-icons/bi";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react"
import { FaCloudUploadAlt } from "react-icons/fa";

interface AddRestaurantProps {
    handelButtonClose: () => void;
    title: String;
}
const AddRestaurant: React.FC<AddRestaurantProps> = ({ handelButtonClose, title }) => {
    const [passwordType, setPasswordType] = useState(false)
    const handleClick = () => {
        handelButtonClose();
    };
    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    return (
        <div className="w-full h-full flex justify-center items-center absolute top-5 z-50 bg-black/5 overflow-visible">
            <div className="w-fit h-[85vh]   mb-10 bg-slate-50 rounded-lg shadow-inner px-8 pb-8 pt-2 overflow-y-scroll ">

                <div className="w-full h-fit py-2 flex justify-between items-center border-b-[1px]">
                    <p className="text-2xl text-orange-500">{title}</p>
                    <button onClick={handleClick} className="text-orange-500 text-3xl hover:bg-gray-200 p-2 rounded-full"><IoClose /></button>
                </div>
                <div className="flex gap-10">

                    <form className=" flex w-[400px] flex-col gap-3 mt-2  ">
                        <div className="col-span-2">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 text-xs md:text-sm">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2  text-gray-500 text-xs md:text-sm">
                                        <span className="font-semibold">Click to upload</span>
                                        or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, JPG  (MAX. 204x240px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div>
                            <div className=" block">
                                <Label htmlFor="email2" value="Email" />
                            </div>
                            <input type="email" className="bg-gray-50 h-10 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                        </div>
                        <div className="w-full  relative">
                            <label htmlFor="">ລະຫັດຜ່ານ</label>
                            <input type={passwordType ? "text" : "password"} className="h-10bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full " placeholder="•••••••••" required />
                            <button onClick={togglePasswordType} className="absolute bottom-3 right-3">
                                {
                                    passwordType ?
                                        <IoMdLock className="text-2xl text-gray-400" />
                                        :
                                        <IoMdUnlock className="text-2xl text-gray-400" />
                                }
                            </button>
                        </div>
                        <div className="w-full relative">
                            <label htmlFor="">ລະຫັດຜ່ານ</label>
                            <input type={passwordType ? "text" : "password"} className="h-10 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full  " placeholder="•••••••••" required />
                            <button onClick={togglePasswordType} className="absolute bottom-3 right-3">
                                {
                                    passwordType ?
                                        <IoMdLock className="text-2xl text-gray-400" />
                                        :
                                        <IoMdUnlock className="text-2xl text-gray-400" />
                                }
                            </button>
                        </div>
                        <div>
                            <div className=" block">
                                <Label htmlFor="name" value="Restaurant name" />
                            </div>
                            <input type="text" className="bg-gray-50 h-10 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="....." required />
                        </div>
                        <div>
                            <div className=" block">
                                <Label htmlFor="email2" value="Phone" />
                            </div>
                            <input type="text" className="bg-gray-50 h-10 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                        </div>
                        <div>
                            <div className=" block">
                                <Label htmlFor="email2" value="Email" />
                            </div>
                            <input type="text" className="bg-gray-50 h-10 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                        </div>

                        <div className=" block">
                            <label htmlFor="address">address<span className="text-orange-500">*</span></label>
                            <textarea id="address" className="h-36 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="address..." />
                        </div>

                        <Button type="submit" className="h-10 text-black focus:ring-2 focus:ring-orange-500" >ບັນທືກ</Button>
                    </form>

                    <div className="h-full w-[300px] flex flex-col">
                        <div className="w-full h-20 flex items-center border-b-[1px] justify-between mt-2">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 flex items-center justify-center bg-white shadow-inner rounded-lg">
                                    <BiGift className="text-4xl text-orange-500" />
                                </div>
                                <div className="flex flex-col ">
                                    <p className="text-lg">FREE</p>
                                    <p className="text-xs">frist month</p>
                                </div>
                            </div>
                            <div className="h-full flex items-start mt-2 ">
                                <p className="text-sm">300,000 ກີບ</p>
                            </div>
                        </div>
                        <div className="w-full flex gap-2 mt-3">
                            <input type="text" className="bg-gray-50 h-8 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="XXX - XXX" required />
                            <button className="h-8 w-fit bg-green-500 text-xs text-white  rounded-lg px-3 ">Apply</button>
                        </div>
                        <div className="w-full h-20 "></div>
                        <div className="w-full h-20 flex flex-col gap-2 justify-end  border-y-[1px] ">
                            <div className="flex justify-between">
                                <p className="text-xs">Sub total</p>
                                <p className="text-xs">300,000</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs">Discount</p>
                                <p className="text-xs">300,000</p>
                            </div>

                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-base">Total</p>
                            <p className="text-base">300,000</p>
                        </div>
                        <div className="h-full w-full flex flex-col items-center ">
                        <img className="w-[120px] my-3" src="images/qr.jpeg" alt="" />
                        <p className="text-xl font-semibold text-orange-500">EH MIXAI</p>
                        <p className="text-base font-semibold text-[#3a393a] my-2">010-12-00-01456791-001</p>
                        <div className="py-3 px-5">
                            <label htmlFor="img" className="flex items-center cursor-pointer">
                            <FaCloudUploadAlt className="text-3xl text-orange-500"/>
                                <span className="text-base font-bold pl-2 opacity-65"> ອັບໂຫລດ</span>
                                <input className=" hidden" type="file" name="img" id="img" />
                            </label>
                        </div>
                        <p className="text-xs text-red-500">ຈຳ້ເປັນຕ້ອງອັບໂຫລດຫຼັກຖານການໂອນເງີນ</p>

                        </div>

                    </div>



                </div>

            </div>
        </div>
    )
}

export default AddRestaurant