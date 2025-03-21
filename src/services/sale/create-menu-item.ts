import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
export interface Root {
    status: string
    message: string
}

export class createMenuItemService {
    static async MenuItemService(table_ID: string, food_ID: string, quantity: string, description: string,category_ID:string, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.post(`${IPOS_BASE_URL}/menu/item`, {
                table_ID,
                food_ID,
                quantity,
                description,
                category_ID
            }, { headers });
            return response.data;

        } catch (error: any) {
            console.error("Error during POST request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}