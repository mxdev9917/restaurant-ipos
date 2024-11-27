import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IResResponse {
    status: number;
    message: string;
    data?: any; // Adjust this based on the expected response structure
}

export class PostResService {
    static async postRes(ownerID:string, restaurantName:string, qty:string, currentTyp:string): Promise<IResResponse> {
     
        const res = await axios.post(`${IPOS_BASE_URL}/restaurant`, {
            owner_ID: ownerID,
            restaurant_name: restaurantName,
            restaurant_img: "test.jpg",
            qty: qty,
            current_type:currentTyp
        });
        return res.data;

    }
}