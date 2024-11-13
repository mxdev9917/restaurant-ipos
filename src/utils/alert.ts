import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
export const alertSuccess = (navigate: ReturnType<typeof useNavigate>, title: string) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: title,
        showConfirmButton: false,
        timer: 2000,
        customClass: {
            confirmButton: 'my-custom-confirm-btn',
            denyButton: 'my-custom-deny-btn',
            closeButton: 'my-custom-close-btn',
            title: 'my-custom-title',
            popup: 'my-popup-width',
            icon: 'swal2-icon2'  // Custom class for icon
        }
    }).then(() => {
        navigate('/admin/tamplace');
    });
};


export const alertSuccessV2 = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2000,
        customClass: {
            confirmButton: 'my-custom-confirm-btn',
            denyButton: 'my-custom-deny-btn',
            closeButton: 'my-custom-close-btn',
            title: 'my-custom-title',
            popup: 'my-popup-width2',
            icon:'swal2-icon2'
        }
    });
};

export const alertError = () => {
    Swal.fire({
        icon: 'error',
        title: "Custom animation with Animate.css",
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
            confirmButton: 'my-custom-confirm-btn',
            denyButton: 'my-custom-deny-btn',
            closeButton: 'my-custom-close-btn',
            title: 'my-custom-title',
            popup: 'my-popup-width',
            icon:'swal-icon'
        }
    });
};

export const alertDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: 'my-custom-confirm-btn',
            denyButton: 'my-custom-deny-btn',
            closeButton: 'my-custom-close-btn',
            cancelButton:'my-custom-close-btn',
            title: 'my-custom-title',
            popup: 'my-popup-width',
            icon:'swal-icon' 
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                confirmButton: 'my-custom-confirm-btn',
                denyButton: 'my-custom-deny-btn',
                closeButton: 'my-custom-close-btn',
                title: 'my-custom-title',
                popup: 'my-popup-width2',
                icon:'swal2-icon2'
            }
        });
      }
    });
  };
  

