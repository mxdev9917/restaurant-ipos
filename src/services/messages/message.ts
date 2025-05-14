import axios from "axios";
import { CLIENT_BASE_URL, IPOS_BASE_URL } from "../../utils/connection";

// Interfaces for response types
export interface Root {
    status: string;
    message: string;
    data: Daum[];
}

export interface Daum {
    chat_id: number;
    table_ID: string;
    table_name: string;
    messages: string;
}

export interface MessageRoot {
    status: string;
    message: string;
}

export interface RootAllMessage {
    status: string
    message: string
    data: Daum[]
}

export interface Daum {
    chat_id: number
    chat_type: string
    messages: string
    is_read: number
    sent_at: string
    table_name: string
}


// MessageService class for handling API calls
export class MessageService {
    // Fetch messages for a specific restaurant
    static async getMessages(restaurant_ID: string): Promise<Root> {
        try {
            const response = await axios.get<Root>(
                `${IPOS_BASE_URL}/restaurant/message/${restaurant_ID}`
            );
            return response.data;
        } catch (error) {
            console.error(`Error fetching messages for restaurant ${restaurant_ID}:`, error);
            throw error;
        }
    }

    // Post a new message
    static async postMessages(
        restaurant_ID: string,
        table_ID: string,
        chat_type: string,
        messages: string
    ): Promise<MessageRoot> {
        try {
            const response = await axios.post<MessageRoot>(`${IPOS_BASE_URL}/messages`, {
                restaurant_ID,
                table_ID,
                messages,
                chat_type
            });
            return response.data;
        } catch (error) {
            console.error(`Error posting message to restaurant ${restaurant_ID}, table ${table_ID}:`, error);
            throw error;
        }
    }
    static async postMessagesItem(
        restaurant_ID: string,
        table_ID: string,
    ): Promise<RootAllMessage> {
        try {
            const response = await axios.post<RootAllMessage>(`${IPOS_BASE_URL}/admin/messages`, {
                restaurant_ID, table_ID
            });
            return response.data;
        } catch (error) {
            console.error(`Error posting message to restaurant ${restaurant_ID}, table ${table_ID}:`, error);
            throw error;
        }
    }
}
