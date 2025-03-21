

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
        category: string,
        gallery_path: string,
        category_img?: File,
        token?: string,
        category_kitchen_status?: boolean,
        category_bar_status?: boolean,
    ): Promise<IFoodService | { status: number, message: string }> {
        try {
            // Basic validation for required fields
            if (!restaurant_ID || !category || typeof category_kitchen_status !== 'boolean' || typeof category_bar_status !== 'boolean') {
                return { status: 400, message: "Required fields are missing or incorrect." };
            }

            const formData = new FormData();
            formData.append("restaurant_ID", restaurant_ID);
            formData.append("category", category);
            formData.append("category_kitchen_status", category_kitchen_status.toString());
            formData.append("category_bar_status", category_bar_status.toString());

            if (gallery_path) {
                formData.append("gallery_path", gallery_path);
            }

            if (category_img) {
                formData.append("category_img", category_img);
            }

            const res = await axios.post(`${IPOS_BASE_URL}/category`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": token ? `Bearer ${token}` : "",
                },
            });

            return res.data;
        } catch (error: any) {
            // Improved error handling
            const status = error.response?.status || 500;
            const message = error.response?.data?.message || "An error occurred while creating the category.";
            
            // For network errors (i.e., no response from the server)
            if (!error.response) {
                return { status: 503, message: "Network error, please try again later." };
            }

            return { status, message };
        }
    }
}