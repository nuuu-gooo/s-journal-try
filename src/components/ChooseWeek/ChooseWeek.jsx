import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

export const ChooseWeek = () => {
  const { weeks, setCurrentWeek, currentWeek } = useContext(GlobalContext);
  return (
    <div>
      {weeks?.map((week) => {
        return (
          <button
            onClick={() => setCurrentWeek(week.id)}
            className={` ${
              currentWeek === week.id
                ? "bg-[#5847af] p-3 text-white mr-7 cursor-pointe border-solid cursor-pointer rounded border-[#5847af]"
                : " bg-white p-3 text-black mr-7 cursor-pointer border-solid border-black rounded"
            }  `}
            key={week.id}
          >
            {week.name}
          </button>
        );
      })}
    </div>
  );
};
