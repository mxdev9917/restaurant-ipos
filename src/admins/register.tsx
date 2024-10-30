import Sidebar_Nav from "./components/sidebar-nav";
import { Breadcrumb } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
function Register() {
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="pt-8 sm:ml-64">
                <div className="p-1">
                    <div className="flex justify-between w-full h-fit items-end">
                        <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                            <Breadcrumb aria-label="Default breadcrumb example">
                                <Breadcrumb.Item href="#" icon={HiHome}>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
                                <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="flex">
                                <form className="flex items-center max-w-lg mx-auto mt-2 relative">
                                    <input
                                        className="w-48 md:w-64 h-8 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
                                        type="text"
                                        placeholder="ຄົ້ນຫາ..."
                                    />
                                    <button className="absolute text-xl right-3 top-2 flex  ">
                                    <IoSearchOutline />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className=" pr-1 mb-2  md:pr-5 ">
                            <button
                                // onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm"
                            >
                                ເພີ່ມ
                            </button>
                        </div>
                    </div>
                    {/* lhkehgghj */}

                    
                </div>
            </div>
           
        </div>
    );
}

export default Register