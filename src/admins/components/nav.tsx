import React, { useEffect } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Logo from '../../restaurant/components/logo';
import { useAuth } from '../context/authen_context';
import { useNavigate } from 'react-router-dom'; 

interface NavProps {
  handelMenu: () => void;
}

const Nav: React.FC<NavProps> = ({ handelMenu }) => {
  const navigate = useNavigate(); 
  const { user, token, logout } = useAuth(); // ใช้ useAuth()
  
  const handleClick = () => {
    handelMenu();
  };

  // ตรวจสอบว่า token มีค่าไหมก่อนทำการ redirect
  useEffect(() => {
    if (!token) {
      navigate('/admin'); // ถ้าไม่มีโทเค็น ให้ไปที่หน้า login
    }
  }, [token, navigate]);

  // ตรวจสอบว่า user มีค่าหรือไม่ก่อนการเข้าถึงข้อมูล
  const userName = user && user.user_admin_name ? user.user_admin_name : 'Guest';
  const userEmail = user && user.user_admin_email ? user.user_admin_email : 'email@domain.com';

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
            {/* ตรวจสอบว่า user มีค่าและมีชื่อ */}
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
