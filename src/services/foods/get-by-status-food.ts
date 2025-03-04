import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface IFoodService {
    status: string;
    message: string;
    total_item: number; 
    data: Data[];
}

export interface Data {
    food_ID: number;
    food_name: string;
    price: number;
    food_img: string;
    created_at:string;
}

export class GetFoodByStatusService {
    static async GetFoodService(id: string, page: number, limit: number): Promise<IFoodService> {
        try {
            const res = await axios.get(`${IPOS_BASE_URL}/food/status/${id}`, {
                params: { page, limit },
            });

            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "An error occurred while fetching the food items");
        }
    }
}
