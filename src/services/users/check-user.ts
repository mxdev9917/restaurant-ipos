import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICKResponse {
    status: number,
    massege: string,
    data: any,
}

export class PostCHUserService {
    static async postCkUser(user: string,token?: string ): Promise<ICKResponse> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
              }
            const res = await axios.post(`${IPOS_BASE_URL}/checkuser`, { user });
            return res.data;
        } catch (error: any) {
            console.error("Error during post request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
          }
       
    }
}