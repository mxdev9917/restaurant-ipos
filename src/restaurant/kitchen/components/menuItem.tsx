import { IPOS_BASE_URL } from "../../../utils/connection";
import { Dropdown } from "flowbite-react";
import { editStatusMenuItemService } from "../../../services/kitchen/editStatusMenuItem";
import { HiDotsVertical, HiOutlineClipboardList, HiOutlineClipboardCheck, HiOutlineTrash } from "react-icons/hi";
import { alertconfirm, alertSuccessV3 } from "../../../utils/alert";
import { useEffect, useState } from "react";
interface MenuItemProps {
    id: string;
    foodName: string;
    qty: string;
    description: string;
    tableName: string
    pathImg: string;
    status: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, foodName, qty, description, tableName, pathImg, status }) => {
    const [statusItem, setStatusItem] = useState("")
    const [colorStatusItem, setColorStatusItem] = useState("")
    useEffect(() => {
        if (status === "cooking") {
            setStatusItem("ກຳລັງເຮັດ");
            setColorStatusItem("text-yellow-400");
        } else if (status === "completed") {
            setStatusItem("ສຳເລັດແລ້ວ");
            setColorStatusItem(" text-green-500");

        } else if (status === "cancelled") {
            setStatusItem("ຍົກເລີກ");
            setColorStatusItem("text-red-600");
        }
        else {
            setStatusItem("ລໍຖ້າ");
            setColorStatusItem("text-orange-500");
        }

    }, [status])

    const handleUpdateStatus = async (value: string) => {
        try {
            const res = await editStatusMenuItemService.editStatusMenuItem(id, value);
            if (res.status === "200") {
                alertSuccessV3("ສຳເລັດ", "success")
            }
        } catch (error) {

        }
    }

    return (
        <>
            <div className="flex flex-col sm:w-[245px] xl:w-[300px] w-[170px]  h-60 sm:h-70 shadow-lg bg-white rounded-md mb-2">
               dsd
            </div>
        </>
    );

}

export default MenuItem;