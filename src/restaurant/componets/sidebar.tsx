import { useState } from "react"


function Sidebar() {
    const [isCheckW, setIscheckW] = useState(true);
   


    function toggleIsCheckW() {
        setIscheckW(!isCheckW)
    }
    return <div className={`${isCheckW ? 'w-64' : 'w-14'} h-screen  px-3 py-4 overflow-y-auto bg-gray-50 border-r-2`}>
        <ul className="space-y-2  font-medium">
            <li className="flex justify-between">
                <button onClick={toggleIsCheckW} className="flex  items-center p-2  text-gray-900 rounded-lg  hover:bg-gray-100  group">
                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    <span className="flex-1 ms-3 pl-1 text-base ">ເມນູ</span>
                </button>
                <button onClick={toggleIsCheckW} className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">
                    <div className="w-6 h-6">
                        <svg className="w-5 h-5 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>
                    </div>

                </button>
            </li>

            <li className="flex justify-between">
                <button className={`${isCheckW ? 'w-full' : ''} flex items-center p-1  text-gray-900 rounded-lg  hover:bg-gray-100 `}>
                    <svg className="flex-shrink-0 w-7  h-7 text-gray-500 transition duration-75 group-hover:text-gray-900  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7.04 7.04 0 0 0 22 10.5 8.5 8.5 0 0 0 13.5 2Z" />
                        <path d="M11 6.025a1 1 0 0 0-1.065-.998 8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11V6.025Z" />
                    </svg>
                    <span className=" ms-2 pl-1 text-base">ເມນູ</span>
                </button>

            </li>
            <li className="flex justify-between">
                <button type="button" id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className={`${isCheckW ? 'w-full' : ''} flex items-center p-1  text-gray-900 rounded-lg  hover:bg-gray-100  group `}>
                    <svg className="flex-shrink-0 w-7  h-7 text-gray-500 transition duration-75 group-hover:text-gray-900  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7.04 7.04 0 0 0 22 10.5 8.5 8.5 0 0 0 13.5 2Z" />
                        <path d="M11 6.025a1 1 0 0 0-1.065-.998 8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11V6.025Z" />
                    </svg>
                    <div className="flex justify-between w-full items-center mr-2">
                        <span className=" ms-2 pl-1 text-base">ຈັດການຮ້ານ</span>
                        <svg className="w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </div>
                </button>
                <div id="dropdown" className={`${isCheckW ? '' : 'bg-white shadow w-44'}  hidden   divide-y divide-gray-100 rounded-lg`}>
                    <ul className="py-2 w-full  text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="/managefood" className="flex rounded-lg px-7 py-1 mb-3  hover:bg-gray-100 text-base w-52 ">ຈັດການເມນູອາຫານ</a>
                        </li>
                        <li>
                            <a href="/managecategory" className="flexrounded-lg  px-7 py-1 my-3  hover:bg-gray-100 text-base w-52 ">ຈັດການປະເພດອາຫານ</a>
                        </li>
                        <li>
                            <a href="/managezone" className="flex rounded-lg  px-7 py-1 my-3  hover:bg-gray-100 text-base w-52 ">ຈັດການໂຊນຮ້ານ</a>
                        </li>
                        <li>
                            <a href="/managetable" className="flex  px-7 py-1 my-3  hover:bg-gray-100 text-base w-52 ">ຈັດການໂຕະ</a>
                        </li>
                    </ul>
                </div>

            </li>












        </ul>
    </div>
}

export default Sidebar






