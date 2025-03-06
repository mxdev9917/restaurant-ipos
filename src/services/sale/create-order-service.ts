import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface IOpenOrder {
  status: string;
  message: string;
}

export class OpenOrderService {
  static async OpenOrder(table_ID:String, user_ID:String,table_status:String,restaurant_ID:string): Promise<IOpenOrder> {
    try {
      const res = await axios.post(`${IPOS_BASE_URL}/order`, { table_ID, user_ID, table_status,restaurant_ID }, {

      });
      return res.data;
    } catch (error: any) {
      console.error("Error during POST request:", error.response ? error.response.data : error.message);
      throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
    }
  }
}




