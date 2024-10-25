import { Link } from "react-router-dom"
import Sidebar_Nav from "./components/sidebar-nav"


function profile() {
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="p-4 sm:ml-64">
                <div className="flex flex-col ">
                    <div className="flex text-gray-500 ">
                        <Link className="hover:text-orange-500 text-xs md:text-sm" to={""}>ຈັດການໂປຣຟາຍ</Link>
                        <Link className="text-xs md:text-sm" to={""}>|</Link>
                        <Link className="text-orange-500 text-xs md:text-sm" to={""}>ໂປຣຟາຍ</Link>

                    </div>
                    <div className="flex justify-between">

                        <div className="flex items-center gap-4 pt-5">
                            <div className="relative">
                                <img className="w-24 h-24 rounded-full" src="/images/images.jpeg" alt="" />
                                <label htmlFor="profile-img" className="absolute left-16 top-16 cursor-pointer">
                                    <svg className="w-8 h-8 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </label>
                                <input type="file" id="profile-img" name="profile-img" className="w-0 hidden" />
                            </div>
                            <div className="font-medium ">
                                <div className="text-xl">Jese Leos</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                            </div>
                        </div>
                        <div className=" pr-1 mb-2  md:pr-5 ">
                            <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">ແກ້ໄຂ</button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row pt-10">
                        <div className="flex flex-col  lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Frist">Frist name<span className="text-orange-500">*</span></label>
                            <input id="Frist" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                        <div className="flex flex-col lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Last">Last name<span className="text-orange-500">*</span></label>
                            <input id="Last" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                        <div className="flex flex-col lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Last">Role<span className="text-orange-500">*</span></label>
                            <input id="Last" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col  lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Frist">Phone<span className="text-orange-500">*</span></label>
                            <input id="Frist" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                        <div className="flex flex-col lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Last">Email<span className="text-orange-500">*</span></label>
                            <input id="Last" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                        <div className="flex flex-col lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Last">User<span className="text-orange-500">*</span></label>
                            <input id="Last" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col  lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Frist">Password<span className="text-orange-500">*</span></label>
                            <input id="Frist" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                        <div className="flex flex-col lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Last">Comfirm<span className="text-orange-500">*</span></label>
                            <input id="Last" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>

                    </div>
                    <div className="flex flex-col w-full pl-0 sm:pl-4 my-5">
                        <p className="text-2xl text-orange-500 font-bold">ຂໍ້ມູນຮ້ານ</p>
                    </div>
                    <div className="flex flex-col lg:flex-row ">
                        <div className="flex flex-col  lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Phone_r">Phone<span className="text-orange-500">*</span> <span className="text-xs text-orange-500">(Enter more than 2 phone number)</span></label>
                            <input id="Frist" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                        <div className="flex flex-col lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Last">Email</label>
                            <input id="Last" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                        <div className="flex flex-col lg:w-[500px] ml-0 sm:ml-4">
                            <label htmlFor="Last">Location</label>
                            <input id="Last" type="text" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="...." />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row  w-full pl-0 sm:pl-4">
                        <div className="lg:w-[1020px]">
                            <label htmlFor="address">Address<span className="text-orange-500">*</span></label>
                            <textarea id="address" className="h-36 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2" placeholder="address..." />
                        </div>
                        <div className="col-span-2 lg:pl-3">
                            <p>ໂລໂກຮ້ານ</p>
                            <label htmlFor="dropzone-file" className="flex flex-col lg:w-[500px] items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 text-xs md:text-sm">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-5 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2  text-gray-500 text-xs md:text-sm">
                                        <span className="font-semibold">Click to upload</span>
                                        or drag and drop</p>
                                    <p className="text-xs text-gray-500 ">SVG, JPG  (MAX. 204x240px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                    <div className=" p-3 mb-2  md:pr-5 ">
                        <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">ແກ້ໄຂ</button>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default profile