export interface ICategories {
  status: string
  message: string
  total_item: number
  data: Data[]
}

export interface Data {
  category_ID: string
  category: string
  category_status:string
  category_image:string
  created_at: string
}
