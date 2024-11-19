export interface IAuthen{
    status: string
    message: string
    token: string
    data:data[]
  }
  
  export interface data {
    owner_name: string
    owner_email: string
    owner_phone: string
    owner_img: string
    created_at: string
  }
  