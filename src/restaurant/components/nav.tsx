import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "./logo";
import Language from "./language";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context";



interface NavProps {
  handelMenu: () => void;
  isMenu: boolean

}

const Nav: React.FC<NavProps> = ({ handelMenu, isMenu }) => {
  const navigate = useNavigate();
  const { data, token, logout } = useAuth();
  const userTypeRef = useRef<string>('');
  const handleClick = () => {
    handelMenu();
  };
  const isTokenExpired = (token: string) => {// ເຊັກ token ໝົດອາຍຸຫຼືບໍ່
    try {
      const parts = token.split('.');
      if (parts.length !== 3) throw new Error('Invalid token');

      const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));

      const currentTime = Math.floor(Date.now() / 1000);

      if (payload.exp < currentTime) { // ເຊັກ token ໝົດອາຍຸ
        // const expirationDate = new Date(payload.exp * 1000).toLocaleString();
        // console.log(`Token expired on: ${expirationDate}`);
        return true;
      }
      if (!userTypeRef.current) { //ດຶງເອົາປະເພດ user
        userTypeRef.current = payload.user_type;
      }
      return false;
    } catch (error) {
      console.error('Error decoding token:', error);

      return true;
    }
  };

  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      logout(); // Log the data out
      navigate('/'); // Redirect to the login page
    }
    if (userTypeRef.current !== 'restaurant') { // ເຊັກປະເພດ user
      logout();
      navigate('/');
    }
  }, [token, navigate, logout]);

  const dataName = data && data.user_name ? data.user_name : 'Guest';
  const dataRole = data && data.user_role ? data.user_role : 'email@ipos.com';
  return (
    <Navbar fluid className="z-50 bg-[#3a393a] ">
      <Navbar.Brand >
        <Navbar.Toggle
          onClick={handleClick}
          className={`block lg:hidden ${!isMenu ? 'hidden' : ''}`}
        />

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
            <span className="block text-sm">ຊື່: {dataName}</span>
            <span className="block truncate text-sm font-medium">ສິດ: {dataRole}</span>
          </Dropdown.Header>
          <Dropdown.Item href="/">Dashboard</Dropdown.Item>
          <Dropdown.Item href="#profile">profile</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
        </Dropdown>

      </div>

    </Navbar>
  );
}

export default Nav
