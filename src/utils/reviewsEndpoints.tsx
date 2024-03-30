import axiosInstance from "./axiosInstance";

export const getReviews = async () => {
  try {
    const endPoint = `/reviews`;
    const reviews = await axiosInstance.get(endPoint);
    return reviews;
  } catch (err) {
    console.log(err)
  }
};