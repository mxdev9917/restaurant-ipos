import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IUserResponse {
    status: number;
    message: string; // Corrected "massage" to "message"
    data: any;
}

export class PostUserService {
    static async postUser(
        restaurant_ID: string,
        user_name: string,
        user: string,
        user_phone: string,
        user_password: string,
        user_role: string,
        user_img: string
    ): Promise<IUserResponse> {
        const res = await axios.post(`${IPOS_BASE_URL}/user`, {
            restaurant_ID, // Use dynamic parameters
            user_name,
            user,
            user_phone,
            user_password,
            user_role,
            user_img
        });
        return res.data;
    }
}



