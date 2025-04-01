import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    table: Table
    category: Category[]
    menuItem: MenuItem
    rate:Rate
  }
  
  export interface Table {
    table_ID: number
    table_name: string
    table_token: string
  }
  
  export interface Category {
    category_ID: number
    category: string
    category_image: string
  }
  
  export interface MenuItem {
    menuItems: item[]
    totalPrice: number
  }
  
  export interface item {
    food_ID: number
    food_name: string
    quantity: string
    price: number
    menu_item_status: string
  }
  export interface Rate {
    rate_ID: number
    currency: string
    rate: string
  }
  
  export class GetOrderService{
    static async OrderService(id:string,token?: string):Promise<Root>{
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.get(`${IPOS_BASE_URL}/order/${id}`, { headers });
            return response.data;
        } catch (error: any) {
            console.error("Error during get request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
  }