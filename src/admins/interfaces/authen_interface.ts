export interface IAuthentication {
    status: string
    message: string
    token:string
    data: Data[]
  }
  
  export interface Data {
    user_admin_ID: number
    user_admin_name: string
    user_admin_email: string
    user_admin_phone: string
    user_admin_role: string
    user_admin_password: string
    user_admin_status: string
    user_admin_img: string
    created_at: string
    update_at: string
  }