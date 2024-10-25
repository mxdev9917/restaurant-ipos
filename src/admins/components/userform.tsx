import { Button, Checkbox, Label } from "flowbite-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";


import { IoClose } from "react-icons/io5";
import { useState } from "react"

interface AddRestaurantProps {
    handelButtonClose: () => void;
    title:String;


}
const UserForm: React.FC<AddRestaurantProps> = ({ handelButtonClose,title }) => {
    const [passwordType, setPasswordType] = useState(false)
    const handleClick = () => {
        handelButtonClose();
    };
    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    return (
        <div className="w-full h-full flex justify-center items-center absolute top-5 z-50 bg-black/5 overflow-visible">
            <div className="w-[500px] h-[85vh]   mb-10 bg-slate-50 rounded-lg shadow-inner px-8 pb-8 pt-2 overflow-y-scroll ">

                <div className="w-full h-fit py-2 flex justify-between items-center border-b-[1px]">
                    <p className="text-2xl text-orange-500">{title}</p>
                    <button onClick={handleClick} className="text-orange-500 text-3xl hover:bg-gray-200 p-2 rounded-full"><IoClose /></button>
                </div>
                <form className="flex max-w-md flex-col gap-3 mt-2 ">
                    <div className="col-span-2">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 text-xs md:text-sm">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <FaCloudUploadAlt className="text-4xl text-gray-500" />
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
                        <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div>
                    <div className="w-full  relative">
                        <label htmlFor="">ລະຫັດຜ່ານ</label>
                        <input type={passwordType ? "text" : "password"} className="h-11bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full " placeholder="•••••••••" required />
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
                        <input type={passwordType ? "text" : "password"} className="h-11 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full  " placeholder="•••••••••" required />
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
                            <Label htmlFor="name" value="Name" />
                        </div>
                        <input type="text" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="....." required />
                    </div>
                    <div>
                        <div className=" block">
                            <Label htmlFor="email2" value="Phone" />
                        </div>
                        <input type="text" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div>
                    <div>
                        <div className=" block">
                            <Label htmlFor="email2" value="Email" />
                        </div>
                        <input type="text" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div>
                    <Button type="submit" className=" text-white focus:ring-2 focus:ring-orange-500 bg-orange-500" >ບັນທືກ</Button>
                </form>
            </div>
        </div>
    )
}

export default UserForm