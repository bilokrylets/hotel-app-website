"use client";

import { useOptimistic } from "react";
import { Booking } from "../_types/booking";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

type Props = {
  bookings: Booking[];
};

function ReservationList({ bookings }: Props) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currentBookings, bookingId) => {
      return currentBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
export default ReservationList;
