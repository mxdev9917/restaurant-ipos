import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    data: Data[]
}

export interface Data {
    table_ID: number
    table_name: string
}

export class GetTableByStatusBusyService {
    static async GetTableByStatusBusy(): Promise<Root> {
        try {
            const response = await axios.get(`${IPOS_BASE_URL}/table/all/status/busy`, {});
            return response.data;
        } catch (error: any) {
            console.error("Error during get request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}