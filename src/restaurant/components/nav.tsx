import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "./logo";
import Language from "./language";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context";
import { useTranslation } from "react-i18next";
import { generalErrors } from "../../utils/error";
import { IoMdNotificationsOutline } from "react-icons/io";
import Notification from "./notification";

interface NavProps {
  handelMenu: () => void;
  isMenu: boolean;
}

const Nav: React.FC<NavProps> = ({ handelMenu, isMenu }) => {
  const [notification, setNotification] = useState<number>(0);
  const [isCheckedNotification, setIsCheckedNotification] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data, token, logout } = useAuth();
  const userTypeRef = useRef<string>('');
  const { t } = useTranslation();
  const handleClick = () => {
    handelMenu();
  };
  const handleCheckedNotification = () => {
    setIsCheckedNotification(!isCheckedNotification);

  }
  const isTokenExpired = (token: string) => {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) throw new Error('Invalid token');

      const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
      const currentTime = Math.floor(Date.now() / 1000);

      if (payload.exp < currentTime) {
        return true;
      }

      if (!userTypeRef.current) {
        userTypeRef.current = payload.user_type;
      }

      return false;
    } catch (error) {
      generalErrors(error);
      return true;
    }
  };

  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      logout();
      navigate('/');
    }

    if (userTypeRef.current !== 'restaurant') {
      logout();
      navigate('/');
    }
  }, [token, navigate, logout]);

  const dataName = data && data.user_name ? data.user_name : 'Guest';
  const dataRole = data && data.user_role ? data.user_role : 'email@ipos.com';

  useEffect(() => {
    setNotification(localStorage.getItem("notification") ? parseInt(localStorage.getItem("notification") || "0") : 0);
    console.log(notification);

  }, [notification])

  return (
    <>

      <Navbar fluid className="z-50 bg-[#3a393a] ">
        <Navbar.Brand>
          <Navbar.Toggle
            onClick={handleClick}
            className={`block lg:hidden ${!isMenu ? 'hidden' : ''}`}
          />
          <Logo />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div onClick={handleCheckedNotification} className="flex items-end relative h-10 w-10 text-white hover:text-orange-500 transition duration-200 ease-in-out">
            <IoMdNotificationsOutline className="text-3xl" />
            <div className="absolute top-1 right-1 bg-orange-500 p-[2px] rounded-full font-semibold text-white text-[12px] cursor-pointer">
              {notification > 0 ? notification : "0"}
            </div>
          </div>
          <Language />
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{t("name")}: {dataName}</span>
              <span className="block truncate text-sm font-medium">{t("role")}: {dataRole}</span>
            </Dropdown.Header>
            {/* Use buttons instead of <a> tags to avoid nesting */}
            {/* <Dropdown.Item as="button" onClick={() => navigate('/dashboard')}>Dashboard</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
          <Dropdown.Item as="button">Earnings</Dropdown.Item> */}
            <Dropdown.Divider />
            <Dropdown.Item as="button" onClick={logout}>{t("signOut")}</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
      <div className={`${isCheckedNotification ? 'block' : 'hidden'}`}>
        <Notification />
      </div>
    </>
  );
};

export default Nav;
