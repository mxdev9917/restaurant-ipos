import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICategoriesService {
    status: number;
    message: string;
    data?: any;
}

export class editCategoryService  {
    static async editCategory(
        category_ID: string,
        category: string,
        update_at: string,
        gallery_path: string,
        category_img?: File
    ): Promise<ICategoriesService> {
        try {
            const formData = new FormData();
            formData.append("category_ID", category_ID);
            formData.append("category", category);
            formData.append("update_at", update_at);

            if (category_img) {
                formData.append("category_img", category_img);
            }
            if(gallery_path!=""){
                formData.append("gallery_path", gallery_path);
            }
            const res = await axios.patch(`${IPOS_BASE_URL}/category`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while editing the category",
            };
        }
    }
}
