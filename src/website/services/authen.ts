import { IAuthen } from "../interfaces/authen_interface";
import axios from "axios";
import { IPOS_BASE_URL } from "../../utils/connection";

export class authenService{
    static async postAuthen(email:string,pass:string):Promise<IAuthen>{
        const res =await axios.post(`${IPOS_BASE_URL}/owner/signin`,{
            owner_email:email,
            owner_password:pass
        });
        return res.data;
    }
}
