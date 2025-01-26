import Swal from "sweetalert2";

const useSweetAlert = async (customParams) => {
  return Swal.fire({
    showConfirmButton: false,
    showCancelButton: false,
    timer: 2700,
    ...customParams,
  });
};

export default useSweetAlert;
