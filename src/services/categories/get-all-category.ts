import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { ICategories } from "../../interfaces/getallcategory-interface";

export class GetallcategoryService{
    static async GetAllCategory(id: string,page:number,limit:number):Promise<ICategories>{
      try {
        const res =await axios.get(`${IPOS_BASE_URL}/category/all/${id}`,{
            params:{
                page: page,
                limit: limit
            }
        });
        return res.data
      } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; 
      }
    }
}
