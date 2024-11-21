import axios from "axios";
import { IOwnerResponse } from "../interfaces/customer_interface";
import { IPOS_BASE_URL } from "../../utils/connection";
import { IOwnerById } from "../interfaces/cus_detail_interface";


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

export class GetOwnerByIdService {
    static async getOwnerById(id: string, token: string): Promise<IOwnerById> {
        if (!token) {
            throw new Error("Authorization token is required");
        }

        try {
            const res = await axios.get(`${IPOS_BASE_URL}/owner/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return res.data;
        } catch (error: any) {
            console.error("Error fetching owner by ID:", error.response?.data || error.message);
            throw error;
        }
    }
}

export class patchOwnerUpStatus {
    static async patchOwnerStatus(id: string, status: string, token: string): Promise<IOwnerById> {
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