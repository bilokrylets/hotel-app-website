import { getCabins } from "../_lib/data-service";
import { Cabin } from "../_types/cabin";
import CabinCard from "./CabinCard";

type Props = {
  filter: "small" | "medium" | "large" | "all";
};

const CabinList = async ({ filter }: Props) => {
  const cabins: Cabin[] = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;

  switch (filter) {
    case "all":
      displayedCabins = cabins;
      break;

    case "small":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
      break;

    case "medium":
      displayedCabins = cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
      );
      break;

    case "large":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
      break;
  }

  return (
    <>
      {cabins.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
};
export default CabinList;
