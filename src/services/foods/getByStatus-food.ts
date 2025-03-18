import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    data: Data[]
}

export interface Data {
    food_ID: number
    food_name: string
    price: string
    food_status:string
    food_img: string
}


export class getFoodStatusService {
    static async FoodStatusService(id: string, food_status: string, page: string, limit: string, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.post(`${IPOS_BASE_URL}/food/status/${id}`,
                {
                    food_status,
                    page: page,
                    limit: limit
                },
                { headers });
            return response.data;
        } catch (error) {
            console.error("Error fetching food:", error);
            throw error;
        }
    }
}