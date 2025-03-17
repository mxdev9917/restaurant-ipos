import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IResponse {
    status: number;
    message: string; // Fixed typo: "massege" -> "message"
}

export class ResetPasswordService {
    static async patchReset(id: string, token?: string): Promise<IResponse> {
        try {
            const headers: any = {};
            // Add token to the headers if it's provided
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const res = await axios.patch(
                `${IPOS_BASE_URL}/user/reset/${id}`,
                {}, // Empty body since you're not sending any data
                { headers } // Proper headers passed as part of the config
            );

            return res.data;
        } catch (error: any) {
            console.error("Error during patch request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
}
