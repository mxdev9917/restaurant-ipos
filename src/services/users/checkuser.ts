import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICKResponse {
    status: number,
    massege: string,
    data: any,
}

export class PostCHUserService {
    static async postCkUser(user: string): Promise<ICKResponse> {
        const res = await axios.post(`${IPOS_BASE_URL}/checkuser`, { user });
        return res.data;
    }
}