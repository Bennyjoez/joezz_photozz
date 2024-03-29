import { DetailsState } from "../components/bookings/BookingPopup";
import axiosInstance from "./axiosInstance";

export const getUserBookings = async ( id:string ) => {
  const endPoint = `/bookings/${id}`;
  const bookings = await axiosInstance.get(endPoint);
  return bookings;
}

export const addBooking = async (details: DetailsState) => {
  await axiosInstance.post('/bookings', details);
}

export const deleteBooking = async (id: string) => {
  const endPoint = `/bookings/${id}`;
  await axiosInstance.delete(endPoint);
}