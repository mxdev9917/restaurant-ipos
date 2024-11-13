import { useState } from "react"
import { Link } from "react-router-dom"
import { authenticationService } from "./services/authen_service";
import { alertSuccess,alertSuccessV2,alertError,alertDelete } from "../utils/alert";

import { useNavigate } from 'react-router-dom';
import { useAuth } from "./context/authen_context";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
function Authentication() {
    const [passwordType, setPasswordType] = useState(false)
    const [email, setEmail] = useState("eh.dev9917@gmail.com");
    const [pass, setPass] = useState("2WSX@WSX");
    const { setAuthData } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    }
    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPass(e.target.value);
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await authenticationService.postAuthentication(email, pass);
            const token = res.data.token;
            const user = res.data.data[0];
            setAuthData(token, user);
            alertSuccess(navigate, 'igned in successfully');
        } catch (error: any) {
            setLoading(false)
            console.log(error.message);
        }
    };

    return (
        <div className="w-screen h-screen flex text-white justify-center relative bg-[url('/images/svg/blob-scene-haikei.svg')] bg-cover">
            <p className=" font-normal text-sm absolute text-white right-3 bottom-3 pb-2 md:pb-0">ສະຫງວນລິຂະສິດ ໂດຍ @ IPOS | Bran IT</p>
            <div className=" h-screen flex flex-col  items-center md:justify-center ">
                <div className="py-5 flex flex-col items-center">
                    <p className="text-5xl font-bold md:text-orange-500 ">IPOS.LA</p>
                    <p className="pt-1">Use for manage ipos.la system</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col w-[350px] md:w-[360px] h-[380px]  bg-white  rounded-md shadow-2xl p-4">
                    <p className="text-4xl text-orange-500 font-semibold ">Sign in</p>
                    <div className=" h-fit flex flex-col justify-end mt-7">
                        <label htmlFor="" className="text-orange-500">ອີເມລ </label>
                        <input type="email" onChange={handleEmailChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-[7px] mb-2   " placeholder="...." value={email} required />
                    </div>
                    <div className="w-full text-orange-500 relative">
                        <label htmlFor="">ລະຫັດຜ່ານ</label>
                        <input type={passwordType ? "text" : "password"} onChange={handlePassChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-[7px] my-1 " placeholder="•••••••••" value={pass} required />
                        <div onClick={togglePasswordType} className="absolute bottom-3 right-3">
                            {passwordType ? <HiOutlineLockClosed className="text-xl" /> : <HiOutlineLockOpen className="text-xl" />}
                        </div>
                    </div>
                    <div className="flex justify-end">

                        <Link className="px-2 py-2 hover:text-orange-500 text-gray-400" to={'#'}>Forget Password ?</Link>
                    </div>
                    <button

                        className="bg-orange-500 text-white py-[7px] rounded-md   flex items-center justify-center"

                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin h-6 w-6 mr-1 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
                                    <path
                                        className="opacity-75"
                                        fill="none"
                                        strokeWidth="4"
                                        d="M4 12a8 8 0 0 1 8-8V4a10 10 0 0 0-10 10h2z"
                                    ></path>
                                </svg>
                                <span className="text-sm">Signing in...</span>
                            </>
                        ) : (
                            "Sign in"
                        )}
                    </button>
                    
                    <div className=" flex justify-between items-end h-full w-full ">
                    <div onClick={alertDelete} className="text-black">delete</div>
                        <div onClick={alertError} className="text-black">lkkjlk</div>
                        <div onClick={alertSuccessV2} className="text-black">v2</div>
                        <p className="text-orange-500 text-xs">verson 0.0.1</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Authentication