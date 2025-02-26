import axios from "axios";
import { IPOS_BASE_URL } from "../../utils/connection";

export interface Root {
    status: string
    message: string
}

export class TableIncludedService {
    static async TableIncluded(table_ID: string, tableIncluded_ID: string): Promise<Root> {
        try {
            const response = await axios.post(`${IPOS_BASE_URL}/table/included`, {
                 table_ID,
                 tableIncluded_ID
            });
            return response.data;
        } catch (error: any) {
            console.error("Error during post request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}


