import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

export const ChooseWeek = () => {
  const { weeks } = useContext(GlobalContext);
  return (
    <div>
      {weeks?.map((week) => {
        return (
          <button className="p-4 mr-8" key={week.id}>
            {week.name}
          </button>
        );
      })}
    </div>
  );
};
