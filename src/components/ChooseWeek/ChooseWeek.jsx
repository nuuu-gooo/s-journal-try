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
            className={`${
              currentWeek === week.id && "bg-[#5847af] text-white "
            }                p-4
              border-solid
              rounded
              border-[#5847af]

              `}
            key={week.id}
          >
            {week.name}
          </button>
        );
      })}
      {console.log(currentWeek)}
    </div>
  );
};
