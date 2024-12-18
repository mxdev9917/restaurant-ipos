import { useState } from "react"
import { Link } from "react-router-dom"
import blobSceneHaikei from '/images/svg/blob-scene-haikei.svg';
// import { authenService } from "./services/authen";
// import { alertSuccess } from "../utils/alert";
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from "../context/context";
// import LoadingSpinner from "../utils/LoadingSpinner";

// import { authenErrors } from "../utils/error";
import { IoMdLock, IoMdUnlock } from "react-icons/io";


function Authen() {
    const [passwordType, setPasswordType] = useState(false)
    // const [loading, setLoading] = useState(false);
    // const { setAuthData } = useAuth();
    // const navigate = useNavigate();
    const [email, setEmail] = useState("owner1@gmail.com");
    const [password, setPassword] = useState("1234");
    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    // const formSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    //     e.preventDefault();
    //     try {
    //         setLoading(true)
    //         const res = await authenService.postAuthen(email, password);
    //         const token = res.token;
    //         const data = res.data;
    //         setAuthData(token, data);
    //         alertSuccess(navigate, "/profiles", "ເຂົ້າສູ່ລະບົບສຳເລັດ", "success");
    //     } catch (error: any) {
    //         console.log(error.message);
    //         authenErrors(error);

    //     } finally {
    //         setLoading(false);
    //     }





    // }

    return (
        <div className="w-screen h-screen flex text-white justify-center relative bg-cover" style={{ backgroundImage: `url(${blobSceneHaikei})` }}>
            <p className=" font-normal text-sm absolute text-white right-3 bottom-3 pb-2 md:pb-0">ສະຫງວນລິຂະສິດ ໂດຍ @ IPOS | Bran IT</p>
            <div className=" h-screen flex flex-col  items-center md:justify-center ">
                <p className="text-5xl font-bold md:text-orange-500 py-8">IPOS.LA</p>
                <form
                    // onSubmit={formSubmit} 
                    className="flex flex-col w-[350px] md:w-[450px] h-[450px]  bg-white  rounded-md shadow-2xl p-4">
                    <p className="text-4xl text-orange-500 font-semibold mt-5">Sign in</p>
                    <div className=" h-fit flex flex-col justify-end mt-7">
                        <label className="text-orange-500" htmlFor="">ອີເມລ </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2   " placeholder="john.doe@company.com" required />
                    </div>
                    <div className="w-full text-orange-500 relative">
                        <label htmlFor="">ລະຫັດຜ່ານ</label>
                        <input type={passwordType ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 my-2 " placeholder="•••••••••" required />
                        <div onClick={togglePasswordType} className="absolute bottom-5 right-3">
                            {
                                passwordType ?
                                    <IoMdLock className="text-2xl text-gray-400" />
                                    :
                                    <IoMdUnlock className="text-2xl text-gray-400" />

                            }
                        </div>
                    </div>
                    <div className="flex justify-end">

                        <Link className="px-2 py-1 hover:text-orange-500 text-gray-400" to={'#'}>Forget Password ?</Link>
                    </div>
                    <button className="bg-orange-500 text-white py-2.5 rounded-md my-2 font-semibold">
                        {/* {loading ?
                            <LoadingSpinner text="ເຂົ້າສູ່ລະບົບ" />
                            :
                            "ເຂົ້າສູ່ລະບົບ"
                        } */}
                        ເຂົ້າສູ່ລະບົບ
                    </button>
                    <div className=" flex justify-end items-end h-full w-full ">
                        <p className="text-orange-500 text-xs">verson 0.0.1</p>
                    </div>
                </form>
                <div className="flex justify-end text-white  w-[350px] md:w-[450px] pt-5">
                    <div className="font-normal text-white flex text-sm">
                        <Link to={'#'} >ເງື່ອນໄຂການໃຫ້ບໍລິການ</Link>
                        <p>|</p>
                        <Link className="focus:text-orange-500" to={'#'}>ນະໂຍບາຍສ່ວນຕົວ</Link>
                    </div>
                </div>
            </div>






            {/* <div className="w-[40%] bg-cover bg-center bg-[url('https://www.altijdlimburg.com/sites/default/files/styles/paragraph_full_image/public/2023-10/Ralf-Berendsen-Fine-Dining-restaurant-Lanaken.jpg?itok=LFyZ0lXN')]">
                <img src="" alt="" /></div>
            <div className="w-[60%] h-full  flex justify-center">
                <div className="h-full w-[70%] flex flex-col justify-center">
                    <p className="text-4xl font-bold">ຍິນດີຕ້ອນສູ່ລະບົບ <span className="text-orange-500">IPOS</span></p>
                    <form className="w-[70%] mt-4">
                        <input type="email" name="email" id="email" className="bg-gray-50 border    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-3" placeholder="name@company.com"/>
                        <input type="email" name="email" id="email" className="bg-gray-50 border    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-3" placeholder="name@company.com"/>
                    </form>
                </div>
            </div> */}


        </div>
    )
}

export default Authen