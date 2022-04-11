import axios from "./apiClient";

const getVehicles = (start_location, end_location, journey_date) =>
  axios.get("/bookings", {
    params: {
      start_location: start_location,
      end_location: end_location,
      journery_date: journey_date,
    },
  });

export { getVehicles };
