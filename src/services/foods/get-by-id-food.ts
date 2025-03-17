import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";


interface IFood {
  status: number,
  massege: string,
  data: Data,
}
export interface Data {
  food_name: string
  price: number
  category_ID: number
  category: string
  food_img: string
}

export class GetByIdFoodService {

  static async GetByIdFood(id: string, token?: string): Promise<IFood> {
    try {
      const headers: any = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await axios.get(`${IPOS_BASE_URL}/food/${id}`, { headers });
      return res.data
    } catch (error) {
      console.error("Error fetching Food:", error);
      throw error;
    }
  }
}
