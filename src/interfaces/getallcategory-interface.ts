export interface ICategories {
  status: string
  message: string
  total_item: TotalItem
  data: Data[]
}
export interface TotalItem {
  total: number
}
export interface Data {
  category_ID: string
  category: string
  category_status:string
  created_at: string
}
