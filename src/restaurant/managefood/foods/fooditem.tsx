
import { Dropdown } from "flowbite-react";
import { HiPencilAlt, HiOutlineTrash, HiOutlineBan, HiDotsVertical } from "react-icons/hi"; //HiCheck 
import { alertconfirm, alertSuccessV3 } from '../../../utils/alert';
import { generalErrors } from '../../../utils/error';
import { editStatusProductService } from "../../../services/products/editstatus-product";
import { IPOS_BASE_URL } from "../../../utils/connection";
import { useEffect, useState } from "react";

interface productItemProps {
    // onEdit: (id: string, product_name: string) => void;
    onDelete: (id: string) => void;
    productId: string;
    productName: string;
    productStatus: string;
    productImg: string
}

const FoodItem: React.FC<productItemProps> = ({ onDelete, productName, productImg, productStatus, productId }) => {
const [pathImg,setPathImg]=useState("")
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

    useEffect(()=>{
        setPathImg(IPOS_BASE_URL + productImg)
    },[])





    return (
        <div
  className="flex flex-col justify-between w-full h-full shadow-xl rounded-lg"
  style={{
    backgroundImage: `url(${IPOS_BASE_URL}${productImg})`,
    backgroundSize: 'cover',   // Ensures the image covers the entire area
    backgroundPosition: 'center', // Centers the image
  }}
>
            <div className="w-full h-fit flex justify-end p-2">
                {/* <button
                    // onClick={()=>handleEdit('edit')}
                    className=" bg-slate-100 p-1 opacity-50 rounded-md mr-2">
                    <svg className="w-7 h-7 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                    </svg>
                </button>
                <button className=" bg-slate-100 p-1 opacity-50 rounded-md">
                    <svg className="w-6 h-6 text-red-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>

                </button> */}
            </div>
            <div className="w-full bg-slate-100 h-10 opacity-75 flex justify-end items-center text-black text-sທ md:text-base font-semibold">
                <p className='w-full flex justify-center'>{productName}</p>
                <div className='w-5 mr-1 '>
                    <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='text-base text-black  hover:text-gray-500 cursor-pointer'> <HiDotsVertical /></span>}>
                        <Dropdown.Item
                            onClick={() =>
                                alertconfirm(
                                    () => handleEditStatus(),
                                    `ຕ້ອງການປິດໃຊ້ງານ ${productName} ?`,
                                    "question"
                                )
                            }
                        ><HiOutlineBan className='text-lg text-gray-400 mr-2' />ປິດໃຊ້ງານ</Dropdown.Item>
                        <Dropdown.Item
                        // onClick={handleEdit}
                        ><HiPencilAlt className='text-lg text-gray-400 mr-2' />ແກ້ໄຂໂຕະ</Dropdown.Item>
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
    )
}

export default FoodItem
