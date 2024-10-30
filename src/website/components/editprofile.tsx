import { Button, Label } from "flowbite-react";

import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react"
interface EditProfileProps {
    handelButtonClose: () => void;
    
}
const EditProfile: React.FC<EditProfileProps> = ({  handelButtonClose}) => {
    const [passwordType, setPasswordType] = useState(false)
    const handleClick = () => {
        handelButtonClose();
    };
    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    return (
        <div className="w-full h-full flex justify-center items-center absolute bg-black/5 z-50">
            <div className="w-[500px] h- bg-slate-50 rounded-lg shadow-inner px-8 pb-8 pt-2">
                <div className="w-full h-fit py-2 flex justify-between items-center border-b-[1px]">
                    <p className="text-2xl text-orange-500">ແກ້ໄຂຂໍ້ມູນສ່ວນຕົວ</p>
                    <button onClick={handleClick} className="text-orange-500 text-3xl hover:bg-gray-200 p-2 rounded-full"><IoClose /></button>
                </div>
                <form className="flex max-w-md flex-col gap-3 mt-2 ">

                    <div>
                        <div className=" block">
                            <Label htmlFor="name" value="Name" />
                        </div>
                        <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="....." required />
                    </div>
                    <div>
                        <div className=" block">
                            <Label htmlFor="email2" value="Email" />
                        </div>
                        <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div>
                    <div>
                        <div className=" block">
                            <Label htmlFor="phone" value="phone" />
                        </div>
                        <input type="text" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="020 xx xxx xxx" required />
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
                    <Button type="submit" className="h-11 text-black focus:ring-2 focus:ring-orange-500 mt-4" >ບັນທືກ</Button>
                </form>
            </div>
        </div>
    )
}

export default EditProfile