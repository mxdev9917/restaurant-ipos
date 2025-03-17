import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string;
    message: string;
}

export class cancelOrderService {
    static async cancelOrder(id: string, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            // Add token to the headers if provided
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            // Pass headers as part of the config in axios.delete
            const response = await axios.delete(`${IPOS_BASE_URL}/cancel/order/${id}`, {
                headers, // Correct placement of headers
            });

            return response.data;
        } catch (error: any) {
            console.error("Error during delete request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
