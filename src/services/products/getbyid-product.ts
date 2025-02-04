import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";


interface IProduct {
  status: number,
  massege: string,
  data: Data ,
}
export interface Data {
  product_name: string
  price: number
  category_ID: number
  category: string
  product_img: string
}

export class GetByIdProductService {
  static async GetByIdProduct(id: string): Promise<IProduct> {
    try {
      const res = await axios.get(`${IPOS_BASE_URL}/Product/${id}`);
      return res.data
    } catch (error) {
      console.error("Error fetching Categories:", error);
      throw error;
    }
  }
}
