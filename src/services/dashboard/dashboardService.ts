import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    totalSale: TotalSale[]
    topProduct: TopProduct[]
    timeSale: TimeSale[]
    timeMenuItem: TimeMenuItem[]
}

export interface TotalSale {
    total_quantity: string
    total_price: string
}

export interface TopProduct {
    food_ID:string
    total_quantity: string
    total_price: string
    food_name: string
    category: string
}

export interface TimeSale {
    hour: string
    total_sales: string
}

export interface TimeMenuItem {
    hour: string
    qty: string
}

export class dashboardService {
    static async getDashboard(id: string, dates: string): Promise<Root> {
        try {
            const response = await axios.get(`${IPOS_BASE_URL}/dashboard/${id}`, {
                params: {
                    dates
                },

            });
            return response.data;
        } catch (error: any) {
            console.error("Error during get request :", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
} 