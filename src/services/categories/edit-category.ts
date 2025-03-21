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
        update_at: string,
        gallery_path: string,
        category_img?: File,
        token?: string,
        category_kitchen_status?: boolean,
        category_bar_status?: boolean,
    ): Promise<ICategoriesService> {
        try {
            // Validate required fields
            if (!category_ID || !category || !update_at) {
                return { status: 400, message: "Missing required fields (category_ID, category, or update_at)" };
            }

            // Prepare FormData
            const formData = new FormData();
            formData.append("category_ID", category_ID);
            formData.append("category", category);
            formData.append("update_at", update_at);

            // Append status only if values are provided (to avoid appending undefined)
            if (category_kitchen_status !== undefined) {
                formData.append("category_kitchen_status", category_kitchen_status.toString());
            }
            if (category_bar_status !== undefined) {
                formData.append("category_bar_status", category_bar_status.toString());
            }

            // Append optional fields
            if (category_img) {
                formData.append("category_img", category_img);
            }
            if (gallery_path) {
                formData.append("gallery_path", gallery_path);
            }

            // Ensure token is provided
            if (!token) {
                return { status: 401, message: "Authorization token is missing." };
            }

            // Make API request
            const res = await axios.patch(`${IPOS_BASE_URL}/category`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            });

            return res.data;
        } catch (error: any) {
            // Handle API error and network issues
            const status = error.response?.status || 500;
            const message = error.response?.data?.message || "An error occurred while editing the category.";

            // For network errors (i.e., no response from server)
            if (!error.response) {
                return { status: 503, message: "Network error, please try again later." };
            }

            return { status, message };
        }
    }
}
