import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IDeleteUser {
    status: number;
    message: string;
    data: any;
}

export class DeleteUserService {
    static async DeleteUser(id: string, token?: string): Promise<IDeleteUser> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            // Pass headers as the second parameter in the axios.delete method
            const res = await axios.delete(`${IPOS_BASE_URL}/user/${id}`, { headers });

            return res.data;
        } catch (error: any) {
            console.error("Error during delete request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
