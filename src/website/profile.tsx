import NavBar from "./components/navbar";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

function Profiles() {
    return (
        <div className="w-screen h-screen flex flex-col ">
            <div className=" pt-2">
                <NavBar />
            </div>
            <div className="w-full h-screen flex flex-col items-center" >
                <div className="w-[65%] h-full bg-white">
                    <div className="flex gap-2 mt-4">
                        <div className="flex bg-slate-50 justify-center items-center relative rounded-lg shadow-sm p-3">
                            <img className="w-[135px] h-[135px] rounded-lg " src="/images/test-i-img.jpg" alt="" />
                            <label htmlFor="profile-img" className="absolute left-[110px] top-[113px] cursor-pointer">
                                <svg className="w-8 h-8 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </label>
                            <input type="file" id="profile-img" name="profile-img" className="w-0 hidden" />
                        </div>
                        <div className="w-full h-40 bg-slate-50 rounded-lg shadow-sm p-3 text-sm flex">
                            <div className="flex w-full flex-col">
                                <div className="text-lg text-orange-500 pb-2">ຂໍ້ມູນເຈົ້າຮ້ານ</div>
                                <div className="flex relative pb-1"><p className="pr-1 text-orange-500">ຊື່:</p> <p>ຈີນ່າ ທຳມະວົງ </p> <button className="ml-2 pb-2  right-5 hover:text-orange-500"><FaEdit /></button> </div>
                                <div className="flex relative "><p className="pr-1 text-orange-500">ເບີໂທ:</p> <p>020 56085825</p> <button className="ml-2 pb-2  right-5  hover:text-orange-500"><FaEdit /></button> </div>
                                <div className="flex relative "><p className="pr-1 text-orange-500">ອີເມລ:</p> <p>eh.dev9917@gmail.com</p> <button className=" ml-2 pb-2  right-5 hover:text-orange-500"><FaEdit /></button> </div>
                                <div className="flex items-end pt-2"><MdOutlineDateRange className="text-xl text-orange-500" /> <p className="font-semibold text-sm" >16/10/2024</p> </div>
                            </div>
                            <div className="w-full flex flex-col bg-slate-600">
                              
                                        <Label htmlFor="email4" value="Your email" />
                                        <div className="w-full h-8 rounded-sm bg-white"></div>
                                   
                            </div>
                            <div className="w-full flex justify-end p-2 ">
                                <Link className="bg-orange-500 text-white h-fit py-1 px-2 rounded-sm">ໄປທີ່ຮ້ານ</Link>
                            </div>
                        </div>

                    </div>




                </div>
            </div>

        </div>
    );
}
export default Profiles