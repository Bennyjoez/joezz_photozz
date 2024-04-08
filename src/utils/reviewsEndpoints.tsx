import axiosInstance from "./axiosInstance";

export interface detailsProps {
  rating: string,
  message: string,
}

export const getReviews = async () => {
  try {
    const endPoint = `/reviews`;
    const reviews = await axiosInstance.get(endPoint);
    return reviews;
  } catch (err) {
    console.log(err)
  }
};

export const addReview = async (details: detailsProps) => {
  try {
    const endPoint = `/reviews`;
    await axiosInstance.post(endPoint, details);
  } catch (err) {
    console.log(err);
  }
};