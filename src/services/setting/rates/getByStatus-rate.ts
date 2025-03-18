import { IPOS_BASE_URL } from "../../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    total_item: number
    data: Data[]
  }
  
  export interface Data {
    rate_ID: number
    currency: string
    rate: string
    rate_status: string
    created_at: string
  }
  

export class getRateStatusService {
    static async RateService(id: string, rate_status: string, page: string, limit: string, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.post(`${IPOS_BASE_URL}/rate/status/${id}`,
                {
                    rate_status,
                    page: page,
                    limit: limit
                },
                { headers });
            return response.data;
        } catch (error) {
            console.error("Error fetching rate:", error);
            throw error;
        }
    }
}