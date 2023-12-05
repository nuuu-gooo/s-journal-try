import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

export const Table = () => {
  const {
    weeks,
    days,
    currentSubject,
    currentWeek,
    students,
    getGrade,
    setGrade,
  } = useContext(GlobalContext);
  return (
    <table className="mt-[1rem]">
      <tbody>
        <tr>
          <th>სახელი</th>
          <th>გვარი</th>
          {days.map((day) => {
            return <th key={day.id}>{day.day}</th>;
          })}
        </tr>
        {students.map((student) => {
          return (
            <tr key={student.studentID}>
              <td>{student.name}</td>
              <td>{student.lastName}</td>
              {days.map((days) => {
                return (
                  <td key={days.id} className="items-center">
                    <input
                      placeholder="Enter Number"
                      value={getGrade(
                        student.studentID,
                        currentSubject,
                        currentWeek,
                        days.id
                      )}
                      onChange={(event) =>
                        setGrade(
                          student.studentID,
                          currentSubject,
                          currentWeek,
                          days.id,
                          event.target.value
                        )
                      }
                      className="border-none outline-none bg-[transparent] text-center"
                      type="number"
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
