import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../../../context/context";
import { slideService } from "../../../services/slide/SlideService";
import { alertError, alertSuccessV3 } from "../../../utils/alert";
import { generalErrors } from "../../../utils/error";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { HiPlus  } from "react-icons/hi";
interface AddSlideProps {
    handleModel: (value: boolean) => void;
}

const AddSlide: React.FC<AddSlideProps> = ({ handleModel }) => {
    const { data, token } = useAuth();
    const [productImg, setProductImg] = useState<File | null>(null);
    const [previewImg, setPreviewImg] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setProductImg(file);
            setPreviewImg(URL.createObjectURL(file));
        }
    };

    const handleAdd = async () => {
        if (!productImg) {
            alertError("ກະລູນາເລືອກຮູບພາບ",'warning')
            return;
        }

        try {
            setLoading(true)
            let resId = String(data.restaurant_ID);
            const res = await slideService.AddSlideService(resId, productImg, token || "");
            if (res.status === "201") {
                alertSuccessV3("ເພີ່ມພາບສະໄລສຳເລັດ", 'success');
            }
        } catch (error) {
            console.error("Error adding slide:", error);
            generalErrors(error);
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className="w-80 sm:w-96 h-fit flex flex-col bg-white rounded-md shadow-lg pb-2">
            {/* Header */}
            <div className="w-full flex justify-between p-2.5 border-b-2">
                <p className="text-xl text-orange-500 font-semibold">ເພີ່ມພາບສະໄລ</p>
                <button onClick={() => handleModel(false)} className="p-1.5 hover:bg-gray-200 rounded-full">
                    <IoCloseSharp className="text-2xl text-orange-500" />
                </button>
            </div>

            {/* File Upload */}
            <div className="p-2">
                <div className="col-span-2">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 text-xs md:text-sm">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {previewImg ? (
                                <img src={previewImg} alt="Uploaded Preview" className="w-fit  object-cover rounded-lg px-4" />
                            ) : (
                                <>
                                    <p className="text-gray-500 text-xs md:text-sm font-semibold mb-2">ກົດອັບໂຫຼດ</p>
                                    <p className="text-xs text-orange-500">SVG, JPG (MAX. 204x240px)</p>
                                </>
                            )}
                        </div>
                        <input id="dropzone-file" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    </label>
                </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end px-3">
                <button onClick={handleAdd} className= "flex items-center bg-orange-500 hover:bg-orange-400 py-1 px-3 text-white rounded-md">
                    <HiPlus className="text-xl" />
                    {loading ?
                        <LoadingSpinner text="ເພີ່ມ" />
                        :
                        "ເພີ່ມ"
                    }
                </button>
            </div>
        </div>
    );
};

export default AddSlide;
