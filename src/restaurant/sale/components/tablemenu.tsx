import { Link } from "react-router-dom";
import { reservsService } from "../../../services/tables/Reserve-table";
import { alertSuccessV3 } from "../../../utils/alert";
import { useState } from "react";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { generalErrors } from "../../../utils/error";

interface TableMenuProps {
    handleClick?: (id: string ) => void; // Optional function
    tableId: string;
}

const TableMenu: React.FC<TableMenuProps> = ({ handleClick, tableId }) => {
    const [loading, setLoading] = useState(false);

    const handleUpdate = async () => {
        try {
            setLoading(true);
            const response = await reservsService.Reserver(tableId)
            if (response.status == "200") {
                alertSuccessV3("ຈອງໂຕະສຳເລັດ", "success");
            }

        } catch (error:any) {
            generalErrors(error)
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="h-fit w-96 bg-white rounded-lg flex flex-col p-3 mx-5 sm:mx-0">
            <div className="flex justify-between items-center border-b-2">
                <p className="text-xl pb-2 text-gray-700 font-semibold">ເລືອກເມນູ</p>
                <button
                    onClick={() => handleClick && handleClick(tableId)}
                    className="text-red-500"
                >
                    ຍົກເລິກ
                </button>
            </div>
            <div className="w-full flex justify-evenly mt-3 text-white">
                <button
                    onClick={handleUpdate}
                    className="p-3 bg-yellow-400 w-full mr-1 rounded-lg">
                    {loading ?
                        <LoadingSpinner text="ຈອງໂຕະ" />
                        :
                        "ຈອງໂຕະ"
                    }
                </button>
                <Link
                    to={`/cart/${tableId}`}
                    className="p-3 bg-green-500 w-full ml-1 flex justify-center rounded-lg"
                >
                    ເປີດໂຕະໄໝ່
                </Link>
            </div>
        </div>
    );
};

export default TableMenu;
