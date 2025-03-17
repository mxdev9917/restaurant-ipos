import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IFood {
    status: number,
    massege: string,
    data: any,
}

export class DeleteFoodService {
    static async DeleteFood(id: string, token?: string): Promise<IFood> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const res = await axios.delete(`${IPOS_BASE_URL}/food/${id}`, { headers });
            return res.data;
        } catch (error: any) {
            console.error("Error during delete request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}