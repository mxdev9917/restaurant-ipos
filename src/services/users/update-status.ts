import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IUpdateStatus {
    status: number;
    message: string; // Fixed typo: "massege" -> "message"
    data: any;
}

export class PatchStatusbyIdService {
    static async patchStatus(id: string, user_status: string, token?: string): Promise<IUpdateStatus> {
        try {
            const headers: any = {};
            // Add token to the headers if provided
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const res = await axios.patch<IUpdateStatus>(
                `${IPOS_BASE_URL}/user/update/status/${id}`,
                { user_status }, // Sending user_status as the request body
                { headers } // Properly passing headers as part of the config
            );

            return res.data;
        } catch (error: any) {
            console.error("Error during patch request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
