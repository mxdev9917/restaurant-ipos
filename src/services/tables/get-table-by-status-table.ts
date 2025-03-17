import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface ITatble {
    status: string;
    message: string;
    total_item: number;
    data: Data[];
}

export interface Data {
    table_ID: number;
    table_name: string;
    table_status: string;
}

export class GetAllTableByStatusService {
    static async GetAllTable(id: string, page: number, limit: number, token?: string): Promise<ITatble> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            // Correct placement of headers inside config object
            const res = await axios.get(`${IPOS_BASE_URL}/table/${id}`, {
                params: {
                    page: page,
                    limit: limit
                },
                headers: headers, // Correct headers placement
            });
            return res.data;
        } catch (error) {
            console.error("Error fetching table:", error);
            throw error; 
        }
    }
}
