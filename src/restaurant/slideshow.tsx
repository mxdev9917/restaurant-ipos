import { useTranslation } from "react-i18next";
import Sidebar_Nav from "./components/sidebar-nav"
import { HiMenuAlt1 } from "react-icons/hi";
import { Dropdown } from "flowbite-react";
import { HiPencilAlt, HiOutlineTrash, HiOutlineBan, HiDotsVertical, HiCheck } from "react-icons/hi"; //HiCheck 
import { HiBadgeCheck, HiBan } from "react-icons/hi";
const Slideshow = () => {
    const { t } = useTranslation();
    const suggested = "false";
    const foodStatus = "disable";
    return (
        <div className="flex flex-col h-full w-[100.0vw] overflow-visible">
            <Sidebar_Nav />
            <div className="p-4 sm:ml-64">
                <div className="flex justify-between w-full ">
                    <div className=" text-gray-500 flex gap-2 items-center text-xs md:text-sm">
                        <p className="hover:text-orange-500" > {t("slideshow")}</p>
                    </div>
                    <button

                        className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm">
                        <span >{t("add")}</span>
                    </button>
                </div>
                <div className="flex gap-2 w-full">
                    <HiMenuAlt1 className="text-3xl" /><span>ລາຍການ</span> <div className="w-full border-b-[1px]"></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex justify-end w-[360px] h-[130px] bg-[url('images/03.jpg')] bg-cover bg-center rounded-md p-1.5">
                        <div className="flex justify-center items-center w-7 h-7 bg-gray-100/40 rounded-full">
                            <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='flex justify-center items-center text-base text-gray-500  hover:text-gray-600 cursor-pointer'><span className="text-sm font-semibold text-gray-800"> </span><HiDotsVertical /></span>}>
                                <Dropdown.Item

                                >
                                    {
                                        suggested === "false" ? (<span className="flex ">
                                            <HiBadgeCheck className='text-lg text-gray-400 mr-2' />ເລືອກເມນູແນະນຳ</span>) : (<span className="flex ">
                                                <HiBan className='text-lg text-gray-400 mr-2' />ຍົກເລີກເມນູແນະນຳ</span>)
                                    }
                                </Dropdown.Item>
                                <Dropdown.Item

                                >
                                    {
                                        foodStatus === "disable" ? (<span className="flex ">
                                            <HiCheck className='text-lg text-gray-400 mr-2' />ເປີດໃຊ້ງານ</span>) : (<span className="flex ">
                                                <HiOutlineBan className='text-lg text-gray-400 mr-2' />ປິດໃຊ້ງານ</span>)
                                    }
                                </Dropdown.Item>

                                <Dropdown.Item

                                ><HiPencilAlt className='text-lg text-gray-400 mr-2' />ແກ້ໄຂເມນູ</Dropdown.Item>
                                <Dropdown.Item


                                ><HiOutlineTrash className='text-lg text-gray-400 mr-2' />ລົບ</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Slideshow