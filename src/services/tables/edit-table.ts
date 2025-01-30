import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ITableService {
    status: number;
    message: string;
    data?: any;
}

export class editTableService {
    static async editTable(id:string, table_name: string,update_at:string): Promise<ITableService> {
        try {
            const res = await axios.patch(`${IPOS_BASE_URL}/table/${id}`, {
                table_name,
                update_at
            });
            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while updating the table",
            };
        }
    }
}
