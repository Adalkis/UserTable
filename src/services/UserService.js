import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});
export default {
  async getUsers() {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (err) {
      console.error("API Error:", err);
      throw err;
    }
  },
};
