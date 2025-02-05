import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IFoodService {
    status: number;
    message: string;
    data?: any;
}

export class editStatusFoodService {
    static async editStatusFood(id:string, food_status: string,updated_at:string): Promise<IFoodService> {
        try {
            const res = await axios.patch(`${IPOS_BASE_URL}/food/status/${id}`, {
                food_status,
                updated_at
            });
            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while editing the Food",
            };
        }
    }
}
