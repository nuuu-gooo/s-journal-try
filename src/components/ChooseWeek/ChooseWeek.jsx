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
            className="p-4 mr-8"
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
