import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "./logo";
import Language from "./language";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context";
import { useTranslation } from "react-i18next";
import { generalErrors } from "../../utils/error";

interface NavProps {
  handelMenu: () => void;
  isMenu: boolean;
}

const Nav: React.FC<NavProps> = ({ handelMenu, isMenu }) => {
  const navigate = useNavigate();
  const { data, token, logout } = useAuth();
  const userTypeRef = useRef<string>('');
  const { t } = useTranslation();
  const handleClick = () => {
    handelMenu();
  };

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

  return (
    <Navbar fluid className="z-50 bg-[#3a393a] ">
      <Navbar.Brand>
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
  );
};

export default Nav;
