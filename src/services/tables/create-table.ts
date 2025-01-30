import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ITablesService {
    status: number;
    message: string;
    data?: any;
}

export class CreateTableService {
    static async CreateTable(restaurant_ID: string, table_name: string): Promise<ITablesService> {
        try {
            const res = await axios.post(`${IPOS_BASE_URL}/table`, {
                restaurant_ID,
                table_name
            });
            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while creating the category",
            };
        }
    }
}
