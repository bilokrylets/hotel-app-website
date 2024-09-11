import { getCabins } from "../_lib/data-service";
import { Cabin } from "../_types/cabin";
import CabinCard from "./CabinCard";

const CabinList = async () => {
  const cabins: Cabin[] = await getCabins();

  if (!cabins.length) return null;

  return (
    <>
      {cabins.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
};
export default CabinList;
