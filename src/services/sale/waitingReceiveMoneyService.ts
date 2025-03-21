import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
}

export class WaitingReceiveMoneyService{
    static async WaitingReceiveMoney(table_ID:string,token?: string):Promise<Root>{
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.get(`${IPOS_BASE_URL}/order/wrn/${table_ID}`,{ headers });
            return response.data;
        } catch (error: any) {
            console.error("Error during delete request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}