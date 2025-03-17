import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ITable {
    status: number,
    massege: string,
    data: any,
}

export class DeleteTableService {

    static async DeleteTable(id: string, token?: string): Promise<ITable> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const res = await axios.delete(`${IPOS_BASE_URL}/table/${id}`, { headers });
            return res.data;
        } catch (error: any) {
            console.error("Error during get request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}