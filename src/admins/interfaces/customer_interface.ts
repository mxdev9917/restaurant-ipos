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
  update_at: string;
}

// Define the API response structure for retrieving owners
export interface IOwnerResponse {
  status: string;
  message: string;
  data: IOwner[]; // This should be an array of IOwner
}
