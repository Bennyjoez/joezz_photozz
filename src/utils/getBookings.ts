import axiosInstance from "./axiosInstance";

export const getUserBookings = async ( id:string ) => {
  const endPoint = `/bookings/${id}`;
  const bookings = await axiosInstance.get(endPoint);
  return bookings;
}