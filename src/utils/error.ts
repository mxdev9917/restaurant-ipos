import axios from "axios";
import { alertError ,alertErrorV3} from "./alert";
import { useNavigate } from "react-router-dom";

export const createUserErrors = (errors: any) => {
    if (axios.isAxiosError(errors)) {
        const status = errors.response?.status;
        const navigate = useNavigate();
        if (status === 401) {
            alertErrorV3(navigate, "/", "token ໝົດອາຍຸ", "error");
        }
        if (status === 409) {
            alertError("ຢູເຊີ້ນີ້ມີຄົນໃຊ້ງານແລ້ວ", "error");
        }
        if (status === 500) {
            alertError("ຂໍອະໄພ ລະບົບຫຼັງບ້ານມີບັນຫາ", "error");
        }
    } else {
        alertError("ການເຮັດວຽກຂອງລະບົບຜິດພາດ", "error");
    }

};

export const generalErrors = (errors: any) => {
    if (axios.isAxiosError(errors)) {
        const status = errors.response?.status;
        const navigate = useNavigate();
        if (status === 400) {
            alertError("ໄອດີຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ", "error");
        }
        if (status === 401) {
            alertErrorV3(navigate, "/", "token ໝົດອາຍຸ", "error");
        }
        if (status === 500) {
            alertError("ຂໍອະໄພ ລະບົບຫຼັງບ້ານມີບັນຫາ", "error");
        }
    } else {
        alertError("ການເຮັດວຽກຂອງລະບົບຜິດພາດ", "error");
    }

};

export const createCategoryErrors = (errors: any) => {
    if (axios.isAxiosError(errors)) {
        const status = errors.response?.status;
        const navigate = useNavigate();
        if (status === 401) {
            alertErrorV3(navigate, "/", "token ໝົດອາຍຸ", "error");
        }
        if (status === 409) {
            alertError("ປະເພດເມນູນີ້ມີແລ້ວ", "error");
        }
        if (status === 500) {
            alertError("ຂໍອະໄພ ລະບົບຫຼັງບ້ານມີບັນຫາ", "error");
        }
    } else {
        alertError("ການເຮັດວຽກຂອງລະບົບຜິດພາດ", "error");
    }

};

export const createTableErrors = (errors: any) => {
    if (axios.isAxiosError(errors)) {
        const status = errors.response?.status;
        const navigate = useNavigate();
        if (status === 401) {
            alertErrorV3(navigate, "/", "token ໝົດອາຍຸ", "error");
        }
        if (status === 409) {
            alertError("ໂຕະນີ້ມີແລ້ວ", "error");
        }
        if (status === 500) {
            alertError("ຂໍອະໄພ ລະບົບຫຼັງບ້ານມີບັນຫາ", "error");
        }
    } else {
        alertError("ການເຮັດວຽກຂອງລະບົບຜິດພາດ", "error");
    }

};
export const createIncTableErrors = (errors: any) => {
    if (axios.isAxiosError(errors)) {
        const status = errors.response?.status;

        const navigate = useNavigate();
        if (status === 401) {
            alertErrorV3(navigate, "/", "token ໝົດອາຍຸ", "error");
        }
        if (status === 409) {
            alertError("ມີຂໍ້ມູນບາງສ່ວນຂາດຫາຍ", "error");
        }
        if (status === 500) {
            alertError("ຂໍອະໄພ ລະບົບຫຼັງບ້ານມີບັນຫາ", "error");
        }
    } else {
        alertError("ການເຮັດວຽກຂອງລະບົບຜິດພາດ", "error");
    }

};

export const authenError=(errors: any)=>{
    if (axios.isAxiosError(errors)) {
        const status = errors.response?.status;
        if (status === 401) {
            alertError("ລະຫັດຜ່ານບໍ່ຖືກ", "error");
        }
        if (status === 404) {
            alertError("ຢູ່ເຊີ້ນີ້ບໍ່ມີໃນລະບົບ", "error");
        }
        if (status === 403) {
            alertError("ຢູ່ເຊີ້ນີ້ຖືກລ໋ອກ", "error");
        }

    } else {
        alertError("ການເຮັດວຽກຂອງລະບົບຜິດພາດ", "error");
    }
}






