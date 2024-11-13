import axios from "axios";
import { IPOS_BASE_URL } from "../../utils/connection";
import { IAuthentication } from "../interfaces/authen_interface";

interface IPostAuthentication {
    status: number | undefined;
    data: IAuthentication;
}

export const authenticationService = {
    postAuthentication: async (email: string, pass: string): Promise<IPostAuthentication> => {
        const response = await axios.post(`${IPOS_BASE_URL}/user-admin/signin`, {
            user_admin_email: email,
            user_admin_password: pass,
        });
        return response;

    }
};
