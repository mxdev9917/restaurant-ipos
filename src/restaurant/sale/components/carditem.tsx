import { useState } from "react";
import { DeleteMenuItemService } from "../../../services/sale/delete-menu-item";
import { alertconfirm, alertSuccessV3 } from "../../../utils/alert";
import { HiOutlineTrash } from "react-icons/hi";


interface CartsItemProps {
    menu_items_ID: string;
    food_name: string;
    price: string;
    quantity: string;

}

const CartsItem: React.FC<CartsItemProps> = ({ menu_items_ID, food_name, price, quantity }) => {
    const [loading, setLoading] = useState(false);
    const handleDelete = async () => {
        try {
            setLoading(true);
            const res = await DeleteMenuItemService.DeleteMenuItem(menu_items_ID)
            if (res.status === "200") {
                alertSuccessV3("ລົບລາຍການເມນູສຳເລັດ", "success");
            }
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="flex items-center justify-between w-full border-b py-2 ">
            <p className="flex-1 truncate">{food_name}</p>
            <p className="w-12 text-center">{quantity}</p>
            <p className="w-24 text-center">{price}</p>

            <button
                onClick={() => (alertconfirm(
                    () => handleDelete(),
                    `ຕ້ອງການຍົກເລີກລາຍການນີ້ບໍ່ ?`,
                    "question"
                ))}
                className="hover:bg-slate-100 py-1.5 rounded-full w-10 flex items-center justify-center">
                {loading ?
                    <div className="flex items-center justify-center">
                        <div className="flex items-center space-x-1 relative">
                            <div className="w-5 h-5 absolute left-[4px]  border-[3px]  border-solid rounded-full  border-gray-200 ring-0 ring-transparent "></div>
                            <div className="w-5 h-5  border-[3px]  border-solid rounded-full animate-slow-spin border-gray-200 border-t-orange-500"></div>

                        </div>
                    </div>
                    :
                    <HiOutlineTrash className="text-2xl text-red-600" />
                }

            </button>
        </div>
    );
}

export default CartsItem;
