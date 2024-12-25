export interface IGetuserById {
    status: string
    message: string
    data: Data[]
  }
  
  export interface Data {
    user_ID: number
    user_name: string
    user_phone: string
    user_role: string
    user_img: string
  }
  