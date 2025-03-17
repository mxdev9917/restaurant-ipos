import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { IFoods } from "../../interfaces/getallFood-interface";

export class GetallFoodsService {
  static async GetAllFoods(id: string, page: number, limit: number, token?: string): Promise<IFoods> {
    try {
      const headers: any = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await axios.get(`${IPOS_BASE_URL}/food/all/${id}`, {
        params: {
          page: page,
          limit: limit
        }, headers: headers,
      });
      return res.data
    } catch (error) {
      console.error("Error fetching Food:", error);
      throw error;
    }
  }
}
