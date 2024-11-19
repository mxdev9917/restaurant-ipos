import axios from "axios";
import { ISign_up } from "../interfaces/signup_interface";
import { IPOS_BASE_URL } from "../../utils/connection";


export class postSign_upService {
    static async postSign_up(owner_name:string, owner_email:string,owner_phone:string,owner_password:string): Promise<ISign_up> {
        const res = await axios.post(`${IPOS_BASE_URL}/owner`
            , {
                owner_name:owner_name ,
                owner_email:owner_email ,
                owner_phone:owner_phone ,
                owner_password: owner_password,
            });
            return res.data;
    }
}