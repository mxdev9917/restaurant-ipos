import { IPOS_BASE_URL } from "../../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
}


export class patchRateService {
    static async RateService(id: string, currency:string,rate: string): Promise<Root> {
        try {
            const response = await axios.patch(`${IPOS_BASE_URL}/rate/${id}`, {currency,rate });
            return response.data;
        } catch (error: any) {
            console.error("Error during patch request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
