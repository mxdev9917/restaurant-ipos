import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICategoriesService {
    status: number;
    message: string;
    data?: any;
}

export class editStatusCategoryService {
    static async editStatusCategory(id: string, category_status: string, update_at: string, token?: string): Promise<ICategoriesService> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const res = await axios.patch(`${IPOS_BASE_URL}/category/status/${id}`, {
                category_status,
                update_at
            }, { headers });
            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while creating the category",
            };
        }
    }
}
