import { FileInput } from "flowbite-react";
import { useState } from "react";
import { PostResService } from "../services/create_resteurant";
import { useAuth } from "../../context/context";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { alertSuccess } from "../../utils/alert";
import { useNavigate } from 'react-router-dom';




function AddRestaurant() {
    const [resName, setResName] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { data } = useAuth();

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        try {
            setLoading(true)
            const ownerID = String(data.owner.owner_id);
            const qty = "1";
            const currentType = "years";
            const res = await PostResService.postRes(ownerID, resName, qty, currentType);
            alertSuccess(navigate, "/profiles", "ລົງທະບຽນສຳເລັດ", "success"); 
        } catch (error: any) {
            console.error("Submission error:", error.message);
        }finally{
            setLoading(true)
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-center">
                <div className="flex flex-col justify-center space-y-3 h-screen">
                    <div className="w-full border-b-[1px] pb-2">
                        <p className="text-3xl font-semibold text-gray-600 pl-4">ລົງທະບຽນຮ້ານໄໝ່</p>
                    </div>
                    <p className="text-gray-500">ຕັ້ງຊື່ຮ້ານໄຫ່ມຂອງທ່ານ. ປ້ອນຊື່ຮ້ານຂອງທ່ານໃສ່ຂ້າງລຸ່ມ</p>
                    <form onSubmit={formSubmit} className="flex flex-col gap-2 w-full">
                        <label
                            htmlFor="dropzone-file"
                            className="flex h-28 w-[90%] md:w-[450px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                        >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                <svg
                                    className="mb-4 h-8 w-8 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG, or GIF (MAX. 800x400px)</p>
                            </div>
                            <FileInput
                                id="dropzone-file"
                                className="hidden"
                                onChange={(e) => {

                                }}
                            />
                        </label>

                        <div className="w-[90%] md:w-[450px] h-fit">
                            <input
                                value={resName}
                                onChange={(e) => setResName(e.target.value)}
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-2"
                                placeholder="ຊື່ຮ້ານຂອງທ່ານ..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="h-9 bg-green-500 text-sm text-white rounded-md hover:bg-green-600"
                        >
                            {loading ?
                                <LoadingSpinner text="ລົງທະບຽນ" />
                                :
                                "ລົງທະບຽນ"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddRestaurant;
