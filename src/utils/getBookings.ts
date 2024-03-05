import axiosInstance from "./axiosInstance";

export const getUserBookings = async ( id:string ) => {
  const bookings = await axiosInstance.get('/bookings', {
    params: {
      id
    }
  });
  return bookings;
}