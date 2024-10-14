import { Avatar, Dropdown } from "flowbite-react";
import Language from "../../website/components/language";
import Logo from "./logo";

interface NavProps {
    handelMenu: () => void;
    isCheck: boolean; // Add the isCheck prop
}

const Nav: React.FC<NavProps> = ({ handelMenu, isCheck }) => {
    const handleClick = () => {
        handelMenu();
        console.log(isCheck);
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-[#3a393a] border-b border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button
                            data-drawer-target="separator-sidebar"
                            data-drawer-toggle="separator-sidebar"
                            aria-controls="separator-sidebar"
                            type="button"
                            className={`${!isCheck ? 'block' : 'hidden'
                                } inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
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
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar alt="User settings" img="/images/images.jpeg" rounded />
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">Bonnie Green</span>
                                    <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                </Dropdown.Header>
                                <Dropdown.Item href="#dashboard">Dashboard</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Earnings</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Sign out</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
