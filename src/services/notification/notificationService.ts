import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string;
    message: string;
    data: NotificationData[];
}

export interface NotificationData {
    notifications_ID: string;
    restaurant_ID: string;
    table_ID: string;
    user_type: string;
    notifications: string;
    notifications_status: string;
    created_at: string;
    update_at: string;
}

export class NotificationService {
    static async getNotification(notifications_ID: string, token: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const response = await axios.get(`${IPOS_BASE_URL}/restaurant_ID/notification/${notifications_ID}`, {
                headers,
            });

            return response.data;
        } catch (error) {
            console.error("Error fetching notifications:", error);
            throw error;
        }
    }
    static async updateNotification(notifications_ID: string, token: string): Promise<Root> {
        try {
            const headers: any = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const response = await axios.patch(`${IPOS_BASE_URL}/notification/${notifications_ID}`, {}, { headers });
            return response.data;
        } catch (error) {
            console.error("Error updating notifications:", error);
            throw error;
        }
    }

}
