import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
}

export class editSuggestedService {

    static async suggestedService(food_ID: string, suggested: string, token?: string): Promise<Root> {
        try {
            console.log({food_ID,suggested,token});
            
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.patch(`${IPOS_BASE_URL}/food/suggested`, {
                food_ID,
                suggested
            },
                // { headers }
            );

            return response.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while fetching the suggested food",
            };
        }
    }
}
