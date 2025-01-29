export interface IGetAllUserById {
  totalCount: number
  status: string
  total_item: TotalItem
  message: string
  data: Data[]
}
export interface TotalItem {
  total: number
}
export interface Data {
  user_ID: string
  user_name: string
  user: string
  user_phone: string
  user_status: string
  user_role: string
  user_img: string
  created_at: string
}
