import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IResponse{
    status: number,
    massege: string,
}

export class ResetPasswordService{
    static async patchReset(id:string):Promise<IResponse>{
        const res=await axios.patch(`${IPOS_BASE_URL}/user/reset/${id}`)
        return res.data;
    }
}