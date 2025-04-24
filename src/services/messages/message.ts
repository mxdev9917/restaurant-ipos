import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
    status: string
    message: string
    data: Daum[]
}

export interface Daum {
    chat_id: number
    table_name: string
    messages: string
}

export class MessageService {
    static async getMessages(restaurant_ID: string): Promise<Root> {
        try {
            const response = await axios.get(`${IPOS_BASE_URL}/restaurant/message/${restaurant_ID}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching messages:", error);
            throw error;
        }
    }
}