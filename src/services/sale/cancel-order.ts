import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
}

export class cancelOrderService {

    static async cancelOrder(id: string): Promise<Root> {
        try {
            const response = await axios.delete(`${IPOS_BASE_URL}/cancel/order/${id}`, {

            });
            return response.data;
        } catch (error: any) {
            console.error("Error during delete request :", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}