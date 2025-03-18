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
    table_status: string
}


export class getByNameTableService {
    static async TableService(id: string, table_name: string, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.post(`${IPOS_BASE_URL}/table/${id}`, { table_name }, { headers });
            return response.data;
        } catch (error) {
            console.error("Error fetching Table:", error);
            throw error;
        }
    }
}