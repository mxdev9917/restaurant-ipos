import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IUpdateStatus{
    status: number,
    massege: string,
    data: any,
}

export class PatchStatusbyIdService {
    static async patchStatus(id: string, user_status: string): Promise<IUpdateStatus> {
      const res = await axios.patch<IUpdateStatus>(`${IPOS_BASE_URL}/user/update/status/${id}`, {
        user_status,
      });
      return res.data;
    }
  }
  
