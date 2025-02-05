import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";


interface IFood {
  status: number,
  massege: string,
  data: Data ,
}
export interface Data {
  food_name: string
  price: number
  category_ID: number
  category: string
  food_img: string
}

export class GetByIdFoodService {
  static GetByIdProduct(product_ID: string) {
      throw new Error("Method not implemented.");
  }
  static async GetByIdFood(id: string): Promise<IFood> {
    try {
      const res = await axios.get(`${IPOS_BASE_URL}/food/${id}`);
      return res.data
    } catch (error) {
      console.error("Error fetching Food:", error);
      throw error;
    }
  }
}
