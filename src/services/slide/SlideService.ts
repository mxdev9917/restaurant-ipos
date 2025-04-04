import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface Root {
    status: string;
    message: string;
    data?: any;
}



export interface GetRoot {
    status: string
    message: string
    data: GetData[]
}

export interface GetData {
    slider_ID: number
    slider_url: string
    slider_visibility: string
}

export class slideService {
    static async AddSlideService(restaurant_ID: string, imageFile: File, token?: string): Promise<Root> {
        try {
            const formData = new FormData();
            formData.append("restaurant_ID", restaurant_ID);
            formData.append("slider_url", imageFile); // Send File, not string

            const response = await axios.post(`${IPOS_BASE_URL}/slide`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while creating the slider",
            };
        }
    }

    static async GetAllSlideService(restaurant_ID: string, token?: string): Promise<GetRoot> {
        try {
            const response = await axios.get(`${IPOS_BASE_URL}/slide/${restaurant_ID}`, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error: any) {
            console.error("Error fetching slide:", error);
            throw error;
        }
    }
    static async postStatusSlideService(slider_ID: string, slider_visibility: string, token?: string): Promise<Root> {
        try {
            const response = await axios.post(
                `${IPOS_BASE_URL}/slide/status`,
                { slider_ID, slider_visibility }, // JSON payload
                {
                    headers: {
                        "Content-Type": "application/json", // Correct content type
                        "Authorization": token ? `Bearer ${token}` : "", // Only add if token exists
                    },
                }
            );

            return response.data;
        } catch (error: any) {
            console.error("Error updating slide status:", error);
            throw error; // Rethrow the error for better debugging
        }
    }
    static async deleteRateService(id: string, token?: string): Promise<Root> {
        try {
            const response = await axios.delete(`${IPOS_BASE_URL}/slide/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json", // Correct content type
                        "Authorization": token ? `Bearer ${token}` : "", // Only add if token exists
                    },
                });
            return response.data;
        } catch (error: any) {
            console.error("Error deleting slide status:", error);
            throw error; // Rethrow the error for better debugging
        }
    }
    static async postSlideService(slider_ID: string, imageFile: File, token?: string): Promise<Root> {
        try {
            const formData = new FormData();
            formData.append("slider_ID", slider_ID);
            formData.append("slider_url", imageFile); // Send File, not string

            const response = await axios.post(`${IPOS_BASE_URL}/slide`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while editing the slider",
            };
        }
    }

}
