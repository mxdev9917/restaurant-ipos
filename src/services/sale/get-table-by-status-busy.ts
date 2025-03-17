import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    data: Data[]
}

export interface Data {
    table_ID: number

}

export class GetTableByStatusBusyService {
    static async GetTableByStatusBusy(token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.get(`${IPOS_BASE_URL}/table/all/status/busy`, { headers });
            return response.data;
        } catch (error: any) {
            console.error("Error during get request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}