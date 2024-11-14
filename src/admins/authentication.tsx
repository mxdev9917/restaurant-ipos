import { useState } from "react";
import { Link } from "react-router-dom";
import { authenticationService } from "./services/authen_service";
import { alertSuccess } from "../utils/alert";
import { authenErrors } from "../utils/error";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./context/authen_context";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
function Authentication() {
    const [passwordType, setPasswordType] = useState(false);
    const [email, setEmail] = useState("eh.dev9917@gmail.com");
    const [pass, setPass] = useState("2wsx@WSX");
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
            alertSuccess(navigate, 'signed in successfully', 'success');
        } catch (error: any) {
            setLoading(false);
            authenErrors(error)  
        }
    };

    return (
        <div className="w-full h-screen flex text-white justify-center bg-[url('/images/svg/blob-scene-haikei.svg')] bg-cover">
            <p className="text-xs md:text-sm font-normal absolute right-3 bottom-3 pb-2 md:pb-0">ສະຫງວນລິຂະສິດ ໂດຍ @ IPOS | Bran IT</p>
            <div className="w-full max-w-md md:max-w-2xl mx-auto flex flex-col items-center justify-center px-4 md:px-12 py-10 md:py-20 h-screen">
                <div className="py-5 text-center">
                    <p className="text-4xl md:text-6xl font-bold text-orange-500">IPOS.LA</p>
                    <p className="pt-1 text-sm md:text-lg text-white">Use for managing ipos.la system</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col w-full bg-white rounded-md shadow-lg p-6 md:p-12 space-y-4">
                    <p className="text-3xl md:text-5xl text-orange-500 font-semibold">Sign in</p>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-orange-500 text-xl">ອີເມລ</label>
                        <input
                            type="email"
                            id="email"
                            onChange={handleEmailChange}
                            className="bg-gray-50 border border-gray-300 text-gray-600 text-lg rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                            placeholder="...."
                            value={email}
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-1 relative">
                        <label htmlFor="password" className="text-orange-500 text-xl">ລະຫັດຜ່ານ</label>
                        <input
                            type={passwordType ? "text" : "password"}
                            id="password"
                            onChange={handlePassChange}
                            className="bg-gray-50 border border-gray-300 text-gray-600 text-lg rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                            placeholder="•••••••••"
                            value={pass}
                            required
                        />
                        <div onClick={togglePasswordType} className="absolute right-4 bottom-4 cursor-pointer text-xl text-orange-500">
                            {passwordType ? <HiOutlineLockClosed /> : <HiOutlineLockOpen />}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link className="text-sm text-gray-400 hover:text-orange-500" to="#">Forgot Password?</Link>
                    </div>
                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-3 rounded-md flex items-center justify-center disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin h-6 w-6 mr-2 text-white"
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
                    <div className="flex justify-end">
                        <p className="text-xs text-orange-500">Version 0.0.1</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Authentication;
