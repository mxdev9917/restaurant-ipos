import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { IGetAllUserById } from "../../interfaces/getalluserbyid_interface";

export class GetAllUserByIdService{
    static async GetAllUserById(id:string):Promise<IGetAllUserById>{
        const res =await axios.get(`${IPOS_BASE_URL}/user/${id}`)
        return res.data;
    }
}