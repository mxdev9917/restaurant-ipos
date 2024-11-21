import React, { useEffect, useRef } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Logo from '../../restaurant/components/logo';
import { useAuth } from '../../context/context';
import { useNavigate } from 'react-router-dom';

interface NavProps {
  handelMenu: () => void;
}

const Nav: React.FC<NavProps> = ({ handelMenu }) => {
  const navigate = useNavigate();
  const { data, token, logout } = useAuth();
  const userTypeRef = useRef<string>('');

  const handleClick = () => {
    handelMenu();
  };

  const isTokenExpired = (token: string) => { // ເຊັກ token ໝົດອາຍຸຫຼືບໍ່
    try {
      const parts = token.split('.');
      if (parts.length !== 3) throw new Error('Invalid token');

      const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
      const currentTime = Math.floor(Date.now() / 1000);

      if (payload.exp < currentTime) { // ເຊັກອາຍຸ token
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
    if (!token || isTokenExpired(token)) { // ເຊັກ token ໝົດອາຍຸ
      logout(); 
      navigate('/authentication');
    }

    if (userTypeRef.current !== 'customer') { // ເຊັກປະເພດ user
      logout(); 
      navigate('/authentication');
    } 
  }, [token, navigate, logout]);

  const userName = data?.owner?.owner_name || 'Guest';
  const userEmail = data?.owner?.owner_email || 'Guest@ipos.com';

  return (
    <Navbar fluid className="z-50 bg-[#3a393a]">
      <Navbar.Brand>
        <Navbar.Toggle onClick={handleClick} />
        <Logo />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{userName}</span>
            <span className="block truncate text-sm font-medium">{userEmail}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Nav;
