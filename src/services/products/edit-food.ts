import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";

interface IProductService {
    status: string;
    message: string;
    data?: any;
}

export class EditProductService {
    static async EditProduct(
        product_ID: string,
        category_ID: string,
        restaurant_ID: string,
        product_name: string,
        price: string,
        product_img?: File
    ): Promise<IProductService> {
        try {
            const formData = new FormData();
            formData.append("product_ID", product_ID.toString());
            formData.append("category_ID", category_ID.toString());
            formData.append("restaurant_ID", restaurant_ID.toString());
            formData.append("product_name", product_name);
            formData.append("price", price.toString());

            if (product_img) {
                formData.append("product_img", product_img);
            }

            const res = await axios.patch(`${IPOS_BASE_URL}/product`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return res.data;
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || "An error occurred while creating the product",
            };
        }
    }
}
