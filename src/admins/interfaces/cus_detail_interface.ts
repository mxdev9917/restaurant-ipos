export interface IOwnerById {
    status: string
    message: string
    data: Data
  }
  
  export interface Data {
    owner: Owner
    restaurants: Restaurant[]
  }
  
  export interface Owner {
    owner_name: string
    owner_email: string
    owner_phone: string
    owner_status: string
    owner_date: string
  }
  
  export interface Restaurant {
    restaurant_ID: number
    restaurant_name: string
    restaurant_status: string
    restaurant_img: string
    restaurant_expiry_date: string
    restaurant_created_at: string
  }
  