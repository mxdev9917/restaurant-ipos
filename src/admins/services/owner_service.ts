import axios from "axios";
import { IPOS_BASE_URL } from "../../utils/connection";
import { IOwner } from "../interfaces/customer_interface";



interface IGetAllOwner {
  status: number | undefined;
  data: IOwner;
}

export const OwnerService = {
  getOwner: async (token: string): Promise<IGetAllOwner> => {
      const response = await axios.get(`${IPOS_BASE_URL}/owner`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
      return response;
  }
};
