import { IPOS_BASE_URL } from "../../../utils/connection";
import axios from "axios";



export interface Root {
  status: string
  message: string
  data: Data[]
}

export interface Data {
  rate_ID: number
  currency: string
  rate: string
  rate_status: string
  created_at: string
}

export class getByNameRateService {
  static async RateService(
    id: string,
    currency: string,
    token?: string
  ): Promise<Root> {
    try {
      const headers: any = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.post(
        `${IPOS_BASE_URL}/rate/${id}`,
        { currency }, // Request body
        { headers }    // Headers
      );

      return response.data;
    } catch (error: any) {
      console.error("Error fetching categories:", error.message || error);
      throw error;
    }
  }
}
