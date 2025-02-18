import { useState } from "react";
import { HiPlus, HiOutlineX } from "react-icons/hi";
import { CreateTableService } from "../../../services/tables/create-table";
import { alertSuccessV3 } from "../../../utils/alert";
import { createTableErrors } from "../../../utils/error";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { useAuth } from "../../../context/context";
interface CreateTableProps {
    handleModel: (event: string) => void;
}

const CreateTable: React.FC<CreateTableProps> = ({ handleModel }) => {
    const [table, setTable] = useState("");
    const [loading, setLoading] = useState(false);
     const { data } = useAuth();
    const formSumit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            setLoading(true);
            let resId = String(data.restaurant_ID);
            const res = await CreateTableService.CreateTable(resId, table) 
            if (res.status == 200) {
                alertSuccessV3("ເພີ່ມໂຕະ ສຳເລັດ", 'success');
            }

        } catch (error: any) {
            createTableErrors(error);
        } finally {
            setLoading(false);
        }

    }
    return (
        <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
                <p className="text-xl font-semibold text-orange-500 ">ເພີ່ມໂຕະ</p>
                <button onClick={() => handleModel('close')} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                    <HiOutlineX className="text-2xl" />
                    <span className="sr-only">Close modal </span>
                </button>

            </div>
            <div className="px-3 mt-3">
                <form onSubmit={formSumit} className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">Table Name <span className="text-red-600"> *</span></label>
                            <input
                                onChange={(e) => setTable(e.target.value)}
                                type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name..." />
                        </div>
                    </div>
                    <button type="submit" className="text-white inline-flex gap-1 items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg  px-4 py-2.5 text-center text-xs md:text-sm">
                        <HiPlus className="text-xl" />
                        {loading ?
                            <LoadingSpinner text="ເພີ່ມໂຕະ" />
                            :
                            "ເພີ່ມໂຕະ"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTable

