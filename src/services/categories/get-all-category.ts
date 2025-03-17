import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { ICategories } from "../../interfaces/getallcategory-interface";

export class GetallcategoryService {
  static async GetAllCategory(id: string, page: number, limit: number, token?: string): Promise<ICategories> {
    try {
      const headers: any = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await axios.get(`${IPOS_BASE_URL}/category/all/${id}`, {
        params: {
          page: page,
          limit: limit
        }, headers: headers,
      });
      return res.data
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
}
