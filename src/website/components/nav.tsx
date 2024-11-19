import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Language from "./language";
import Logo from "../../restaurant/components/logo";
import { useAuth } from "../../context/authen_context";
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";

function Nav() {
    const navigate = useNavigate(); 
    const { user, token, logout } = useAuth(); 

    useEffect(() => {
        if (!token) {
            logout(); // Clear authentication data
            navigate('/', { replace: true }); // Redirect to the login page
        }
    }, [token, navigate, logout]);
  
    const userName = user?.owner_name || 'Guest';
    const userEmail = user?.owner_email || 'email@ipos.com';
  
    return (
        <div className="w-full h-fit shadow-md bg-slate-900">
            <Navbar fluid className="bg-[#3a393a]">
                <Navbar.Brand to="/">
                    <Logo />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Language />
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{userName}</span>
                            <span className="block truncate text-sm font-medium">{userEmail}</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => {
                            logout();
                            
                        }}>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
            </Navbar>
        </div>
    );
}

export default Nav;
