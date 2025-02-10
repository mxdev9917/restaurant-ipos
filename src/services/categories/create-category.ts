

import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IFoodService {
    status: string;
    message: string;
    data?: any;
}

export class CreateCategoryService {
    static async CreateCategory(
        restaurant_ID: string,
        category:string,
        gallery_path: string,
        category_img?: File
    ): Promise<IFoodService> {
        try {
            const formData = new FormData();
            formData.append("restaurant_ID", restaurant_ID);
            formData.append("category",category.toString());
 
            if(gallery_path!=""){
                formData.append("gallery_path", gallery_path);
            }
            if (category_img) {
                formData.append("category_img", category_img);
            }

            const res = await axios.post(`${IPOS_BASE_URL}/category`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while creating the food",
            };
        }
    }
}
