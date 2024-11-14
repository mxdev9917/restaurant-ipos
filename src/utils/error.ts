import axios from "axios";
import { alertError } from "./alert";

export const authenErrors=(errors:any)=>{
    if(axios.isAxiosError(errors)){
        const status=errors.response?.status;
        if(status===401){
            alertError("ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ","error");
        }
        if(status===403){
            alertError("ອີເມລນີ້ ຖືກປິດການໃຊ້","error");
        }
        if(status===423){
            alertError("ອີເມລນີ້ ຖືກລ໋ອກ","error");
        }
        if(status===404){
            alertError("ບໍ່ພົບອີເມລ ໃນລະບົບ","error");
        }
        if(status===500){
            alertError("ຂໍອະໄພ ລະບົບຫຼັງບ້ານມີບັນຫາ","error");
        }
    }else{
        alertError("ການເຮັດວຽກຂອງລະບົບຜິດພາດ","error");
    }

};

export const customerErrors=(errors:any)=>{
    if(axios.isAxiosError(errors)){
        const status=errors.response?.status;
        if(status===500){
            alertError("ຂໍອະໄພ ລະບົບຫຼັງບ້ານມີບັນຫາ","error");
        }
    }else{
        alertError("ການເຮັດວຽກຂອງລະບົບຜິດພາດ","error");
    }

};
