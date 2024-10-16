import { useState } from "react"
import { Link } from "react-router-dom"


function Authen() {
    const [passwordType, setPasswordType] = useState(false)
    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    return (
        // <div className="w-screen h-screen flex  justify-between bg-[url('/src/assets/images/svg/blob-scene-haikei.svg')] bg-cover">
        <div className="w-screen h-screen flex text-white justify-center relative bg-[url('/images/svg/blob-scene-haikei.svg')] bg-cover">
            {/* <div className="w-[60%] h-screen flex flex-col justify-center items-center">
                

            </div> */}
              <p className=" font-normal text-sm absolute text-white right-3 bottom-3 pb-2 md:pb-0">ສະຫງວນລິຂະສິດ ໂດຍ @ IPOS | Bran IT</p>
            <div className=" h-screen flex flex-col  items-center md:justify-center ">
                <p className="text-5xl font-bold md:text-orange-500 py-8">IPOS.LA</p>
                <form className="flex flex-col w-[350px] md:w-[450px] h-[450px]  bg-white  rounded-md shadow-2xl p-4">
                    <p className="text-4xl text-orange-500 font-semibold mt-5">Sign in</p>
                    <div className=" h-fit flex flex-col justify-end mt-7">
                        <label htmlFor="">ອີເມລ </label>
                        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2   " placeholder="john.doe@company.com" required />
                    </div>
                    <div className="w-full text-orange-500 relative">
                        <label htmlFor="">ລະຫັດຜ່ານ</label>
                        <input type={passwordType ? "text" : "password"} className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2 " placeholder="•••••••••" required />
                        <button onClick={togglePasswordType} className="absolute bottom-5 right-3">
                            {
                                passwordType ?
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M15 7a2 2 0 1 1 4 0v4a1 1 0 1 0 2 0V7a4 4 0 0 0-8 0v3H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V7Zm-5 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clipRule="evenodd" />
                                    </svg>
                                    :
                                    <svg className="w-6 h-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clipRule="evenodd" />
                                    </svg>

                            }
                        </button>
                    </div>
                    <div className="flex justify-end">

                        <Link className="px-2 py-1 hover:text-orange-500 text-gray-400" to={'#'}>Forget Password ?</Link>
                    </div>
                    <button className="bg-orange-500 text-white py-2.5 rounded-md my-2 font-semibold">Sign in</button>
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