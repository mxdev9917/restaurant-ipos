import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { IGetAllUserById } from "../../interfaces/getalluserbyid_interface";

export class GetAllUserByIdService {
    static async GetAllUserById(id: string,page:number): Promise<IGetAllUserById> {
        try {
            const res = await axios.get(`${IPOS_BASE_URL}/user/${id}`, {
                params: {
                    page: page,
                     limit: 10
                }
            });
            return res.data;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error; // Rethrow error for further handling in component
        }
    }
}
