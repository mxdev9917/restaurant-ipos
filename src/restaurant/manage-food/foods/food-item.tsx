
import { Dropdown } from "flowbite-react";
import { HiPencilAlt, HiOutlineTrash, HiOutlineBan, HiDotsVertical, HiCheck } from "react-icons/hi"; //HiCheck 
import { alertconfirm, alertSuccessV3 } from '../../../utils/alert';
import { generalErrors } from '../../../utils/error';
import { editStatusFoodService } from "../../../services/foods/editstatus-food";
import { IPOS_BASE_URL } from "../../../utils/connection";
import { useAuth } from "../../../context/context";
import { HiBadgeCheck, HiBan } from "react-icons/hi";
import { editSuggestedService } from "../../../services/foods/suggested";

interface foodItemProps {
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    foodId: string;
    foodName: string;
    foodStatus: string;
    foodImg: string;
    price: string;
    suggested: string
}

const FoodItem: React.FC<foodItemProps> = ({ onDelete, onEdit, foodName, price, foodImg, foodStatus, foodId, suggested }) => {
    const { token } = useAuth();
    const handleEditStatus = async () => {
        try {
            const newStatus = foodStatus == "disable" ? "active" : "disable";
            const today = new Date().toISOString().split("T")[0];

            const res = await editStatusFoodService.editStatusFood(foodId, newStatus, today, token || "");

            if (res.status == 200) {
                alertSuccessV3("ສຳເລັດ", 'success');
            }
        } catch (error) {
            generalErrors(error);
        }
    };
    const handleSuggested = async (value: string) => {
        try {
            let suggested;
            if (value === "true") {
                suggested = "false"
            } else {
                suggested = "true"
            }

            console.log({suggested,foodId});
            
            const res = await editSuggestedService.suggestedService(String(foodId), String(suggested), token || "");
           
            if(res.status==="200"){
                alertSuccessV3("ສຳເລັດ", 'success');
            }


        } catch (error) {
            console.log(error);
            generalErrors(error);
        }
    }
    return (
        <div
            className="flex flex-col justify-between w-full h-full shadow-xl rounded-lg  "

        >
            <div className="w-full h-fit flex justify-end p-2 relative">
                {
                    foodImg !== null ?
                        <img className="h-28 w-full object-cover rounded-md" src={`${IPOS_BASE_URL}${foodImg}`} alt="" />
                        :
                        <img className="h-28 w-full object-contain rounded-md" src="\public\images\ipos.png" alt="" />

                }

                {
                    foodStatus === "disable" && (
                        <div className="flex justify-center items-center h-28 w-full rounded-md absolute bg-slate-100/50 font-semibold text-xl text-gray-600">
                            ປິດໃຊ້ງານ
                        </div>
                    )
                }
            </div>

            <div className="w-full bg-slate-100 flex justify-end items-center text-black text-sm md:text-base font-semibold rounded-b-lg">
                <div className="flex w-full flex-col justify-between h-full mt-2 mb-1">
                    <div className="flex justify-between px-2">
                        <p className=" font-semibold text-sm  w-full h-fit text-ellipsis">{foodName}</p>
                    </div>
                    <div className="flex justify-between px-1.5 bg-slate-100 mb-2  ">
                        <p className="font-bold text-orange-500 text-xl ">{price}</p>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='flex justify-center items-center text-base text-gray-500  hover:text-gray-600 cursor-pointer'><span className="text-sm font-semibold text-gray-500">ເມນູ </span><HiDotsVertical /></span>}>
                            <Dropdown.Item
                                onClick={() =>
                                    alertconfirm(
                                        () => handleSuggested(suggested),
                                        `ຕ້ອງການປິດໃຊ້ງານ${suggested === "false" ? "ເລືອກເມນູແນະນຳ" : "ຍົກເລີກເມນູແນະນຳ"}  ?`,
                                        "question"
                                    )
                                }
                            >
                                {
                                    suggested === "false" ? (<span className="flex ">
                                        <HiBadgeCheck className='text-lg text-gray-400 mr-2' />ເລືອກເມນູແນະນຳ</span>) : (<span className="flex ">
                                            <HiBan className='text-lg text-gray-400 mr-2' />ຍົກເລີກເມນູແນະນຳ</span>)
                                }
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() =>
                                    alertconfirm(
                                        () => handleEditStatus(),
                                        `ຕ້ອງການປິດໃຊ້ງານ ${foodName} ?`,
                                        "question"
                                    )
                                }
                            >
                                {
                                    foodStatus === "disable" ? (<span className="flex ">
                                        <HiCheck className='text-lg text-gray-400 mr-2' />ເປີດໃຊ້ງານ</span>) : (<span className="flex ">
                                            <HiOutlineBan className='text-lg text-gray-400 mr-2' />ປິດໃຊ້ງານ</span>)
                                }
                            </Dropdown.Item>

                            <Dropdown.Item
                                onClick={() => onEdit(foodId)}
                            ><HiPencilAlt className='text-lg text-gray-400 mr-2' />ແກ້ໄຂເມນູ</Dropdown.Item>
                            <Dropdown.Item
                                onClick={() =>
                                    alertconfirm(
                                        () => onDelete(foodId),
                                        `ຕ້ອງການລົບ ${foodName} ?`,
                                        "question"
                                    )
                                }
                            ><HiOutlineTrash className='text-lg text-gray-400 mr-2' />ລົບ</Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
