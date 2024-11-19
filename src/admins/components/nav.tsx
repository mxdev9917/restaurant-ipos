import React, { useEffect } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Logo from '../../restaurant/components/logo';
import { useAuth } from '../../context/authen_context';
import { useNavigate } from 'react-router-dom'; 

interface NavProps {
  handelMenu: () => void;
}

const Nav: React.FC<NavProps> = ({ handelMenu }) => {
  const navigate = useNavigate(); 
  const { user, token, logout } = useAuth(); 

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
        // const expirationDate = new Date(payload.exp * 1000).toLocaleString();
        // console.log(`Token expired on: ${expirationDate}`);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error decoding token:', error);
      
      return true; 
    }
  };

  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      logout(); // Log the user out
      navigate('/admin'); // Redirect to the login page
    }
  }, [token, navigate, logout]);

  const userName = user && user.user_admin_name ? user.user_admin_name : 'Guest';
  const userEmail = user && user.user_admin_email ? user.user_admin_email : 'email@ipos.com';

  

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
          <Dropdown.Item href="#dashboard">Dashboard</Dropdown.Item>
          <Dropdown.Item href="#profile">Profile</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Nav;
