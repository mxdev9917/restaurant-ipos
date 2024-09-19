import { Link } from "react-router-dom"
import Language from "./language"


function NavBar() {
    return (
        <div className="flex justify-center   w-full">

            <nav className="bg-[#3a393a] md:w-5/5 lg:w-4/5 border-gray-200  w-screen  md:rounded-full rounded-none flex justify-between items-center mx-auto py-2 px-4">
                <div className=" flex ">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <p className="text-4xl font-extrabold text-orange-500  pl-5">IPOS.LA</p>
                    </a>
                </div>
                <ul id="navbar-default" className=" bg-[#3a393a] border-t-[0.7px] md:border-none  hidden  text-sm text-white  flex-col   mr-0 md:mr-2  w-full justify-end right-0 top-14 absolute md:relative md:top-0 md:flex md:flex-row " aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="#home" className="block px-4 py-2 text-base focus:text-orange-500 hover:text-orange-500 ">Home</a>
                    </li>
                    <li>
                        <a href="#pricing" className="block px-4 py-2 text-base focus:text-orange-500 hover:text-orange-500">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#download" className="block px-4 py-2 text-base focus:text-orange-500 hover:text-orange-500">Download App</a>
                    </li>
                    <li>
                        <a href="#test" className="block px-4 py-2 text-base focus:text-orange-500 hover:text-orange-500 ">Contact uS</a>
                    </li>
                    <li>
                        <Link to={'/authentication'} type="button" className=" w-28 md:hidden block text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-300 font-medium rounded-full text-sm  py-3 mr-2 mx-2 mb-3 text-center">SIGN IN</Link>

                    </li>
                </ul>

                <div className="flex justify-center items-center">
                    <Language />
                    <Link to={'/authentication'} type="button" className=" w-28 hidden md:block text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-300 font-medium rounded-full text-sm  py-3 mr-2 text-center">SIGN IN</Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>

    )
}

export default NavBar