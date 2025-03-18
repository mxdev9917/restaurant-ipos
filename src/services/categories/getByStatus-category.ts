import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    data: Data[]
}

export interface Data {
    category_ID: number
    category: string
    category_status: string
    category_image: string
}


export class getCategoryByStatusService {
    static async categoryByStatusService(id: string, category_status: string, page: string, limit: string, token?: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.post(`${IPOS_BASE_URL}/category/status/${id}`,
                {
                    category_status,
                    page: page,
                    limit: limit
                },
                { headers });
            return response.data;
        } catch (error) {
            console.error("Error fetching category:", error);
            throw error;
        }
    }
}