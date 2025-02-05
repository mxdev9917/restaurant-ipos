import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IFood{
    status: number,
    massege: string,
    data: any,
}

export class DeleteFoodService{
    static async DeleteFood(id:string):Promise<IFood>{
        const res=await axios.delete(`${IPOS_BASE_URL}/food/${id}`)
        return res.data;
    }
}