import { useState } from "react"
import { Link } from "react-router-dom"



function Payment() {
    const[passwordType,setPasswordType]=useState(false)
    const[isCheckSignIn ,setisCheckSignIn]=useState(false);
    function toggleSignIn(){
        setisCheckSignIn(!isCheckSignIn);
    }
    function togglePasswordType(){
        setPasswordType(!passwordType);
    }


    return (
        <div className="w-screen  flex flex-col  items-center relative">

            <div className="flex justify-between md:w-3/5 w-4/5 py-7 relative">
                <img className="w-24" src="/src/assets/images/Qpos.png" alt="" />
                <button onClick={toggleSignIn} className="flex justify-center items-center py-2 px-5 rounded-md border-2 border-orange-500 bg-transparent focus:ring-1 focus:ring-orange-300 shadow-2xl text-base font-bold text-orange-500">Log in</button>
                <div className={` w-72 ${isCheckSignIn ? 'block' : 'hidden'} h-48 bg-transparent absolute right-0 top-20 flex flex-col items-end `}>
                    <div className="w-7 h-7 mr-7 rotate-45 bg-white"></div>
                    <form className="w-72 h-48  bg-white shadow-2xl absolute rounded-md flex flex-col p-4">
                        <div className="flex flex-col w-full pl-0 sm:pl-4">
                            <input id="email" type="email" className="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full " placeholder="Email..." />
                        </div>
                        <div className="flex flex-col  w-full pl-0 sm:pl-4 mt-2">

                            <div className="relative ">
                                <input id="Password" type="password" className="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="password..." />
                                <button className=" absolute end-2 bottom-1.5 pl-4 py-2 ">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                        <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col  w-full pl-0 sm:pl-4 ">
                        <button className="bg-orange-500 py-1.5 w-full rounded-md text-white ">Sing in</button>
                        </div>
                        <div className="flex flex-col  w-full pl-0 sm:pl-4 mt-1 ">
                        <Link to={'#'} className=" py-1.5 w-full rounded-md text-orange-500 flex justify-center">Forget password ?</Link>
                
                        </div>
                    </form>
                </div>

            </div>
            <form className="flex flex-col md:flex-row  md:w-4/5 lg:w-3/5 ">

                <div className=" flex flex-col items-center w-full h-fit  bg-white shadow-2xl  px-7 pb-5  rounded-xl mr-5">
                    <div className="flex flex-col w-full pl-0 sm:pl-4 mt-5">
                        <div className=" flex flex-col-reverse md:flex-row ">
                            <p className="text-2xl text-orange-500 font-bold pr-2">ຂໍ້ມູນເຈົ້າຮ້ານ</p>
                            <p className="flex items-center text-base mb-2">
                                <svg className="w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z" clipRule="evenodd" />
                                </svg>
                                <span className="pl-2 text-xs">It takes 2-3 days to verify after registration.</span>
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between sm:flex-row w-full">
                        <div className="flex flex-col  w-full ml-0 sm:ml-4">
                            <label htmlFor="Frist">Frist name<span className="text-orange-500">*</span></label>
                            <input id="Frist" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                        <div className="flex flex-col w-full ml-0 sm:ml-4">
                            <label htmlFor="Last">Last name<span className="text-orange-500">*</span></label>
                            <input id="Last" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-0 sm:pl-4">
                        <label htmlFor="phone">Phone<span className="text-orange-500">*</span></label>
                        <div className="flex relative">
                            <p className=" absolute top-2 text-gray-900 text-base font-semibold opacity-70 pl-2.5 ">+856 20</p>
                            <input id="phone" type="number" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 pl-[75px] mb-2" placeholder="xxxx xxxx" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-0 sm:pl-4">
                        <label htmlFor="email">Email address<span className="text-orange-500">*</span></label>
                        <input id="email" type="email" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="abc@branit.la..." />
                    </div>


                    <div className="flex flex-col  w-full pl-0 sm:pl-4">
                        <label htmlFor="Password"> Password<span className="text-orange-500">*</span></label>
                        <div className="relative">
                            <input id="Password" type= {passwordType ?"text" :"password"} className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                            <button onClick={togglePasswordType} className=" absolute end-2 bottom-2 pl-4 py-2 ">
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
                    </div>
                    <div className="flex flex-col w-full pl-0 sm:pl-4">
                        <label htmlFor="Confrim">Confrim password<span className="text-orange-500">*</span></label>
                        <div className="relative">
                            <input id="Confrim"type= {passwordType ?"text" :"password"} className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-orange-500 block w-full p-2.5" placeholder="...." />
                            <button onClick={togglePasswordType} className=" absolute end-2 bottom-0 pl-4 py-2 ">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-0 sm:pl-4 mt-5">
                        <p className="text-2xl text-orange-500 font-bold">ຂໍ້ມູນຮ້ານ</p>
                    </div>
                    <div className="flex flex-col w-full pl-0 sm:pl-4">
                        <label htmlFor="Restaurant">Restaurant name<span className="text-orange-500">*</span></label>
                        <input id="Restaurant" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="....." />
                    </div>
                    <div className="flex flex-col w-full pl-0 sm:pl-4">
                        <label htmlFor="Phone_r">Phone<span className="text-orange-500">*</span> <span className="text-xs text-orange-500">(Enter more than 2 phone number)</span></label>
                        <input id="Phone_r" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="020 xxxx xxxx" />
                    </div>
                    <div className="flex flex-col w-full pl-0 sm:pl-4">
                        <label htmlFor="Location">Location</label>
                        <input id="Location" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="Link location..." />
                    </div>
                    <div className="flex flex-col w-full pl-0 sm:pl-4">
                        <label htmlFor="address">address<span className="text-orange-500">*</span></label>
                        <textarea id="address" className="h-36 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="address..." />
                    </div>
                </div>
                <div className="flex flex-col  items-center justify-center mt-3  md:mt-0 ">
                    <div className="w-[300px]  bg-white rounded-md shadow-2xl px-5 ">
                        <div className="flex justify-center flex-col items-center py-5">
                            <div className="flex justify-center items-center text-xl sm:text-4lg font-extrabold h-16 w-44 bg-slate-100 text-orange-500   rounded-b-lg rounded-t-4xl shadow-2xl  ">FREE</div>
                            <div className="flex flex-col  mt-5 w-full h-auto ">
                                <p className="flex mb-1">
                                    <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                    </svg>
                                    <span className="pl-1">ihfosigfoisgf</span>
                                </p>
                                <p className="flex mb-1">
                                    <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                    </svg>
                                    <span className="pl-1">ihfosigfoisgf</span>
                                </p>
                                <p className="flex mb-1">
                                    <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                    </svg>
                                    <span className="pl-1">ihfosigfoisgf</span>
                                </p>
                                <p className="flex mb-1">
                                    <svg className="w-7 h-7 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                    </svg>

                                    <span className="pl-1">ihfosigfoisgf</span>
                                </p>
                            </div>
                            <p className=" text-4xl font-bold my-5 ">300,000 <span>ກີບ</span></p>
                            <p className=" text-[#3a393a] font-semibold opacity-65 mb-2">Plan renews at: 19/08/2025</p>
                        </div>
                    </div>
                    <div className="w-[300px] h-auto bg-white my-5 pb-10 pt-3 rounded-md shadow-2xl flex flex-col items-center ">
                        <img className="w-[250px] my-3" src="/src/assets/images/qr.jpeg" alt="" />
                        <p className="text-2xl font-semibold text-orange-500">EH MIXAI</p>
                        <p className="text-lg font-semibold text-[#3a393a] my-2">010-12-00-01456791-001</p>
                        <div className="py-3 px-5">
                            <label htmlFor="img" className="flex items-center cursor-pointer">
                                <svg fill="#ff5a1f" width="50px" height="50px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z" />
                                </svg>
                                <span className="text-xl font-bold pl-2 opacity-65"> ອັບໂຫລດ</span>
                                <input className=" hidden" type="file" name="img" id="img" />
                            </label>
                        </div>
                        <p className="text-xs text-red-500">ຈຳ້ເປັນຕ້ອງອັບໂຫລດຫຼັກຖານການໂອນເງີນ</p>

                    </div>

                </div>


            </form>
            <div className="h-28 md:w-3/5 w-4/5   pb-16">
                <div className="w-30 h-14 bg-white shadow-2xl flex justify-end items-center rounded-md">
                    <button className="bg-orange-500 px-4 h-10 mr-3 rounded-md font-medium text-white">Sign up</button>
                    <Link to={"/"} className="bg-red-600 px-4 h-10 mr-5 rounded-md font-medium text-white flex items-center">Cancel</Link>

                </div>
            </div>

            {/* <div className="md:w-5/5 lg:w-4/5  flex flex-col mt-5 px-6 md:px-0">
                <p className="flex items-center text-base mb-2">
                    <svg className="w-10 h-10 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z" clipRule="evenodd" />
                    </svg>
                    <span className="pl-2">It takes 2-3 days to verify after registration.</span>
                </p>
                <p className="text-3xl md:text-5xl text-[#3a393a] font-bold">You’re almost there! Complete your order</p>
                <p className="mt-4 md:mt-10 text-xl">Selected plan: <button className="text-2xl font-semibold text-orange-500"> 12 MONTHS</button></p>
                <p className="text-3xl md:text-5xl text-[#3a393a] font-bold mt-4 md:mt-10">1. Check your order</p>
            </div> */}
            {/* <div className="flex justify-center md:justify-start flex-wrap d:w-5/5 lg:w-4/5 h-auto ">
                <Order />
                <Order />
                <Order />
                <Order />
            </div> */}
            {/* <div className="md:w-5/5 lg:w-4/5  flex flex-col mt-5  md:px-0">
                <p className="flex items-center text-base ">
                    <svg className="w-10 h-10 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z" clipRule="evenodd" />
                    </svg>
                    <span className="pl-2">It takes 2-3 days to verify after registration.</span>
                </p>
                <p className="text-3xl md:text-5xl text-[#3a393a] font-bold mt-4 md:mt-5">2.Create your account</p>
                <p className="mt-4 md:mt-10 text-xl">Already have an account? <button className="text-xl font-semibold text-orange-500"> Log in</button></p>
                <div className="mt-10 flex flex-col-reverse md:flex-row justify-between items-center ">
                    <button className="w-full flex items-center justify-center  h-14 py-4 bg-slate-50 rounded-xl shadow-inner">
                        <svg width="30px" height="30px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
                            <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
                            <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
                            <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
                        </svg>
                        <span className="pl-2 text-xl font-semibold">Google</span>
                    </button>
                    <div className="flex  md:flex-col flex-row items-center mx-14 ">
                        <div className="md:h-16 h-[2px] w-16 md:w-[2px]  bg-black bg-opacity-5"></div>
                        <p className="text-xl px-2 my-4 md:px-0">OR</p>
                        <div className="md:h-16 h-[2px] w-16 md:w-[2px]  bg-black bg-opacity-5"></div>
                    </div>
                    <div className="w-full">
                        <input type="email" className="h-14 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-4" placeholder="Email address..." />
                        <div className="relative">
                            <input type="email" className="h-14 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-orange-500 block w-full p-2.5" placeholder="Passwrod..." />
                            <button className=" absolute end-2 bottom-2 pl-4 py-2 ">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                    <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="md:w-5/5 lg:w-4/5  flex flex-col">
                <p className="text-3xl md:text-5xl text-[#3a393a] font-bold mt-4 md:mt-10">3.Create your information</p>
                <form className="w-5/5">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div> */}
        </div>
    )
}

export default Payment











