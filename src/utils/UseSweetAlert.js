import Swal from "sweetalert2";

const UseSweetAlert = async (customParams) => {
  return Swal.fire({
    showConfirmButton: false,
    showCancelButton: false,
    timer: 2700,
    ...customParams,
  });
};

export default UseSweetAlert;
