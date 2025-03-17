import { useEffect, useState } from "react";
import { GetallcategoryByStatusService } from "../../../services/categories/get-by-statuse-category";
import { ICategoriesStatus } from "../../../services/categories/get-by-statuse-category";
import { alertSuccessV3 } from "../../../utils/alert";
import { GetByIdFoodService } from "../../../services/foods/get-by-id-food";
import { EditFoodService } from "../../../services/foods/edit-food";
import { IPOS_BASE_URL } from "../../../utils/connection";
import { useAuth } from "../../../context/context";
import Gallery from "../../galley/gallery";
import { generalErrors } from "../../../utils/error";

interface EditPorductProps {
    handleModel: (event: string) => void;
    food_ID: string
}

const EditFoods: React.FC<EditPorductProps> = ({ handleModel, food_ID }) => {
    let img;
    const [getData, setGetData] = useState<ICategoriesStatus["data"]>([]);
    const [foodName, setFoodName] = useState("");
    const [price, setPrice] = useState("");
    const [foodCategory, setFoodCategory] = useState("");
    const [food_img, setProductImg] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [previewImg, setPreviewImg] = useState<string | null>(null);
    const { data, token } = useAuth();
    const [isGallery, setIsGallery] = useState(false);
    const [gallery_path, setGallery_path] = useState("");

    const handleGallery = () => {
        setIsGallery(!isGallery);
    }
    const handleSelectPath = (path: string) => {
        setPreviewImg(`${IPOS_BASE_URL}${path}`)
        setIsGallery(false);
        setGallery_path(path);

    }
    const fetchFoodData = async () => {
        try {
            const res = await GetByIdFoodService.GetByIdFood(food_ID, token || "");

            if (Array.isArray(res.data) && res.data.length > 0) {
                img = `${IPOS_BASE_URL}${res.data[0].food_img}`
                if (res.data[0].food_img) {
                    setPreviewImg(img)
                }
                setFoodName(res.data[0].food_name);
                setPrice(res.data[0].price);
                setFoodCategory(res.data[0].category_ID);
            } else {
                console.warn("No product data found!");
            }
        } catch (error: any) {
            console.error("Failed to fetch product:", error);
            generalErrors(error)
        }
    };


    const fetchData = async () => {
        let resId = String(data.restaurant_ID);
        const res = await GetallcategoryByStatusService.GetAllCategory(resId, token || "");
        setGetData(res.data);
    };

    useEffect(() => {
        if (food_ID) {
            fetchFoodData();
        }
        fetchData();
    }, [food_ID]);



    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setProductImg(file);

            // Create a preview URL for the image
            const imgPreview = URL.createObjectURL(file);
            setPreviewImg(imgPreview);
        }
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await EditFoodService.Editfood(
                food_ID,
                foodCategory,
                "3", // Assuming "3" is the restaurant ID
                foodName,
                price,
                gallery_path,
                food_img || undefined,
                token || ""
            );

            if (response.status === "200") {
                alertSuccessV3("ແກ້ໄຂເມນູສຳເລັດ", 'success');
            }
        } catch (error: any) {
            console.error("Error:", error);
            generalErrors(error)
        } finally {
            setLoading(false);
        }
    };

    return <>
        <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
                <p className="text-xl font-semibold text-orange-500">ແກ້ໄຂເມນູ</p>
                <button onClick={() => handleModel("close")} type="button" className="flex justify-center items-center text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8">
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>

            <div className="px-3 mt-3">
                <form onSubmit={formSubmit} className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        {/* Food Name Input */}
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 font-medium text-gray-900 text-xs md:text-sm">
                                Food Name <span className="text-red-600"> *</span>
                            </label>
                            <input
                                value={foodName}
                                onChange={(e) => setFoodName(e.target.value)}
                                type="text"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Food name..."
                                required
                            />
                        </div>

                        {/* Price Input */}
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="price" className="block mb-2 text-xs md:text-sm font-medium text-gray-900">
                                Price <span className="text-red-600"> *</span>
                            </label>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                min={0}
                                type="number"
                                id="price"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter price"
                                required
                            />
                        </div>

                        {/* Category Select */}
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-xs md:text-sm font-medium text-gray-900">
                                Category <span className="text-red-600"> *</span>
                            </label>
                            <select
                                id="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                value={foodCategory} // Use value instead of selected on <option>
                                onChange={(e) => setFoodCategory(e.target.value)}
                            >
                                <option value="" disabled>Select category</option>
                                {getData.map((item) => (
                                    <option key={item.category_ID} value={item.category_ID}>
                                        {item.category}
                                    </option>
                                ))}
                            </select>

                        </div>

                        {/* File Upload */}
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

                    <button type="submit" className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center" disabled={loading}>
                        {loading ? "ແກ້ໄຂເມນູ..." : "ແກ້ໄຂເມນູ"}
                    </button>
                </form>
            </div>
        </div>
        <div className={`w-full ${isGallery == false ? 'hidden' : 'absolute'} h-full  bg-white z-50`}>
            <Gallery handleSelectPath={handleSelectPath} handleGallery={handleGallery} />
        </div>
    </>
};

export default EditFoods;