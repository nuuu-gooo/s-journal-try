import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

export const Table = () => {
  const { days, students } = useContext(GlobalContext);
  return (
    <table>
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
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.lastName}</td>
              {days.map(() => {
                return (
                  <td className="items-center">
                    <input
                      className="border-none outline-none bg-[transparent] text-center"
                      type="text"
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
