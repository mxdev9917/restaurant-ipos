import { IPOS_BASE_URL } from "../utils/connection";
import axios from "axios";

export interface IGallery {
    status: string;
    message: string;
    total_item: number;
    data: Data[];
}

export interface Data {
    pathImg_ID: string;
    pathImg_name: string;
}

export class GettAllGalleryService {
    static async getAllGallery(page: number, limit: number, token?: string): Promise<IGallery> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const res = await axios.get(`${IPOS_BASE_URL}/gallery`, {  // Fixed the 'gallery' endpoint if needed
                params: {
                    page: page,
                    limit: limit
                }, headers: headers,
            });
            return res.data;
        } catch (error: any) {
            console.error("Error fetching gallery:", error);
            throw new Error(error.response?.data?.message || "An unknown error occurred.");
        }
    }
}
