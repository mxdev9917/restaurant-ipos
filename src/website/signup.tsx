import { Button, Checkbox, Label} from "flowbite-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { useState } from "react"
function SignUp() {
    const [passwordType, setPasswordType] = useState(false)
    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[url('/images/svg/blob-scene-haikei.svg')] bg-cover">
            <div className="w-[500px] h- bg-slate-50 rounded-lg shadow-inner p-8">
                <form className="flex max-w-md flex-col gap-3 ">
                    <p className="w-full flex justify-center text-4xl font-semibold text-orange-500">Sign up</p>
                    <p className="text-sm w-full flex justify-center">Let's get start with your 30 days free trial</p>
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
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree" className="flex">
                            I agree with the&nbsp;
                            <Link to="#" className="text-orange-500 hover:underline">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <Button type="submit" className="h-11 text-black focus:ring-2 focus:ring-orange-500" >Register new account</Button>
                    <Label htmlFor="agree" className="flex justify-end w-full">
                        have an account ?&nbsp;
                        <Link to="#" className="text-orange-500 hover:underline">
                            Sign in
                        </Link>
                    </Label>
                    <div className="flex items-center gap-2">
                        <div className="border-[0.5px] w-full h-0 border-gray-300"></div>
                        <p className="">
                            or
                        </p>
                        <div className="border-[0.5px] w-full h-0 border-gray-300"></div>
                    </div>
                    <Button className="flex items-center h-11 focus:ring-2 focus:ring-orange-500" color="gray"><FcGoogle className="text-2xl" /><p className="pl-2">Sign up with Google</p></Button>
                </form>
            </div>
        </div>
    );
}
export default SignUp