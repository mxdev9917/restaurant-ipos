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
export class getReportByDateService {
    static async ReportByDate(id: string, startDate: string, endDate: string, page: string, limit: string, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const res = await axios.post(
                `${IPOS_BASE_URL}/report/food/sale/date/${id}`, {
                startDate,
                endDate,
                page,
                 limit
            }, { headers }
            );
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "An error occurred while fetching the food items");
        }
    }
}

