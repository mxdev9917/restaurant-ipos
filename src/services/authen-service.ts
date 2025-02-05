
import { IPOS_BASE_URL } from "../utils/connection";
import axios from "axios";

export interface IAthen {
    status: string
    message: string
    token: string
    data: Data
  }
  
  export interface Data {
    restaurant_ID: number
    restaurant_name: string
    restaurant_expiry_date: string
    restaurant_img: string
  }
  

export class authenService {
    static async authen(restaurant_user: string, restaurant_password: string): Promise<IAthen> {
        const res = await axios.post(`${IPOS_BASE_URL}/restaurant/signin`, {
            restaurant_user,
            restaurant_password
        });

        return res.data;
    }
}
