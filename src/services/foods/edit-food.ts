import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IFoodService {
    status: string;
    message: string;
    data?: any;
}

export class EditFoodService {
    static EditProduct() {
        throw new Error("Method not implemented.");
    }
    static async Editfood(
        food_ID: string,
        category_ID: string,
        restaurant_ID: string,
        food_name: string,
        price: string,
        gallery_path: string,
        food_img?: File
    ): Promise<IFoodService> {
        try {
            const formData = new FormData();
            formData.append("food_ID", food_ID.toString());
            formData.append("category_ID", category_ID.toString());
            formData.append("restaurant_ID", restaurant_ID.toString());
            formData.append("food_name", food_name);
            formData.append("price", price.toString());
            if(gallery_path!=""){
                formData.append("gallery_path", gallery_path);
            }
            if (food_img) {
                formData.append("food_img", food_img);
            }

            const res = await axios.patch(`${IPOS_BASE_URL}/food`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while editting the food",
            };
        }
    }
}
