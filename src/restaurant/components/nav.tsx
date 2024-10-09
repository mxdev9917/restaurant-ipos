import { Link } from "react-router-dom";
import Language from "../../website/components/language";
import Logo from "./logo";

interface NavProps {
    handelMenu: () => void; // Type for the onEdit function
}
interface NavProps {
    handelMenu: () => void;
    isCheck: boolean; // Add the isCheck prop
}


const Nav: React.FC<NavProps> = ({ handelMenu,isCheck }) => {
    const handleClick = () => {
        handelMenu ();
        console.log(isCheck);
        
      };
    return (
        <nav className="fixed top-0 z-50 w-full bg-[#3a393a] border-b border-gray-200 ">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button
                            data-drawer-target="separator-sidebar"
                            data-drawer-toggle="separator-sidebar"
                            aria-controls="separator-sidebar"
                            type="button"
                            className={` ${isCheck ? 'block' : 'hidden'} inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
                            onClick={handleClick} // Call the handelMenu function on button click
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                ></path>
                            </svg>
                        </button>
                        <Logo />
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <Language />
                            <div>
                                <button
                                    type="button"
                                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown-user"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        alt="user photo"
                                    />
                                </button>
                            </div>
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900" role="none">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate" role="none">
                                        neil.sims@flowbite.com
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            ກັບສູ່ໜ້າຫຼັກ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
