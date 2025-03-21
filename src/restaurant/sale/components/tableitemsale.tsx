import React from 'react';

interface TableItemSaleProps {
  onClick?: (id: string, status: string) => void; // Make the onClick prop optional
  tableName: string;
  tableId: string;
  tableStatus: string;
}

const TableItemSale: React.FC<TableItemSaleProps> = ({ onClick, tableName, tableId, tableStatus }) => {
  function handleOnClick() {
    if (onClick) {
      onClick(tableId, tableStatus);
    }
  }

  return (
    <button
      onClick={handleOnClick}
      className={`flex justify-center items-center w-full h-full ${tableStatus === "reserve"
          ? 'bg-yellow-300'
          : tableStatus === "busy"
            ? 'bg-red-600'
            : tableStatus === "waitCheckBill"
              ? 'bg-orange-500'
              : 'bg-green-600'
        } rounded-md shadow-inner hover:bg-orange-300`}
    >
      <p className="text-3xl sm:text-5xl font-bold text-white">{tableName}</p>
    </button>


  );
}

export default TableItemSale;
