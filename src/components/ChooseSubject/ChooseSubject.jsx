import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

export const ChooseSubject = () => {
  const { subjects } = useContext(GlobalContext);
  return (
    <div>
      {subjects.map((subject) => {
        return (
          <button className="p-4 mr-8" key={subject.id}>
            {subject.name}
          </button>
        );
      })}
      <button className="absolute top-[80%] right-[75%] p-3 w-[200px]">
        Add Student
      </button>
    </div>
  );
};
