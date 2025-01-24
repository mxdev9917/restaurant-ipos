import axios from "axios";
import { alertError } from "./alert";

export const createUserErrors = (errors: any) => {
    if (axios.isAxiosError(errors)) {
        const status = errors.response?.status;
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
        if (status === 500) {
            alertError("ຂໍອະໄພ ລະບົບຫຼັງບ້ານມີບັນຫາ", "error");
        }
    } else {
        alertError("ການເຮັດວຽກຂອງລະບົບຜິດພາດ", "error");
    }

};






