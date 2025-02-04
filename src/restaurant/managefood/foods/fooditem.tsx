
import { Dropdown } from "flowbite-react";
import { HiPencilAlt, HiOutlineTrash, HiOutlineBan, HiDotsVertical, HiCheck  } from "react-icons/hi"; //HiCheck 
import { alertconfirm, alertSuccessV3 } from '../../../utils/alert';
import { generalErrors } from '../../../utils/error';
import { editStatusProductService } from "../../../services/products/editstatus-product";
import { IPOS_BASE_URL } from "../../../utils/connection";

interface productItemProps {
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    productId: string;
    productName: string;
    productStatus: string;
    productImg: string
    price: string
}

const FoodItem: React.FC<productItemProps> = ({ onDelete, onEdit, productName, price, productImg, productStatus, productId }) => {

    const handleEditStatus = async () => {
        try {
            const newStatus = productStatus == "disable" ? "active" : "disable";
            const today = new Date().toISOString().split("T")[0];

            const res = await editStatusProductService.editStatusProduct(productId, newStatus, today);

            if (res.status == 200) {
                alertSuccessV3("ສຳເລັດ", 'success');
            }
        } catch (error) {
            generalErrors(error);
        }
    };







    return (


        <div
            className="flex flex-col justify-between w-full h-full shadow-xl rounded-lg"

        >
            <div className="w-full h-fit flex justify-end p-2 relative">
                {
                    productImg !== null ?
                        <img className="h-28 w-full object-cover rounded-md" src={`${IPOS_BASE_URL}${productImg}`} alt="" />
                        :
                        <img className="h-28 w-full object-contain rounded-md" src="\public\images\ipos.png" alt="" />

                }

                {
                    productStatus === "disable" && (
                        <div className="flex justify-center items-center h-28 w-full rounded-md absolute bg-slate-100/50 font-semibold text-xl text-gray-600">
                            ປິດໃຊ້ງານ
                        </div>
                    )
                }
            </div>

            <div className="w-full bg-slate-100 flex justify-end items-center text-black text-sm md:text-base font-semibold">
                <div className="flex w-full flex-col justify-between h-full mt-2 mb-1">
                    <div className="flex justify-between px-2">
                        <p className=" font-semibold text-sm  w-full h-fit text-ellipsis">{productName}</p>
                    </div>
                    <div className="flex justify-between px-1.5 bg-slate-100 mb-2  ">
                        <p className="font-bold text-orange-500 text-xl ">{price}</p>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='flex justify-center items-center text-base text-gray-500  hover:text-gray-600 cursor-pointer'><span className="text-sm font-semibold text-gray-500">ເມນູ </span><HiDotsVertical /></span>}>
                            <Dropdown.Item
                                onClick={() =>
                                    alertconfirm(
                                        () => handleEditStatus(),
                                        `ຕ້ອງການປິດໃຊ້ງານ ${productName} ?`,
                                        "question"
                                    )
                                }
                            >
                                {
                                    productStatus === "disable" ? (<span className="flex "> <HiCheck  className='text-lg text-gray-400 mr-2' />ເປີດໃຊ້ງານ</span>) : (<span className="flex "> <HiOutlineBan className='text-lg text-gray-400 mr-2' />ປິດໃຊ້ງານ</span>)
                                }
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => onEdit(productId)}
                            ><HiPencilAlt className='text-lg text-gray-400 mr-2' />ແກ້ໄຂເມນູ</Dropdown.Item>
                            <Dropdown.Item
                                onClick={() =>
                                    alertconfirm(
                                        () => onDelete(productId),
                                        `ຕ້ອງການລົບ ${productName} ?`,
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
