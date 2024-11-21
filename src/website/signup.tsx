import { Button, Checkbox, Label } from "flowbite-react";
import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { useState } from "react"
import { alertError, alertSuccess } from "../utils/alert";
import { postSign_upService } from "./services/signup_service";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/context";
import LoadingSpinner from "../utils/LoadingSpinner";
import { customerSignUpError } from "../utils/error";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confpass, setConfPass] = useState("")
    const [phone, setPhone] = useState("");
    const [ischeckBtn, setIscheckBtn] = useState(true);
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();
    const { setAuthData } = useAuth();
    const [passwordType, setPasswordType] = useState(false)
    const [loading, setLoading] = useState(false);

    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    const handleCheckboxChange = (event: any) => {
        setIscheckBtn(!event.target.checked);
        setAgree(event.target.checked)
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();


        if (pass !== confpass) {
            alertError("ລະຫັດຜ່ານບໍ່ຕົງກັນ", "error");
        }
        if (agree == false) {
            alertError("ກະລຸນາກົດຍອມຮັບເງື່ອນໄຂ", "warning");
        }
        try {
            setLoading(true)
            const res = await postSign_upService.postSign_up(name, email, phone, pass);
            console.log(res.data);
            const token = res.token;
            const user = res.data[0];
            setAuthData(token, user);
            alertSuccess(navigate, "/profiles", "ລົງທະບຽນສຳເລັດ", "success");
        } catch (error: any) {
            console.log(error.message);
            customerSignUpError(error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[url('/images/svg/blob-scene-haikei.svg')] bg-cover">
            <div className="w-[500px] h- bg-slate-50 rounded-lg shadow-inner p-8">
                <form onSubmit={formSubmit} className="flex max-w-md flex-col gap-3 ">
                    <p className="w-full flex justify-center text-4xl font-semibold text-orange-500">Sign up</p>
                    <p className="text-sm w-full flex justify-center">Let's get start with your 30 days free trial</p>
                    <div>
                        <div className=" block">
                            <Label htmlFor="name" value="Name" />
                        </div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="....." required />
                    </div>
                    <div>
                        <div className=" block">
                            <Label htmlFor="phone" value="Phone" />
                        </div>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div>
                    <div>
                        <div className=" block">
                            <Label htmlFor="email" value="Email" />
                        </div>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div>
                    <div className="w-full relative">
                        <label htmlFor="">ລະຫັດຜ່ານ</label>
                        <input type={passwordType ? "text" : "password"} value={pass} onChange={(e) => setPass(e.target.value)} className="h-11bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full " placeholder="•••••••••" required />
                        <div onClick={togglePasswordType} className="absolute bottom-3 right-3">
                            {
                                passwordType ?
                                    <IoMdLock className="text-2xl text-gray-400" />
                                    :
                                    <IoMdUnlock className="text-2xl text-gray-400" />
                            }
                        </div>
                    </div>
                    <div className="w-full relative">
                        <label htmlFor="">ຢືນຍັນລະຫັດຜ່ານ</label>
                        <input type={passwordType ? "text" : "password"} value={confpass} onChange={(e) => setConfPass(e.target.value)} className="h-11 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full  " placeholder="•••••••••" required />
                        <div onClick={togglePasswordType} className="absolute bottom-3 right-3">
                            {
                                passwordType ?
                                    <IoMdLock className="text-2xl text-gray-400" />
                                    :
                                    <IoMdUnlock className="text-2xl text-gray-400" />
                            }
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" onChange={handleCheckboxChange} />
                        <Label htmlFor="agree" className="flex">
                            I agree with the&nbsp;
                            <Link to="#" className="text-orange-500 hover:underline">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <Button type="submit" className="h-11  text-black focus:ring-2 focus:ring-orange-500" disabled={ischeckBtn === true}  >
                        {loading ?
                            <LoadingSpinner text="ລົງທະບຽນ" />
                            :
                            "ລົງທະບຽນ"
                        }
                    </Button>
                    <Label htmlFor="agree" className="flex justify-end w-full">
                        have an account ?&nbsp;
                        <Link to={''} className="text-orange-500 hover:underline" >
                            Sign in
                        </Link>
                    </Label>
                    {/* <div className="flex items-center justify-center gap-2">
                        <div className="border-[0.5px] w-full h-0 border-gray-300"></div>
                        <p className="">
                            or
                        </p>
                        <div className="border-[0.5px] w-full h-0 border-gray-300"></div>
                    </div>
                    <div className="flex justify-center w-full">
                        <div className="flex items-center justify-center w-fit h-fit ring-1 ring-gray-300 rounded-md hover:ring-1 hover:ring-orange-500 px-2 py-1" color="gray"><FcGoogle className="text-2xl" /><p className="pl-2">Sign up with Google</p></div>
                    </div> */}

                </form>
            </div>
        </div>
    );
}
export default SignUp