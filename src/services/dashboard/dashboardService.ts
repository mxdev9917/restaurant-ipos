import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

export interface Root {
  status: string;
  message: string;
  totalSale: TotalSale[];
  topProduct: TopProduct[];
  timeSale: TimeSale[];
  timeMenuItem: TimeMenuItem[];
  tableStatus: TableStatus[];
  timeTable: TimeTable[];
  orderStatus: OrderStatus[];
  menuItem: MenuItem;
}

export interface TotalSale {
  total_quantity: string;
  count_orders: number;
}

export interface TopProduct {
  food_ID: number;
  total_quantity: string;
  total_price: string;
  food_name: string;
  category: string;
}

export interface TimeSale {
  hour: number;
  paid_count: string;
  unpaid_count: string;
}

export interface TimeMenuItem {
  hour: string;
  pending_qty: string;
  completed_qty: string;
  cancelled_qty: string;
  cooking_qty: string;
}

export interface TableStatus {
  reserved_count: string;
  busy_count: string;
  empty_count: string;
}

export interface TimeTable {
  hour: string;
  reserved_count: string;
  busy_count: string;
  empty_count: string;
}

export interface OrderStatus {
  paid_count: string;
  unpaid_count: string;
}

export interface MenuItem {
  qty: string;
  pending_qty: string;
  completed_qty: string;
  cancelled_qty: string;
  cooking_qty: string;
}

export class DashboardService {
  static async getDashboard(
    id: string,
    currentDate: string,
    token?: string 
  ): Promise<Root> {
    try {
      const headers: any = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.post(
        `${IPOS_BASE_URL}/dashboard/${id}`,
        { currentDate },
        { headers } 
      );

      return response.data;
    } catch (error: any) {
      console.error("Error during get request:", error.response ? error.response.data : error.message);
      throw new Error(error.response?.data?.message || "An error occurred while processing the request.");
    }
  }
}
