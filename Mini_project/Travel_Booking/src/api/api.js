import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000"
});
export const postBooking = (data) => api.post("/bookings", data);
export const getBookings = () => api.get("/bookings");
export const getPackages = () => api.get("/packages");
export const getFeaturedDestinations = () => api.get("/featuredDestinations");

export default api;