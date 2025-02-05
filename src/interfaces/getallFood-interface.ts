export interface IFoods {
    status: string
    message: string
    total_item: number
    data: Data[]
  }
  
  export interface Data {
    food_ID:string
    food_name: string
    category: string
    food_status: string
    price: number
    food_img: string
    created_at: string
  }
  