import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface ICategory{
    status: number,
    massege: string,
    data: any,
}

export class DeleteCategoryService{
    static async DeleteCategory(id:string):Promise<ICategory>{
        const res=await axios.delete(`${IPOS_BASE_URL}/category/${id}`)
        return res.data;
    }
}