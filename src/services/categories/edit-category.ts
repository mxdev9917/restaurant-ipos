import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICategoriesService {
    status: number;
    message: string;
    data?: any;
}

export class editCategoryService {
    static async editCategory(
        category_ID: string,
        category: string,
        update_at:string,
        category_img?: File

    ): Promise<ICategoriesService> {
        try {
            const formData = new FormData();
            formData.append("category_ID", category_ID.toString());
            formData.append("category", category.toString());
            formData.append("update_at", update_at.toString());
            if (category_img) {
                formData.append("category_img", category_img);
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
                message: error.response?.data?.message || "An error occurred while editting the food",
            };
        }
    }
}

