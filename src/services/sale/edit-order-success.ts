import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
}

export class UpdateOrderSuccessService {
    static async UpdateOrderSuccess(table_ID: string, total_price: string): Promise<Root> {
        try {
            const response = await axios.post(`${IPOS_BASE_URL}/success/order`, {
                table_ID, total_price
            });
            return response.data;
        } catch (error: any) {
            console.error("Error during Post request :", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}