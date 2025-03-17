import { IPOS_BASE_URL } from "../../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
}


export class patchStatusRateService {
    static async RateService(id: string, rate_status: string, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.patch(`${IPOS_BASE_URL}/rate/status/${id}`, { rate_status }, { headers });
            return response.data;
        } catch (error: any) {
            console.error("Error during patch request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
