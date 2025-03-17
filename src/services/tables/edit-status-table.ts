import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ITableService {
    status: number;
    message: string;
    data?: any;
}

export class editTableStatusService {
    static async editStatusTable(id: string, table_status: string, update_at: string, token?: string): Promise<ITableService> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const res = await axios.patch(`${IPOS_BASE_URL}/table/status/${id}`, {
                table_status,
                update_at
            }, { headers });
            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while updateting the table",
            };
        }
    }
}
