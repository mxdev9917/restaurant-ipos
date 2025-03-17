// import { IPOS_BASE_URL } from "../../../utils/connection";
import { Dropdown } from "flowbite-react";
import { editStatusMenuItemService } from "../../../services/kitchen/editStatusMenuItem";
import { HiDotsVertical, HiOutlineClipboardList, HiOutlineClipboardCheck, HiOutlineTrash } from "react-icons/hi";
import { alertconfirm, alertSuccessV3 } from "../../../utils/alert";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/context";
interface MenuItemProps {
    id: string;
    foodName: string;
    qty: string;
    description: string;
    tableName: string
 
    status: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, foodName, qty, description, tableName,  status }) => {
    const [statusItem, setStatusItem] = useState("")
    const [colorStatusItem, setColorStatusItem] = useState("")
    const [colorBg,setColorBg]=useState("")
     const { token } = useAuth();
    useEffect(() => {
        if (status === "cooking") {
            setStatusItem("ກຳລັງເຮັດ");
            setColorStatusItem("text-yellow-400");
            setColorBg("bg-yellow-400");
            
        } else if (status === "completed") {
            setStatusItem("ສຳເລັດແລ້ວ");
            setColorStatusItem(" text-green-500");
            setColorBg(" bg-green-500");

        } else if (status === "cancelled") {
            setStatusItem("ຍົກເລີກ");
            setColorStatusItem("text-red-600");
            setColorBg("bg-red-600");
        }
        else {
            setStatusItem("ລໍຖ້າ");
            setColorStatusItem("text-orange-500");
            setColorBg("bg-orange-500");
        }

    }, [status])

    const handleUpdateStatus = async (value: string) => {
        try {
            const res = await editStatusMenuItemService.editStatusMenuItem(id, value,token||"");
            if (res.status === "200") {
                alertSuccessV3("ສຳເລັດ", "success")
            }
        } catch (error) {

        }
    }

    return (
        <>
            <div className="flex flex-col  justify-start sm:min-w-[250px]  h-60 sm:h-70 shadow-lg bg-white rounded-md ">
                {/* <div className="flex justify-center items-center w-24 h-28 bg-orange-500 rounded-br-2xl rounded-bl-2xl text-2xl font-semibold text-white">{tableName}</div> */}
                <div className="flex items-center justify-between" >
                    <div className="text-xl font-medium mt-2 pl-2">{foodName}</div>
                    <div className={`flex justify-center items-center text-xl text-white font-bold w-20 h-16 ${colorBg} rounded-l-3xl `} > {tableName}</div>
                </div>


                <div className="h-full px-3 mt-2">{description}</div>
                <div className="flex gap-2 justify-between w-full p-2">
                    <div className="py-1 w-fit rounded-sm">ຈຳນວນ: {qty}</div>
                    {/* <button className="text-white px-3 py-1 rounded-sm bg-orange-500">ຮັບອໍເດິ</button> */}
                    <Dropdown label="" placement="top" dismissOnClick={false} renderTrigger={() => <span className={`flex items-center ${colorStatusItem} `}>{statusItem} <HiDotsVertical /> </span>}>
                        <Dropdown.Item
                            onClick={() =>
                                alertconfirm(
                                    () => handleUpdateStatus("cooking"),
                                    `ຕ້ອງການຮັບອໍເດີ ${foodName} ?`,
                                    "question"
                                )
                            }
                            className="flex gap-1">
                            <HiOutlineClipboardList className="text-xl" /> ກົດອັບອໍເດີ
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() =>
                                alertconfirm(
                                    () => handleUpdateStatus("completed"),
                                    `ຕ້ອງການສຳເລັດອໍເດີ ${foodName} ?`,
                                    "question"
                                )
                            }
                            className="flex gap-1">
                            <HiOutlineClipboardCheck className="text-xl" /> ກົດສຳເລັດ
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() =>
                                alertconfirm(
                                    () => handleUpdateStatus("cancelled"),
                                    `ຕ້ອງການຍົກເລີກອໍເດີ ${foodName} ?`,
                                    "question"
                                )
                            }
                            className="flex gap-1">
                            <HiOutlineTrash className="text-xl" /> ກົດຍົກເລີກ
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </>
    );

}

export default MenuItem;