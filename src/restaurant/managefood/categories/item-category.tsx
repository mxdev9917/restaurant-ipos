
import { Dropdown } from "flowbite-react";
import { HiPencilAlt, HiOutlineTrash, HiOutlineBan, HiDotsVertical, HiCheck } from "react-icons/hi"; //HiCheck 
import { alertconfirm, alertError, alertSuccessV3 } from '../../../utils/alert';
import { generalErrors } from '../../../utils/error';
import { IPOS_BASE_URL } from "../../../utils/connection";
import { editStatusCategoryService } from "../../../services/categories/editstatus-category";
interface categoryItemProps {
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    categoryId: string;
    categoryName: string;
    categoryStatus: string;
    categoryImg: string
}

const CategroyItem: React.FC<categoryItemProps> = ({ onDelete, onEdit, categoryName, categoryImg, categoryStatus, categoryId }) => {
    const handleEditStatus = async () => {
        let newStatus: string;
        categoryStatus = categoryStatus.toLowerCase();
        if (categoryStatus === "locked") {
            newStatus = "active"
        } else if (categoryStatus === "active") {
            newStatus = "locked"
        } else {
            alertError("ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໄໝ່ອີກຄັ້ງ", "error");
            return
        }

        try {
 
            const today = new Date().toISOString().split("T")[0];
            const res = await editStatusCategoryService.editStatusCategory(categoryId, newStatus, today);
            if (res.status == 200) {
                console.log(res.status);
                alertSuccessV3("ສຳເລັດ", 'success');
            }
        } catch (error: any) {
            console.error(error);
            generalErrors(error);
        } finally {
         
        }

    };
    return (


        <div
            className="flex flex-col justify-between w-full h-full shadow-xl rounded-lg z-40"

        >
            <div className="w-full h-fit flex justify-end p-2 relative">
                {
                    categoryImg !== null ?
                        <img className="h-28 w-full object-cover rounded-md" src={`${IPOS_BASE_URL}${categoryImg}`} alt="" />
                        :
                        <img className="h-28 w-full object-contain rounded-md" src="\public\images\ipos.png" alt="" />

                }

                {
                    categoryStatus === "locked" && (
                        <div className="flex justify-center items-center h-28 w-full rounded-md absolute bg-slate-100/50 font-semibold text-xl text-gray-600">
                            ປິດໃຊ້ງານ
                        </div>
                    )
                }
            </div>

            <div className="w-full bg-slate-100 flex justify-end items-center text-black text-sm md:text-base font-semibold">
                <div className="flex w-full flex-col justify-between h-full mt-2 mb-1">
                    <div className="flex justify-between px-1.5 bg-slate-100 mb-2  ">
                        <p className="font-bold text-orange-500 text-base ">{categoryName}</p>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='flex justify-center items-center text-base text-gray-500  hover:text-gray-600 cursor-pointer'><span className="text-sm font-semibold text-gray-500 z-40">ເມນູ </span><HiDotsVertical /></span>}>
                            <Dropdown.Item
                                onClick={() =>
                                    alertconfirm(
                                        () => handleEditStatus(),
                                        `ຕ້ອງການປິດໃຊ້ງານ ${categoryName} ?`,
                                        "question"
                                    )
                                }
                            >
                                {
                                    categoryStatus === "disable" ? (<span className="flex "> <HiCheck className='text-lg text-gray-400 mr-2' />ເປີດໃຊ້ງານ</span>) : (<span className="flex "> <HiOutlineBan className='text-lg text-gray-400 mr-2' />ປິດໃຊ້ງານ</span>)
                                }
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => onEdit(categoryId)}
                            ><HiPencilAlt className='text-lg text-gray-400 mr-2' />ແກ້ໄຂເມນູ</Dropdown.Item>
                            <Dropdown.Item
                                onClick={() =>
                                    alertconfirm(
                                        () => onDelete(categoryId),
                                        `ຕ້ອງການລົບ ${categoryName} ?`,
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

export default CategroyItem
