import { HiChartBar, HiPresentationChartBar } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Sidebar } from "flowbite-react";
import { HiPlusSm } from "react-icons/hi";
import Nav from "./nav";
import { useState } from "react";
import { useAuth } from "../../context/context";
import { useNavigate } from "react-router-dom";

function Sidebar_Nav() {
  const { data, logout } = useAuth();
  const navigate = useNavigate();
  const [translate, setTranslate] = useState(true);
  const res = data?.restaurants || [];

  function isCheckMenu() {
    setTranslate(!translate);
  }

  const handleLogout = () => {
    logout();
    navigate('/authentication'); // Redirect after logout
  };

  return (
    <>
      <Nav handelMenu={isCheckMenu} />
      <Sidebar
        className={`fixed mt-16 z-40 w-72 h-screen transition-transform ${
          translate ? "-translate-x-full" : ""
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex justify-between">
          <p className="font-medium mb-2">
            ຮ້ານຂອງ: {data?.owner?.owner_name || "Guest"}
          </p>
          <AiFillSafetyCertificate className="text-xl text-green-600" />
        </div>
        {res?.length ? (
          res.map((item: any) => (
            <div
              key={item.restaurant_ID}
              className="flex gap-2 items-center hover:bg-slate-100 rounded-sm py-1 px-2"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://laostravel.com/images/2020/12/Miengchaokao-Restaurant-vientiane.jpg"
                alt={item.restaurant_name}
              />
              <span className="text-sm font-normal text-gray-600">
                {item.restaurant_name}
              </span>
            </div>
          ))
        )
         : null
        }
        <button className="flex justify-center items-center w-full h-9 bg-orange-500 text-white text-sm rounded-md "><HiPlusSm className="text-xl"/>ເພີ່ມຮ້ານ</button>
        <div className="flex flex-col gap-2 border-b-[1px] mt-2">
          <div className="flex items-center gap-2 hover:bg-slate-100 p-1 rounded-lg">
            <div className="w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full">
              <HiChartBar className="text-xl" />
            </div>
            <p className="text-sm font-normal text-gray-600">Dashboards</p>
          </div>
          <div className="flex items-center gap-2 hover:bg-slate-100 p-1 rounded-lg">
            <div className="w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full">
              <HiPresentationChartBar className="text-xl" />
            </div>
            <p className="text-sm font-normal text-gray-600">ການຊຳລະເງີນ</p>
          </div>
          <div className="flex flex-col gap-3 py-2">
            <div className="flex items-center gap-2 hover:bg-slate-100 p-1 rounded-lg">
              <div className="w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full">
                <MdSettings className="text-xl" />
              </div>
              <p className="text-sm font-normal text-gray-600">ຕັ້ງຄ່າ</p>
            </div>
            <div
              onClick={handleLogout}
              className="flex items-center gap-2 hover:bg-slate-100 p-1 rounded-lg"
            >
              <div className="w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full">
                <RiLogoutCircleRLine className="text-xl" />
              </div>
              <p className="text-sm font-normal text-gray-600">ອອກຈາກລະບົບ</p>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Sidebar_Nav;
