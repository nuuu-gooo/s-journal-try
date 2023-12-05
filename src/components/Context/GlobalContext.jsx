import { createContext, useState, useEffect } from "react";
const weeksInitial = [
  {
    id: "week-id-1",
    name: "პირველი კვირა",
  },
  { id: "week-id-2", name: "მეორე კვირა" },
  {
    id: "week-id-3",
    name: "მესამე კვირა",
  },
];

const names_surnames_table_row = [
  {
    label: "სახელი",
    id: "name-id-1",
  },
  {
    label: "გვარი",
    id: "name-id-2",
  },
];

const subjectsInitial = [
  {
    id: "subject-id-1",
    name: "ინგლისური",
  },
  {
    id: "subject-id-2",
    name: "მათემატიკა",
  },
  {
    id: "subject-id-3",
    name: "გერმანული",
  },
];

const daysInitial = [
  {
    id: "day-1",
    day: "ორშაბათი",
    weekID: "week-id-1",
  },
  {
    id: "day-2",
    day: "სამშაბათი",
    weekID: "week-id-1",
  },
  {
    id: "day-3",
    day: "ოთხშაბათი",
    weekID: "week-id-1",
  },
  {
    id: "day-4",
    day: "ხუთშაბათი",
    weekID: "week-id-1",
  },
  {
    id: "day-5",
    day: "პარასკევი",
    weekID: "week-id-1",
  },
  {
    id: "day-6",
    day: "ორშაბათი",
    weekID: "week-id-2",
  },
  {
    id: "day-7",
    day: "სამშაბათი",
    weekID: "week-id-2",
  },
  {
    id: "day-8",
    day: "ოთხშაბათი",
    weekID: "week-id-2",
  },
  {
    id: "day-9",
    day: "ხუთშაბათი",
    weekID: "week-id-2",
  },
  {
    id: "day-10",
    day: "პარასკევი",
    weekID: "week-id-2",
  },
  {
    id: "day-11",
    day: "ორშაბათი",
    weekID: "week-id-3",
  },
  {
    id: "day-12",
    day: "სამშაბათი",
    weekID: "week-id-3",
  },
  {
    id: "day-13",
    day: "ოთხშაბათი",
    weekID: "week-id-3",
  },
  {
    id: "day-14",
    day: "ხუთშაბათი",
    weekID: "week-id-3",
  },
  {
    id: "day-15",
    day: "პარასკევი",
    weekID: "week-id-3",
  },
];

export const GlobalContext = createContext({
  weeks: [],
  setWeeks: undefined,
  days: [],
  setDays: undefined,
  grades: {},
  setGrades: undefined,
  students: [],
  setStudents: undefined,
});

export const GlobalContextProvider = ({ children }) => {
  const [weeks, setWeeks] = useState(weeksInitial);
  const [days, setDays] = useState(daysInitial);
  const [subjects, setSubjects] = useState(subjectsInitial);
  const [nameSurnameTable, setNameSurnameTable] = useState(
    names_surnames_table_row
  );
  const [grades, setGrades] = useState({});

  const [currentWeek, setCurrentWeek] = useState("week-id-1");
  const [currentSubject, setCurrentSubject] = useState("subject-id-3");
  const [students, setStudents] = useState([]);
  useEffect(() => {
    if (currentWeek) {
      setDays(daysInitial.filter((day) => day.weekID === currentWeek));
    }
  }, [currentWeek]);

  const getGrade = (studentId, subjectId, week, day) => {
    const id = `${studentId}_${subjectId}_${week}_${day}`;
    return grades[id] ?? "";
  };

  const setGrade = (studentId, subjectId, week, day, grade) => {
    const id = `${studentId}_${subjectId}_${week}_${day}`;
    setGrades((prevGrades) => {
      const newGrades = { ...prevGrades, [id]: grade };
      newGrades[id] = grade;

      return newGrades;
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        weeks,
        setWeeks,
        days,
        setDays,
        subjects,
        setSubjects,
        currentWeek,
        setCurrentWeek,
        setCurrentSubject,
        currentSubject,
        nameSurnameTable,
        students,
        setStudents,
        getGrade,
        setGrade,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
