// import { IPOS_BASE_URL } from "../../../utils/connection";
// import { Dropdown } from "flowbite-react";
// import { editStatusMenuItemService } from "../../../services/kitchen/editStatusMenuItem";
// import { HiDotsVertical, HiOutlineClipboardList, HiOutlineClipboardCheck, HiOutlineTrash } from "react-icons/hi";
// import { alertconfirm, alertSuccessV3 } from "../../../utils/alert";
// import { useEffect, useState } from "react";
// interface MenuItemProps {
//     id: string;
//     foodName: string;
//     qty: string;
//     description: string;
//     tableName: string
//     pathImg: string;
//     status: string;
// }

// const MenuItem: React.FC<MenuItemProps> = ({ id, foodName, qty, description, tableName, pathImg, status }) => {
//     const [statusItem, setStatusItem] = useState("")
//     const [colorStatusItem, setColorStatusItem] = useState("")
//     useEffect(() => {
//         if (status === "cooking") {
//             setStatusItem("ກຳລັງເຮັດ");
//             setColorStatusItem("text-yellow-400");
//         } else if (status === "completed") {
//             setStatusItem("ສຳເລັດແລ້ວ");
//             setColorStatusItem(" text-green-500");

//         } else if (status === "cancelled") {
//             setStatusItem("ຍົກເລີກ");
//             setColorStatusItem("text-red-600");
//         }
//         else {
//             setStatusItem("ລໍຖ້າ");
//             setColorStatusItem("text-orange-500");
//         }

//     }, [status])

//     const handleUpdateStatus = async (value: string) => {
//         try {
//             const res = await editStatusMenuItemService.editStatusMenuItem(id, value);
//             if (res.status === "200") {
//                 alertSuccessV3("ສຳເລັດ", "success")
//             }
//         } catch (error) {

//         }
//     }

//     return (
//         <>
//             <div className="flex flex-col sm:w-[245px] xl:w-[300px] w-[170px]  h-80 sm:h-96 shadow-inner bg-white rounded-md mb-2">
//                 <img
//                     className="h-20 sm:h-40 object-contain"
//                     src={`${IPOS_BASE_URL}${pathImg}`}
//                     alt="Food Image"
//                 />
//                 <div className="flex sm:flex-row flex-col justify-between mt-2 px-3 border-b-[1px]">
//                     <p className="sm:text-xl text-base font-semibold text-orange-500">{foodName}</p>
//                     <p className="sm:text-base text-sm">ຈຳນວນ: {qty}</p>
//                 </div>
//                 <div className="h-full my-2 px-3 border-b-[1px]">
//                     <p className="text-[12px] text-gray-700">{description}</p>
//                 </div>
//                 <div className="flex  items-center h-fit justify-between w-full px-3">
//                     <p className="text-2xl sm:text-3xl font-semibold pl-2 text-orange-500">{tableName}</p>
//                     <div className="flex gap-2 text-white">

//                         <Dropdown label="" placement="top" dismissOnClick={false} renderTrigger={() => <span className={`flex items-center ${colorStatusItem} `}>{statusItem} <HiDotsVertical /> </span>}>
//                             <Dropdown.Item
//                                 onClick={() =>
//                                     alertconfirm(
//                                         () => handleUpdateStatus("cooking"),
//                                         `ຕ້ອງການຮັບອໍເດີ ${foodName} ?`,
//                                         "question"
//                                     )
//                                 }
//                                 className="flex gap-1">
//                                 <HiOutlineClipboardList className="text-xl" /> ກົດອັບອໍເດີ
//                             </Dropdown.Item>
//                             <Dropdown.Item
//                                 onClick={() =>
//                                     alertconfirm(
//                                         () => handleUpdateStatus("completed"),
//                                         `ຕ້ອງການສຳເລັດອໍເດີ ${foodName} ?`,
//                                         "question"
//                                     )
//                                 }
//                                 className="flex gap-1">
//                                 <HiOutlineClipboardCheck className="text-xl" /> ກົດສຳເລັດ
//                             </Dropdown.Item>
//                             <Dropdown.Item
//                                 onClick={() =>
//                                     alertconfirm(
//                                         () => handleUpdateStatus("cancelled"),
//                                         `ຕ້ອງການຍົກເລີກອໍເດີ ${foodName} ?`,
//                                         "question"
//                                     )
//                                 }
//                                 className="flex gap-1">
//                                 <HiOutlineTrash className="text-xl" /> ກົດຍົກເລີກ
//                             </Dropdown.Item>
//                         </Dropdown>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );

// }

// export default MenuItem;