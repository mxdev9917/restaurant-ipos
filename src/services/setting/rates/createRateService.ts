import { IPOS_BASE_URL } from "../../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
}
export class postRateService {
    static async rateService(restaurant_ID: string, currency: string, rate: string): Promise<Root> {
        try {
            const response = await axios.post(`${IPOS_BASE_URL}/rate`, {
                restaurant_ID, currency, rate
            });
            return response.data;
        } catch (error: any) {
            console.error("Error during post request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}