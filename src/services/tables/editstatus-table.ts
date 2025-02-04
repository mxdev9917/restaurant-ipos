import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ITableService {
    status: number;
    message: string;
    data?: any;
}

export class editTableStatusService {
    static async editStatusTable(id:string, table_status: string,update_at:string): Promise<ITableService> {
        try {
            const res = await axios.patch(`${IPOS_BASE_URL}/table/status/${id}`, {
                table_status,
                update_at
            });
            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while updateting the table",
            };
        }
    }
}
