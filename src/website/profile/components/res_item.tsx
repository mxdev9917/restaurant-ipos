import { IoMdNotificationsOutline } from "react-icons/io";
import { HiChartBar,HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiSolidPaperPlane } from "react-icons/bi";
import { Dropdown } from "flowbite-react";
function resItem() {
    return (
        
            <div className="flex flex-col w-full h-fit bg-[#f9fafb] rounded-md shadow-sm-light p-2">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <img className="w-16 h-16 rounded-full border-2 shadow-inner" src="https://laostravel.com/images/2020/12/Miengchaokao-Restaurant-vientiane.jpg" alt="" />
                        <div className="flex">
                            <div className="flex flex-col gap-1">
                                <p className="">ຮ້ານອາຫານຈຳປາ</p>
                                <div className="flex justify-center sm:justify-start gap-6">
                                    <div className="flex gap-1 items-end relative">
                                        <IoMdNotificationsOutline className="text-2xl text-gray-500 -rotate-12 animate-slow2-spin" />
                                        <p className="text-[13px] text-gray-500">
                                            <span className="text-red-600">9</span> ການແຈ້ງເຕືອນ
                                        </p>
                                        <div className="absolute w-1.5 h-1.5 bg-green-500 rounded-full right-[-10px] top-2"></div>
                                    </div>
                                    {/* <div className="flex gap-1 items-end relative">
                                                <BiBookmark className="text-xl text-gray-500" />
                                                <p className="text-[13px] text-gray-500">
                                                    <span className="text-red-600">9</span> ອໍເດີ
                                                </p>
                                                <div className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full right-[-10px] top-2"></div>
                                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="text-green-600">Active</span>
                </div>
                <div className="flex gap-2 mt-2">
                    <button className="flex items-center justify-center gap-1 w-full bg-gray-100 rounded-sm py-2 text-sm">
                        <HiChartBar />
                        <p>ຍອດຂາຍ</p>
                    </button>
                    <button className="flex items-center justify-center gap-1 w-full bg-orange-500 text-white rounded-sm py-2 text-sm">
                        <BiSolidPaperPlane />
                        <p>ໄປຮ້ານ</p>
                    </button>
                    <Dropdown

                        dismissOnClick={false}
                        renderTrigger={() => (
                            <span className="flex justify-center items-center w-full sm:w-20 bg-gray-200 rounded-sm py-2">
                                <HiOutlineDotsHorizontal className="text-xl text-gray-500" />
                            </span>
                        )}
                    >
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
    );
}

export default resItem