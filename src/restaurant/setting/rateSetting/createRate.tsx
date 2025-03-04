import { useState } from "react";
import { useAuth } from "../../../context/context";
import { postRateService } from "../../../services/setting/rates/createRateService";
import { alertSuccessV3 } from "../../../utils/alert";
import { generalErrors } from "../../../utils/error";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { HiPlus, HiOutlineX } from "react-icons/hi";
interface CreateRateProps {
    handleModel: (event: string) => void;
}
const createRate: React.FC<CreateRateProps> = ({ handleModel }) => {
    const { data } = useAuth();
    const [currency, setCurrency] = useState("");
    const [rate, setRate] = useState("");
    const [loading, setLoading] = useState(false);
    const formSumit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        let resId = String(data.restaurant_ID);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await postRateService.rateService(resId, currency, rate)
            if (res.status == "200") {
                alertSuccessV3("ເພີ່ມອັດຕາແລກປ່ຽນ ສຳເລັດ", 'success');
            }

        } catch (error) {
            generalErrors(error);
        } finally {
            setLoading(false)
        }

    }

    return (
        <>
            <div className="bg-white  w-96 flex flex-col rounded-lg ">
                <div className="flex justify-between p-3 border-b-2 ">
                    <p className="text-orange-500">ເພີ່ມສະກຸນເງີນ</p>
                    <button
                        onClick={() => handleModel("close")}
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    >
                        <HiOutlineX />
                        <span className="sr-only">Close modal </span>
                    </button>
                </div>
                <div className="px-3 mt-3">
                    <form onSubmit={formSumit} className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2  font-medium text-gray-900 text-xs md:text-sm"
                                >
                                    {" "}
                                    ສະກຸນເງີນ <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    onChange={(e) => (setCurrency(e.target.value))}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="ຊື່ສະກຸນເງີນ..."
                                />
                            </div>
                        </div>
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2  font-medium text-gray-900 text-xs md:text-sm"
                                >
                                    {" "}
                                    ອັດຕາແລກປ່ຽນຕໍ່ 1000 ກີບ <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    onChange={(e) => setRate(e.target.value)}
                                    type="number"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="ອັດຕາແລກປ່ຽນ..."
                                />
                            </div>
                        </div>


                        <button
                            type="submit"
                            className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center "
                        >


                            {loading ?
                                <LoadingSpinner text="ເພີ່ມໂຕະ" />
                                :
                                <div className="flex">
                                    <HiPlus className="text-xl" />
                                    ເພີ່ມສະກຸນເງີນ
                                </div>
                            }
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default createRate;