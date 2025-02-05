import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { IFoods } from "../../interfaces/getallFood-interface";

export class GetallFoodsService{
    static async GetAllFoods(id: string,page:number,limit:number):Promise<IFoods>{
      try {
        const res =await axios.get(`${IPOS_BASE_URL}/food/all/${id}`,{
            params:{
                page: page,
                limit: limit
            }
        });
        return res.data
      } catch (error) {
        console.error("Error fetching Food:", error);
        throw error; 
      }
    }
}
