import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICategoriesService {
    status: number;
    message: string;
    data?: any;
}

export class GetByeCategoryService {
    static async GetByCategory(id: string,): Promise<ICategoriesService> {
        try {
            const res = await axios.get(`${IPOS_BASE_URL}/category/${id}`,);
            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while creating the category",
            };
        }
    }
}
