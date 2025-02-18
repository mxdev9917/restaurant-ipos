import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface IFood {
  status: string
  message: string
  total_item: number
  data: Data[]
}

export interface Data {
  food_name: string
  price: number
  category_ID: number
  category: string
  food_img: string
}

export class GetAllFoodByCategoryIdService {
  static async GetAllFoodByCategoryId(id: string, page: number, limit: number): Promise<IFood> {
    try {
      const response = await axios.get(`${IPOS_BASE_URL}/food/all/category/${id}`, {
        params:{
          page: page,
          limit: limit
      }
      });
      return response.data;
    } catch (error: any) {
      console.error("Error during Get request :", error.response ? error.response.data : error.message);
      throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
    }
  }
}