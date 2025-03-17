import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ITablesService {
    status: number;
    message: string;
    data?: any;
}

export class CreateTableService {
    static async CreateTable(restaurant_ID: string, table_name: string, token?: string): Promise<ITablesService> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const res = await axios.post(`${IPOS_BASE_URL}/table`, {
                restaurant_ID,
                table_name
            }, { headers });
            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while creating the category",
            };
        }
    }
}
