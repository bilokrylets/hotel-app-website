import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { Cabin } from "../_types/cabin";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

type Props = {
  cabin: Cabin;
};
async function Reservation({ cabin }: Props) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid min-h-[400px] grid-cols-2 border border-primary-800">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
export default Reservation;
