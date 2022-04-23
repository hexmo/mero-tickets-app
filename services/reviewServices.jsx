import axios from "./apiClient";

const review_present = (vehicle_id) =>
  axios.post("/review_present", {
    vehicle_id: vehicle_id,
  });

const post_review = (vehicle_id, rating, review) =>
  axios.post("/reviews", {
    review: {
      vehicle_id: vehicle_id,
      rating: rating,
      review: review,
    },
  });

const allReviews = (vehicle_id) =>
  axios.get(`/reviews`, {
    params: {
      vehicle_id: vehicle_id,
    },
  });

export { review_present, post_review, allReviews };
