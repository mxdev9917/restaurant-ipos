export interface ITable {
    status: string
    message: string
    total_item: number
    data: Data[]
  }
  
  export interface Data {
    table_ID: number
    restaurant_ID: number
    table_name: string
    table_status: string
    created_at: string
    update_at: string
  }
  