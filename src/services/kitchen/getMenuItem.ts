import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

// Updated interface with correct types
export interface Root {
    status: string;
    message: string;
    total_item: number; // Changed to number for correct data type
    data: Data[];
}

export interface Data {
    menu_items_ID: string;
    food_name: string;
    food_img: string;
    quantity: string;
    description: string;
    table_name: string;
    menu_item_status: string;
}

export class GetAllMenuItemService {
    static async getMenuItems(
        res_id: string,
        status: string,
        ck: string,
        page: string,
        limit: string,
        token?: string

    ): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.post(
                `${IPOS_BASE_URL}/kitchen/menu/${res_id}`, {
                status,
                ck,
                page,
                limit
            }, { headers });
            return response.data;
        } catch (error: any) {
            return {
                status: "error",
                message:
                    error.response?.data?.message ||
                    "An error occurred while fetching the menu items",
                total_item: 0,
                data: [],
            };
        }
    }
}
