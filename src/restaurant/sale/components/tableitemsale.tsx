interface TableItemSaleProps {
    onClick?: () => void; // Make the onClick prop optional
}

const TableItemSale: React.FC<TableItemSaleProps> = ({ onClick }) => {
    function handleOnClick() {
        if (onClick) {
            onClick();
        }
    }
    
    return (
        <button 
        onClick={handleOnClick} className="flex justify-center items-center w-full h-full bg-green-500 rounded-md shadow-inner">
            <p className="text-2xl font-bold text-white">ໂຕະ1</p>
        </button>
    );
}

export default TableItemSale;
