import axios from "axios";

const api = axios.create({
  //baseURL: "http://127.0.0.1:8000/api",
   baseURL: import.meta.env.VITE_API_BASE_URL, // VERCEL FIX: Use environment variable instead of hardcoded localhost URL for production deployment
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitAssessment = async (data) => {
  const response = await api.post("/assessment/", data);

  return response.data;
};

export default api;
