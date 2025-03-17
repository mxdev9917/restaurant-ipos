import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";


export interface ICategoriesStatus {
  status: string
  message: string
  data: Data[]
}

export interface Data {
  category_ID: string
  category: string
  category_image: string
}




export class GetallcategoryByStatusService {
  static async GetAllCategory(id: string, token?: string,): Promise<ICategoriesStatus> {
    try {
      const headers: any = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await axios.get(`${IPOS_BASE_URL}/category/status/${id}`, {
        headers
      });
      return res.data
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
}
