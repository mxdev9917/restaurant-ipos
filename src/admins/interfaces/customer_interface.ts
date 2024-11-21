// Define the structure for a single owner's data
export interface IOwner {
  owner_ID: number;
  owner_name: string;
  owner_email: string;
  owner_phone: string;
  owner_status: string;
  owner_password: string;
  restaurant_count: number;
  owner_img: string;
  created_at: string;
}


export interface IOwnerResponse {
  status: string;
  message: string;
  data: IOwner[];
}
export interface IOwnerResponseByid {
  status: string
  message: string
  data: ApiResponse
}

export interface ApiResponse {
  owner: IOwnerById;
  restaurants: IRestaurant[];
}

export interface IOwnerById {
  owner_name: string
  owner_email: string
  owner_phone: string
  owner_status: string
  owner_date:string
}

export interface IRestaurant {
  restaurant_ID: number
  restaurant_name: string
  restaurant_status: string
  restaurant_img: string
  restaurant_expiry_date: string
  restaurant_created_at:string
}

export interface IOwnerUpdateStatusResponse {
  status: string
  message: string
}
