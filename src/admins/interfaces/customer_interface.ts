// แสดงข้อมูลของเจ้าของคนเดียว
export interface IOwner {
  owner_ID: number;
  owner_name: string;
  owner_email: string;
  owner_phone: string;
  owner_status: string;
  owner_password: string;
  owner_img: string;
  created_at: string;
  update_at: string;
}

// แสดงโครงสร้างของการตอบกลับจาก API
export interface IOwnerResponse {
  status: string;
  message: string;
  data: IOwner[]; // ต้องเป็นอาเรย์ของ IOwner
}
