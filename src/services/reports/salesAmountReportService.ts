import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    total_item: string
    data: Data[]
}

export interface Data {
    food_ID: string
    total_quantity: string
    total_price: string
    food_name: string
    category: string
    food_price: string
}


export class salesAmountReportService {
    static async salesAmountReport(id: string, page: number, limit: number, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.get(`${IPOS_BASE_URL}/report/food/sale/${id}`, {
                params: {
                    page: page,
                    limit: limit
                }, headers: headers,
            });
            return response.data;
        } catch (error: any) {
            console.error("Error during delete request :", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
