import Logo from "../restaurant/components/logo";
import RestaurantItem from "./components/restaurantitem";
import { MdOutlineDateRange } from "react-icons/md";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Language from "./components/language";
import EditProfile from "./components/editprofile";
import AddRestaurant from "./components/addrestaurant";
import { useState } from "react"
function Profiles() {
    const [isCheckEditProfile, setsCheckEditProfile] = useState(false)
    const [isCheckAddRestaurant, setsCheckAddRestaurant] = useState(false)
    const [titleRestaurant, settitleRestaurant] = useState('ເພີ່ມຮ້ານ')
    function handleEditProfile() {
        setsCheckEditProfile(!isCheckEditProfile)

    }
    function handleAddRestaurant(title:string) {
        setsCheckAddRestaurant(!isCheckAddRestaurant)
        settitleRestaurant(title)
    }
    return (
        <div className="w-screen h-screen flex flex-col gap-2">
            <div className="w-full h-fit shadow-md bg-slate-900 ">
                <Navbar fluid className="bg-[#3a393a]" >
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
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    </div>
                </Navbar>

            </div>
            <div className="w-full h-full flex justify-center relative">



                {/* Conditional Rendering for EditProfile */}
                {isCheckEditProfile && <EditProfile handelButtonClose={handleEditProfile} />}
                {isCheckAddRestaurant && <AddRestaurant handelButtonClose={()=>handleAddRestaurant('ເພີ່ມຮ້ານ')} title={titleRestaurant} />}


                <div className="w-full sm:w-[90%] md:w-full xl:w-[80%] h-fit   rounded-lg">
                    {/* Profile Info Section */}
                    <div className="w-full flex flex-col md:flex-row items-center md:items-center border-b-[1px] pb-2 shadow-lg bg-slate-100">
                        <div className="h-fit w-fit flex justify-center mb-4 md:mb-0 pl-2 pt-2">
                            <img
                                src="/images/images.jpeg"
                                className="object-contain w-20 sm:w-24 md:w-28 rounded-full shadow-lg ring-2 ring-orange-700"
                                alt="Profile"
                            />
                        </div>
                        <div className="w-full md:pl-4 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                            <p className="text-xl sm:text-2xl font-semibold text-orange-500">
                                ຈີນ່າ ທຳມະວົງ
                            </p>
                            <p className="text-sm font-semibold mt-1">
                                eh.dev9917@gmail.com
                            </p>
                            <div className="flex items-center pt-2">
                                <MdOutlineDateRange className="text-xl text-orange-500" />
                                <p className="font-semibold text-sm ml-1">
                                    16/10/2024
                                </p>
                            </div>
                        </div>
                        <div className=" h-[45px] sm:h-28 w-52 flex justify-center gap-2 items-end pr-2 ">
                            <button onClick={handleEditProfile} className="bg-orange-500  w-fit px-4 py-2 text-sm rounded-md text-white">
                                ແກ້ໄຂ
                            </button>
                            <button onClick={()=>handleAddRestaurant('ເພີ່ມຮ້ານ')} className="bg-orange-500 w-20  px-4 py-2 text-sm rounded-md text-white">
                                ເພີ່ມຮ້ານ
                            </button>
                        </div>
                    </div>

                    <RestaurantItem handelButtonClose={()=>handleAddRestaurant('ແກ້ໄຂຮ້ານ')} />
                    <RestaurantItem handelButtonClose={()=>handleAddRestaurant('ແກ້ໄຂຮ້ານ')}/>
                    <RestaurantItem handelButtonClose={()=>handleAddRestaurant('ແກ້ໄຂຮ້ານ')}/>


                </div>
            </div>
         {isCheckAddRestaurant && <AddRestaurant handelButtonClose={()=>handleAddRestaurant('ເພີ່ມຮ້ານ')} title={titleRestaurant} />}
        </div>
    );
}

export default Profiles;
