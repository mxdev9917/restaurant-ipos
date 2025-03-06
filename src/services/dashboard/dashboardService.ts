import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
  status: string
  message: string
  totalSale: TotalSale[]
  topProduct: TopProduct[]
  timeSale: TimeSale[]
  timeMenuItem: TimeMenuItem[]
  tableStatus: TableStatus[]
  orderStatus: OrderStatus[]
  menuItem: MenuItem
}

export interface TotalSale {
  total_quantity: string
  count_orders: number
}

export interface TopProduct {
  food_ID: number
  total_quantity: string
  total_price: string
  food_name: string
  category: string
}

export interface TimeSale {
  hour: string
  total_sales: string
}

export interface TimeMenuItem {
  hour: string
  qty: string
}

export interface TableStatus {
  reserved_count: string
  busy_count: string
  empty_count: string
}

export interface OrderStatus {
  paid_count: string
  unpaid_count: string
}

export interface MenuItem {
  qty: string
}


export class dashboardService {
    static async getDashboard(id: string, currentDate: string): Promise<Root> {
        try {
            const response = await axios.post(`${IPOS_BASE_URL}/dashboard/${id}`, {
                   currentDate
            });
            return response.data;
        } catch (error: any) {
            console.error("Error during get request :", error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
        }
    }
} 