


import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "./logo";
import Language from "./language";

interface NavProps {
    handelMenu: () => void;
    
}

const Nav: React.FC<NavProps> = ({ handelMenu}) => {
    const handleClick = () => {
        handelMenu();
    };

    return (
        <Navbar fluid  className="z-50 bg-[#3a393a] ">
            <Navbar.Brand >
                <Navbar.Toggle onClick={handleClick} />
                <Logo />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Language/>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item href="/">Dashboard</Dropdown.Item>
                    <Dropdown.Item href="#profile">profile</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>

            </div>

        </Navbar>
    );
}

export default Nav
