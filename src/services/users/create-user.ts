import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IUserResponse {
    status: number;
    message: string;
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
        user_img: string,
        token?: string
    ): Promise<IUserResponse> {
        try {
            const headers: any = {};
            // Add token to the headers if it's provided
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const res = await axios.post(
                `${IPOS_BASE_URL}/user`,
                {
                    restaurant_ID, // Use dynamic parameters
                    user_name,
                    user,
                    user_phone,
                    user_password,
                    user_role,
                    user_img
                },
                { headers }
            );
            return res.data;
        } catch (error: any) {
            console.error("Error during post request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
