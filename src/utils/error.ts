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

export const createCategoryErrors = (errors: any) => {
    if (axios.isAxiosError(errors)) {
        const status = errors.response?.status;
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






