import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    totalPrice: string
    table_name: string;
    data: Data[]
}

export interface Data {
    menu_items_ID: string
    food_name: string
    price: number
    quantity: number,

}

export class GetMenuItemService {
    static async MenuItem(id: string, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const response = await axios.get(`${IPOS_BASE_URL}/menu/item/${id}`, { headers });
            return response.data;

        } catch (error: any) {
            console.error("Error during get request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
