import { useEffect, useState } from "react";
import { patchRateService } from "../../../services/setting/rates/editRateService";
import { alertSuccessV3 } from "../../../utils/alert";
import { generalErrors } from "../../../utils/error";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { HiPencilAlt, HiOutlineX } from "react-icons/hi";
import { useAuth } from "../../../context/context";
interface editRateProps {
    handleModelEdit: () => void;
    rate_ID: string;
    currencyOld: string;
    rateOld: string;
}
const editRate: React.FC<editRateProps> = ({ handleModelEdit, rate_ID, currencyOld, rateOld }) => {
    const [currency, setCurrency] = useState("");
    const [rate, setRate] = useState("");
    const [loading, setLoading] = useState(false);
    const { token } = useAuth();
    const formSumit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await patchRateService.RateService(rate_ID, currency, rate, token || "")
            if (res.status == "200") {
                alertSuccessV3("ແກ້ໄຂອັດຕາແລກປ່ຽນ ສຳເລັດ", 'success');
            }

        } catch (error) {
            generalErrors(error);
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        setCurrency(currencyOld);
        setRate(rateOld);
    }, [currencyOld, rateOld])

    return (
        <>
            <div className="bg-white  w-96 flex flex-col rounded-lg ">
                <div className="flex justify-between p-3 border-b-2 ">
                    <p className="text-orange-500">ແກ້ໄຂສະກຸນເງີນ</p>
                    <button
                        onClick={() => handleModelEdit()}
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
                                    value={currency}
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
                                    value={rate}
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
                                <LoadingSpinner text="ແກ້ໄຂສະກຸນເງີນ" />
                                :
                                <div className="flex">
                                    <HiPencilAlt className="text-xl" />
                                    ແກ້ໄຂສະກຸນເງີນ
                                </div>
                            }
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default editRate;