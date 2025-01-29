import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICategoriesService {
    status: number;
    message: string;
    data?: any;
}

export class editCategoryService {
    static async editCategory(id:string, category: string,update_at:string): Promise<ICategoriesService> {
        try {
            const res = await axios.patch(`${IPOS_BASE_URL}/category/${id}`, {
                category,
                update_at
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
