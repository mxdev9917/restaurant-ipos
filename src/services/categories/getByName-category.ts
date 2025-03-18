import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { ICategories } from "../../interfaces/getallcategory-interface";

export class getByNameCategoryService {
  static async categoryService(
    id: string,
    category: string,
    token?: string
  ): Promise<ICategories> {
    try {
      const headers: any = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.post(
        `${IPOS_BASE_URL}/category/name/${id}`,
        { category }, // Request body
        { headers }    // Headers
      );

      return response.data;
    } catch (error: any) {
      console.error("Error fetching categories:", error.message || error);
      throw error;
    }
  }
}
