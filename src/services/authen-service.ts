
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
  restaurant_expiry_date: string
  user_ID: number
  user_name: string
  user_role: string
  user_img: any
}


export class authenService {
    static async authen(user: string, password: string): Promise<IAthen> {
        const res = await axios.post(`${IPOS_BASE_URL}/restaurant/signin`, {
            user,
            password
        });

        return res.data;
    }
}
