import { useState } from "react"

function Navbar() {
    const [isCheckProfile, setIsCheckProfile] = useState(false)
    function toggleisCheckProfile() { setIsCheckProfile(!isCheckProfile) }


    return <div>
        <nav className="w-full h-16 bg-white border-b-2 flex justify-between items-center px-7">
            <div className="flex">
                {/* <button className="w-9 h-9 bg-transparent">
                    <svg className="w-9 h-9  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                    </svg>

                </button> */}
                <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse pl-2">
                    <p className="text-4xl text-orange-500 font-extrabold">IPOS</p>
                    {/* <img src="src/assets/images/Qpos.png" className="h-11" alt="Flowbite Logo" /> */}
                </a>
            </div>

            <div className="relative">
                <button onClick={toggleisCheckProfile}>
                    <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 " src="https://us-fbcloud.net/picpost/data/316/316657-qga3yf-2.n.jpg" alt="Bordered avatar" />
                </button>
                <div className={`${isCheckProfile ? 'block' : 'hidden'} w-52 h-fit bg-transparent absolute right-0 top-12 flex flex-col items-end`}>
                    <div className="bg-white rounded-md shadow-xl w-full h-full ">
                        <div className="px-4 py-3 text-sm text-gray-900 border-b-[1px]">
                            <div>Bonnie Green</div>
                            <div className="font-medium truncate">name@flowbite.com</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-2 border-t-[1px]">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    </div>
}


export default Navbar