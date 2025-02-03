import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IProduct{
    status: number,
    massege: string,
    data: any,
}

export class DeleteProductService{
    static async DeleteProduct(id:string):Promise<IProduct>{
        const res=await axios.delete(`${IPOS_BASE_URL}/product/${id}`)
        return res.data;
    }
}