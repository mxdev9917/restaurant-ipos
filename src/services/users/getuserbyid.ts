
import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { IGetuserById } from "../../interfaces/getuserbyid_interface";



export class PatchUserbyIdService {
    static async patchUserById(
        id: string,
        user_name: string,
        user_phone: string,
        user_role: string,
        user_img: string
    ): Promise<IGetuserById> {
        const res = await axios.patch<IGetuserById>(`${IPOS_BASE_URL}/user/${id}`, {
            user_name,
            user_phone,
            user_role,
            user_img
        });
        return res.data;
    }
}





export class GetUserByIdService {
    static async GetUserById(id: string): Promise<IGetuserById> {
        const res = await axios.get(`${IPOS_BASE_URL}/getuser/${id}`)
        return res.data;
    }
}