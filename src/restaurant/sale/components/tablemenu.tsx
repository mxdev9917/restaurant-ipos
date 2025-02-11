import { alertSuccessV3 } from "../../../utils/alert";
import { useState } from "react";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { generalErrors } from "../../../utils/error";
import { OpenOrderService } from "../../../services/sale/createorder-service";
import { useAuth } from "../../../context/context";
import { useNavigate } from "react-router-dom";

interface TableMenuProps {
    handleClick?: (id: string) => void; // Optional function
    tableId: string;
}

const TableMenu: React.FC<TableMenuProps> = ({ handleClick, tableId }) => {
    const [loadingReserve, setReserveLoading] = useState(false);
    const [loadingOpen, setOpenLoading] = useState(false);
    const { data } = useAuth();
    const navigate = useNavigate();

    const handleUpdate = async (table_status: string, even: boolean) => {
        let userId = String(data.user_ID);
        let tableID = String(tableId);
        try {
            even ? setOpenLoading(true):setReserveLoading(true) ;
            const response = await OpenOrderService.OpenOrder(tableID, userId, table_status);
            if (response?.status == "200") {
                even ? navigate(`/cart/${tableId}`) : alertSuccessV3("ຈອງໂຕະສຳເລັດ", "success");
            }
        } catch (error: any) {
            generalErrors(error);
        } finally {
            setReserveLoading(false);
            setOpenLoading(false);
        }
    };

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
                    disabled={loadingReserve}
                    onClick={() => handleUpdate("reserve", false)}
                    className={`p-3 w-full mr-1 rounded-lg ${loadingReserve ? "bg-yellow-300" : "bg-yellow-400"}`}
                >
                    {loadingReserve ? <LoadingSpinner text="ຈອງໂຕະ" /> : "ຈອງໂຕະ"}
                </button>
                <button
                    disabled={loadingOpen}
                    onClick={() => handleUpdate("busy", true)}
                    className={`p-3 w-full ml-1 flex justify-center rounded-lg ${loadingOpen ? "bg-green-300" : "bg-green-500"}`}
                >
                    {loadingOpen ? <LoadingSpinner text="ເປີດໂຕະໄໝ່" /> : "ເປີດໂຕະໄໝ່"}
                </button>
            </div>
        </div>
    );
};

export default TableMenu;
