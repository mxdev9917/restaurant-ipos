import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { IGetuserById } from "../../interfaces/getuserbyid-interface";

// PatchUserbyIdService class for updating user information by ID
export class PatchUserbyIdService {
    static async patchUserById(
        id: string,
        user_name: string,
        user_phone: string,
        user_role: string,
        user_img: string,
        token?: string
    ): Promise<IGetuserById> {
        try {
            const headers: any = {};
            // Add token to the headers if provided
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const res = await axios.patch<IGetuserById>(
                `${IPOS_BASE_URL}/user/${id}`,
                { user_name, user_phone, user_role, user_img },
                { headers } // Pass headers as part of the config
            );
            return res.data;
        } catch (error: any) {
            console.error("Error during patch request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}

// GetUserByIdService class for fetching user information by ID
export class GetUserByIdService {
    static async GetUserById(id: string, token?: string): Promise<IGetuserById> {
        const headers: any = {};
        // Add token to the headers if provided
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        try {
            const res = await axios.get(`${IPOS_BASE_URL}/getuser/${id}`, { headers }); // Corrected syntax here
            return res.data;
        } catch (error: any) {
            console.error("Error during get request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
