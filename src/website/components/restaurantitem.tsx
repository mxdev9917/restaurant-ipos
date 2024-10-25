import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { Clipboard } from "flowbite-react"

interface RestaurantItemProps {
    handelButtonClose: () => void;
}
const RestaurantItem: React.FC<RestaurantItemProps> = ({ handelButtonClose }) => {

    const handleClick = () => {
        handelButtonClose();
    };
    return (
        <div className="flex flex-col gap-2 sm:flex-row justify-between w-full h-fit sm:h-24 my-2 p-2 rounded-sm shadow-lg bg-slate-100">
            <div className="w-full sm:w-80 md:w-[400px] h-auto flex justify-between items-center border-b-[1px] sm:border-b-[0px] pb-2 ">
                <div className="w-fit pl-2">
                    <img
                        src="/images/images.jpeg"
                        className="object-contain w-20  rounded-full shadow-lg ring-2"
                        alt="Profile"
                    />
                </div>
                <div className="flex flex-col justify-start w-[200px] pl-3">
                    <p className="text-xl  font-semibold text-orange-500">
                        ຮ້ານອາຫານຈີນ່າ
                    </p>
                    <p className="text-xs">
                        User: addmin123
                    </p>
                    <p className="text-sm">
                        ວັນໝົດອາຍຸ:10/10.2025
                    </p>
                </div>
                <div className="h-full w-fit pt-2">
                    <button onClick={handleClick} className="text-lg hover:text-orange-500">
                        <FaRegEdit />
                    </button>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex  gap-3 relative  items-center">
                    <p id="pass-code" className="p-2 text-[14px] rounded-md bg-gray-100">YiZ7952M0sktCD188coEiTzZEtGbKK
                    <Clipboard.WithIcon className=" right-[-22px] bottom-1" valueToCopy="YiZ7952M0sktCD188coEiTzZEtGbKK" label="Copy" />
                    </p>
                </div>
            </div>
            <div className="flex  justify-end sm:justify-center  sm:w-28 h-full">
                <Link to={'/dashboard'} className="text-orange-500 text-sm">ໄປຮ້ານ</Link>
            </div>
        </div>
    );

}

export default RestaurantItem