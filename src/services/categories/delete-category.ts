import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICategory {
    status: number,
    massege: string,
    data: any,
}

export class DeleteCategoryService {
    static async DeleteCategory(id: string, token?: string): Promise<ICategory> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const res = await axios.delete(`${IPOS_BASE_URL}/category/${id}`, { headers })
            return res.data;
        } catch (error: any) {
            console.error("Error during delete request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}