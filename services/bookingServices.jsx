import axios from "./apiClient";

const bookTicket = (
  seats,
  total_price,
  passenger_name,
  passenger_contact,
  booking_id
) =>
  axios.post("/tickets", {
    seats: seats,
    total_price: total_price,
    passenger_name: passenger_name,
    passenger_contact: passenger_contact,
    booking_id: booking_id,
  });

export { bookTicket };
