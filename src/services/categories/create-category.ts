import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICategoriesService {
    status: number;
    message: string;
    data?: any;
}

export class CreateCategoryService {
    static async CreateCategory(restaurant_ID: string, category: string): Promise<ICategoriesService> {
        try {
            const res = await axios.post(`${IPOS_BASE_URL}/category`, {
                restaurant_ID,
                category
            });
            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while creating the category",
            };
        }
    }
}
