import Sidebar_Nav from "../components/sidebar-nav"
import { Link } from "react-router-dom";
import { useState } from "react"
function Rate() {
    const [isCheckModel, setisCheckModel] = useState(true)
    function handleModel() {
        setisCheckModel(!isCheckModel)
    }
    return (
        <div className="flex flex-col">
            <Sidebar_Nav/>
            <div className="pt-8 sm:ml-64">
                <div className="mt-14">
                <div className="flex flex-col">
                        <div className="flex justify-between w-full h-fit items-end border-b-2">
                            <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                                <div className="flex text-gray-500 ">
                                    <Link className="text-orange-500 text-xs md:text-sm" to={""}>
                                        ຕັ້ງຄ່າອັດຕາແລກປ່ຽນ
                                    </Link>
                                </div>
                                <div className="flex">
                                    <form className="flex items-center max-w-lg mx-auto mt-2 relative">
                                        <input
                                            className="w-48 md:w-64 h-8 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
                                            type="text"
                                            placeholder="ຄົ້ນຫາ..."
                                        />
                                        <button className="absolute right-3 top-1.5 flex  ">
                                            <svg
                                                className="w-6 h-6 text-gray-500 "
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                                />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className=" pr-1 mb-2  md:pr-5 ">
                                <button
                                    onClick={handleModel}
                                    className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm"
                                >
                                    ເພີ່ມ
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap  gap-2 md:gap-3 mt-3 w-fit px-3 ">
                            
                        </div>
                    </div>
                        
                       
                       
                    
                    
                  
                    
                </div>
            </div>


        </div>
    )
}

export default Rate