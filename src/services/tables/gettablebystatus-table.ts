
import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";


export interface ITatble {
    status: string
    message: string
    total_item: number
    data: Data[]
  }
  
  export interface Data {
    table_ID: number
    table_name: string
    table_status: string
  }
  

  export class GetAllTableByStatusService{
     static async GetAllTable  (id: string, page: number, limit: number):Promise<ITatble>{
        try {
            
            const res= await axios.get(`${IPOS_BASE_URL}/table/${id}`,{
                params :{
                    page:page,
                    limit:limit
                }
            })
            return res.data;
        } catch (error) {
            console.error("Error fetching table:", error);
            throw error; 
        }

     }
  }