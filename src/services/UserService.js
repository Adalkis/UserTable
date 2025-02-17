import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
