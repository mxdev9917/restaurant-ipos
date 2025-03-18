import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";


export interface Root {
  status: string
  message: string
  data: Data[]
}

export interface Data {
  food_ID: number
  food_name: string
  price: number
  food_status: string
  food_img: string
}

export class getByNameFoodService {
  static async foodService(
    id: string,
    food_name: string,
    token?: string
  ): Promise<Root> {
    try {
      const headers: any = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.post(
        `${IPOS_BASE_URL}/food/${id}`,
        { food_name }, // Request body
        { headers }    // Headers
      );

      return response.data;
    } catch (error: any) {
      console.error("Error fetching foods:", error.message || error);
      throw error;
    }
  }
}
