import { IPOS_BASE_URL } from "../../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    total_item: number; 
    message: string
    data: Data[]
  }
  
  export interface Data {
    rate_ID: string
    currency: string
    rate: string
    rate_status: string
  }
  
  export class getByStatusRateService{
    static async RateService(id:string):Promise<Root>{
        try {
            const response= await axios.get(`${IPOS_BASE_URL}/rate/status/${id}`,{});
            return response.data;
        } catch (error: any) {
            console.error("Error during fetching request:", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
  }