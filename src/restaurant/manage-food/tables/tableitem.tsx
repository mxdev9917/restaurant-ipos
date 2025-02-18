import React from 'react';
import { alertconfirm, alertSuccessV3 } from '../../../utils/alert';
import { Dropdown } from "flowbite-react";
import { HiOutlineExternalLink, HiPencilAlt, HiOutlineTrash, HiOutlineBan,HiCheck } from "react-icons/hi"; //HiCheck 
import { editTableStatusService } from '../../../services/tables/edit-status-table';
import { generalErrors } from '../../../utils/error';

interface TableItemProps {
  onEdit: (id: string, table_name: string) => void;
  onDelete: (id: string) => void;
  tableId: string;
  tableName: string;
  tableStatus: string;
}

const TableItem: React.FC<TableItemProps> = ({ onEdit, onDelete, tableName, tableStatus, tableId }) => {
  const handleEdit = () => {
    onEdit(tableId, tableName);

  };
  const handleEditStatus = async () => {
    try {
      const newStatus = tableStatus == "disable" ? "empty" : "disable";
      console.log(tableStatus);

      console.log(newStatus)
      const today = new Date().toISOString().split("T")[0];

      const res = await editTableStatusService.editStatusTable(tableId, newStatus, today);

      if (res.status == 200) {
        alertSuccessV3("ສຳເລັດ", 'success');
      }
    } catch (error) {
      generalErrors(error);
    }
  };


  return (
    <div className="flex flex-col w-full h-[160px] bg-cover ring-1 ring-gray-200 bg-white shadow-lg rounded-lg hover:bg-gray-100 overflow-hidden">
      <div className="flex justify-between items-center border-b-2">
        <p className={`pl-2 text-sm font-semibold ${tableStatus != "disable" ? "text-green-500" : "text-red-500"}`}>
          {tableStatus == "disable" ? "ປິດໃຊ້ງານ" : "ພ້ອມໃຊ້ງານ"}
        </p>
        <div className='flex gap-1 p-2'>
          <p className='text-sm text-gray-500 font-semibold'>ຕັ້ງຄ່າ</p>
          <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='text-xl text-gray-400 hover:text-gray-500 cursor-pointer'> <HiOutlineExternalLink /></span>}>
            <Dropdown.Item
              onClick={() =>
                alertconfirm(
                  () => handleEditStatus(),
                  `ຕ້ອງການປິດໃຊ້ງານ ${tableName} ?`,
                  "question"
                )
              }
            >
              {
                tableStatus === "disable" ? (<span className="flex "> <HiCheck className='text-lg text-gray-400 mr-2' />ເປີດໃຊ້ງານ</span>) : (<span className="flex "> <HiOutlineBan className='text-lg text-gray-400 mr-2' />ປິດໃຊ້ງານ</span>)
              }
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleEdit}
            ><HiPencilAlt className='text-lg text-gray-400 mr-2' />ແກ້ໄຂໂຕະ</Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                alertconfirm(
                  () => onDelete(tableId),
                  `ຕ້ອງການແກ້ໄຂ ${tableName} ?`,
                  "question"
                )
              }
            ><HiOutlineTrash className='text-lg text-gray-400 mr-2' />ລົບ</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center text-4xl sm:text-5xl text-orange-500 font-bold pb-7">{tableName}</div>
    </div>
  );
}

export default TableItem;
