import { useEffect, useState } from "react";
import { alertSuccessV3 } from "../../../utils/alert";
import { generalErrors } from "../../../utils/error";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { GetByeCategoryService } from "../../../services/categories/getby-category";
import { editCategoryService } from "../../../services/categories/edit-category";
import Gallery from "../../galley/gallery";
import { IPOS_BASE_URL } from "../../../utils/connection";
import { useAuth } from "../../../context/context";
interface EditCategoryProps {
    id: string;
    handleModel: (event: string) => void;
}

const EditCategory: React.FC<EditCategoryProps> = ({ handleModel, id }) => {
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [previewImg, setPreviewImg] = useState<string | null>(null);
    const [categoryImg, setCategoryIng] = useState<File | null>(null);
    const [isGallery, setIsGallery] = useState(false)
    const [gallery_path ,setGallery_path]=useState("");
    const { token } = useAuth();


    const handleGallery = () => {
        setIsGallery(!isGallery);
    }
    const handleSelectPath = (path: string) => {
        setPreviewImg(`${IPOS_BASE_URL}${path}`)
        setIsGallery(false);
        setGallery_path(path);

    }


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setCategoryIng(file);

            // Create a preview URL for the image
            const imgPreview = URL.createObjectURL(file);
            setPreviewImg(imgPreview);
        }
    };

    const formSumit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        try {
            const today = new Date().toISOString().split("T")[0];
            const response = await editCategoryService.editCategory(
                id,
                category,
                today,
                gallery_path,
                categoryImg || undefined,
                token||""

            );

            if (response.status == 200) {
                alertSuccessV3("ແກ້ໄຂເມນູສຳເລັດ", 'success');
            }
        } catch (error) {
            console.error("Error:", error);
            generalErrors(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await GetByeCategoryService.GetByCategory(id,token||"")
            setCategory(res.data[0].category)
        }
        fetchData();
    }, [id])
    return <>
        <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
                <p className="text-xl font-semibold text-orange-500">ແກ້ໄຂປະເພດເມນູ</p>
                <button
                    onClick={() => handleModel('close')}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="px-3 mt-3">
                <form onSubmit={formSumit} className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-xs md:text-sm font-medium text-gray-900">
                                Food Name <span className="text-red-600">*</span>
                            </label>
                            <input
                                onChange={(e) => setCategory(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                value={category}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="name..."
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 text-xs md:text-sm">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {previewImg ? (
                                        <img src={previewImg} alt="Uploaded Preview" className="w-32 h-32 object-cover rounded-lg" />
                                    ) : (
                                        <>
                                            <p className="text-gray-500 text-xs md:text-sm font-semibold mb-2">ກົດອັບໂຫຼດ</p>
                                            <p className="text-xs text-orange-500">SVG, JPG (MAX. 204x240px)</p>
                                        </>
                                    )}
                                </div>
                                <input id="dropzone-file" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                            </label>

                            {/* Separate button for selecting from gallery */}
                            <div className="flex justify-end w-full ">
                                <div onClick={handleGallery} className="mt-2 text-orange-500 text-xs md:text-sm underline">ເລືອກຈາກຄັງພາບ</div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center text-xs md:text-sm">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        {loading ?
                            <LoadingSpinner text="ແກ້ໄຂປະເພດເມນູ" />
                            :
                            "ແກ້ໄຂປະເພດເມນູ"
                        }
                    </button>
                </form>
            </div>
        </div>
        <div className={`w-full ${isGallery == false ? 'hidden' : 'absolute'} h-full  bg-white z-50`}>
            <Gallery handleSelectPath={handleSelectPath} handleGallery={handleGallery} />
        </div>
    </>
}

export default EditCategory;
