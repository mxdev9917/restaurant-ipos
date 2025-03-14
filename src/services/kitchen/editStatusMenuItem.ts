import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface Root{
    status:string;
    message: string;
}
export class editStatusMenuItemService{
    static async editStatusMenuItem(id:string,menu_item_status:string):Promise<Root>{
        try {
            const response=await axios.patch(`${IPOS_BASE_URL}/kitchen/menu/${id}`,{menu_item_status});
            return response.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while editing the menu item",
            };
        }
    }
}