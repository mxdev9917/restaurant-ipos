export interface IGetAllUserById {
    totalCount: number
    status: string
    message: string
    data: Data[]
  }
  
  export interface Data {
    user_ID:string
    user_name: string
    user: string
    user_phone:string
    user_status: string
    user_role: string
    user_img: string
    created_at: string
  }
  