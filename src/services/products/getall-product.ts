import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { IProduct } from "../../interfaces/getallProduct-interface";

export class GetallProductService{
    static async GetAllProduct(id: string,page:number,limit:number):Promise<IProduct>{
      try {
        const res =await axios.get(`${IPOS_BASE_URL}/Product/all/${id}`,{
            params:{
                page: page,
                limit: limit
            }
        });
        return res.data
      } catch (error) {
        console.error("Error fetching Categories:", error);
        throw error; 
      }
    }
}
