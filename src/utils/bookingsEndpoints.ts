import { DetailsState } from "../components/BookingForm";
import axiosInstance from "./axiosInstance";

export const getUserBookings = async ( id:string ) => {
  const endPoint = `/bookings/${id}`;
  const bookings = await axiosInstance.get(endPoint);
  return bookings;
}

export const addBooking = async (details: DetailsState) => {
  const { data } = await axiosInstance.post('/bookings', details);

  return data;
}