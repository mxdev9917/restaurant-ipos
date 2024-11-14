import Swal from 'sweetalert2'
import  { SweetAlertIcon } from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export const alertSuccess = (navigate: ReturnType<typeof useNavigate>, title: string, icon: SweetAlertIcon) => {
    Swal.fire({
        position: 'center',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2000,
        customClass: {
            confirmButton: 'custom-confirm-btn',
            denyButton: 'custom-deny-btn',
            closeButton: 'custom-close-btn',
            title: 'custom-title',
            popup: 'popup-width',
            icon: 'swal2-icon2'  // Custom class for icon
        }
    }).then(() => {
        navigate('/admin/tamplace');
    });
};


export const alertSuccessV2 = (title: string, icon: SweetAlertIcon) => {
    Swal.fire({
        position: "center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            confirmButton: 'custom-confirm-btn',
            denyButton: 'custom-deny-btn',
            closeButton: 'custom-close-btn',
            title: 'custom-title',
            popup: 'popup-width2',
            icon: 'swal2-icon2'
        }
    });
};

export const alertError = (title: string, icon: SweetAlertIcon) => {
    Swal.fire({
        title: title,
        icon: icon,
        confirmButtonText: "ຕົກລົງ",
        customClass: {
            confirmButton: 'custom-confirm-btn',
            denyButton: 'custom-deny-btn',
            closeButton: 'custom-close-btn',
            title: 'custom-title',
            popup: 'popup-width',
            icon:'swal-icon'
        }
    });
};

export const alertErrorV2 = (title: string, icon: SweetAlertIcon) => {
    Swal.fire({
        icon: icon,
        title: title,
        showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        },
        customClass: {
            confirmButton: 'custom-confirm-btn',
            denyButton: 'custom-deny-btn',
            closeButton: 'custom-close-btn',
            title: 'custom-title',
            popup: 'popup-width',
            icon:'swal-icon'
        }
    });
};

export const alertDelete = (func: () => void, title: string, icon: SweetAlertIcon) => {
    Swal.fire({
        title: title,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: "#057a55",
        cancelButtonColor: "#d33",
        confirmButtonText: "ຕົກລົງ",
        cancelButtonText: "ຍົກເລີກ",
        customClass: {
            confirmButton: 'custom-yesButton',
            cancelButton: 'custom-cancelButton',
            title: 'custom-title',
            popup: 'popup-width',
            icon: 'swal-icon'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            if (func) func(); // Call func if it is defined  
        }
    });
};


  

