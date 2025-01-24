import axios from "axios";
export default {
  getUser() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  },
};
