import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IProductService {
    status: number;
    message: string;
    data?: any;
}

export class editStatusProductService {
    static async editStatusProduct(id:string, product_status: string,updated_at:string): Promise<IProductService> {
        try {
            const res = await axios.patch(`${IPOS_BASE_URL}/product/status/${id}`, {
                product_status,
                updated_at
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
