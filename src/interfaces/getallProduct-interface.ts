export interface IProduct {
    status: string
    message: string
    total_item: number
    data: Data[]
  }
  
  export interface Data {
    product_ID:string
    product_name: string
    category: string
    product_status: string
    price: number
    product_img: string
    created_at: string
  }
  