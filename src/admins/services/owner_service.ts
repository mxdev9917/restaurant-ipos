import axios from "axios";
import { IOwnerResponse, IOwnerResponseByid, IOwnerUpdateStatusResponse } from "../interfaces/customer_interface";
import { IPOS_BASE_URL } from "../../utils/connection";

export class OwnerService {
    static async getOwner(token: string): Promise<IOwnerResponse> {
        const res = await axios.get(`${IPOS_BASE_URL}/owner`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data; // This assumes that res.data is of type IOwnerResponse
    }
}

export class getOwnerByIdService {
    static async getOwnerById(id: String, token: string): Promise<IOwnerResponseByid> {
        const res = await axios.get(`${IPOS_BASE_URL}/owner/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data

    }

}
export class patchOwnerUpStatus {
    static async patchOwnerStatus(id: string, status: string, token: string): Promise<IOwnerUpdateStatusResponse> {
        const res = await axios.patch(`${IPOS_BASE_URL}/owner/lock/${id}`
            , {
                owner_status: status
            }
            ,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return res.data;
    }
}