import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IDeleteUser{
    status: number,
    massege: string,
    data: any,
}

export class DeleteUserService{
    static async DeleteUser(id:string):Promise<IDeleteUser>{
        const res=await axios.delete(`${IPOS_BASE_URL}/user/${id}`)
        return res.data;
    }
}


