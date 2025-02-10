
import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";


export interface IReserve {
    status: string
    message: string
}

export class reservsService {

    static async Reserver(id: string): Promise<IReserve> {
        try {

            const res = await axios.patch(`${IPOS_BASE_URL}/table/reserve/${id}`, {
                
            })
            return res.data;


        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }


}


