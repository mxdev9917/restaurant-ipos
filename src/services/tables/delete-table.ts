import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ITable{
    status: number,
    massege: string,
    data: any,
}

export class DeleteTableService{
    static async DeleteTable(id:string):Promise<ITable>{
        const res=await axios.delete(`${IPOS_BASE_URL}/table/${id}`)
        return res.data;
    }
}