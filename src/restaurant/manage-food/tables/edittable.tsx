import { useEffect, useState } from "react";
import { HiPencilAlt, HiOutlineX } from "react-icons/hi";
import { generalErrors } from "../../../utils/error";
import { alertSuccessV3 } from "../../../utils/alert";
import { editTableService } from "../../../services/tables/edit-table";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { useAuth } from "../../../context/context";

interface EditTableProps {
    handleModel: () => void;
    tableName: string;
    tableId: string;
}

const EditTable: React.FC<EditTableProps> = ({ handleModel, tableName, tableId }) => {
    const [loading, setLoading] = useState(false);
    const [table_name, setTable_name] = useState("");
    const { token } = useAuth();

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            setLoading(true);
            const today = new Date().toISOString().split("T")[0];
            const res = await editTableService.editTable(tableId, table_name, today, token || "");
            if (res.status === 200) {
                alertSuccessV3("ແກ້ໄຂໂຕະສຳເລັດ", "success");
            }
        } catch (error: any) {
            generalErrors(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setTable_name(tableName);
    }, [tableName]);

    return (
        <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
                <p className="text-xl font-semibold text-orange-500">ແກ້ໄຂໂຕະ</p>
                <button
                    onClick={handleModel} 
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                    <HiOutlineX className="text-2xl" />
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="px-3 mt-3">
                <form onSubmit={formSubmit} className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-xs md:text-sm font-medium text-gray-900">
                                ຊື່ໂຕະ <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                value={table_name}
                                onChange={(e) => setTable_name(e.target.value)}
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="ປ້ອນໂຕະ..."
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white inline-flex gap-1 items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center text-xs md:text-sm"
                    >
                        <HiPencilAlt className="text-xl" />
                        {loading ? <LoadingSpinner text="ແກ້ໄຂ" /> : "ແກ້ໄຂ"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditTable;
