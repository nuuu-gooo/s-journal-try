import { createContext, useState, useEffect } from "react";
import { LANGUAGES } from "./LanguageContext/LanguageContext";
import { FormattedMessage } from "react-intl";

const weeksInitial = [
  {
    id: "week-id-1",
    name: <FormattedMessage id="firstWeek" />,
  },
  { id: "week-id-2", name: <FormattedMessage id="secondWeek" /> },
  { id: "week-id-3", name: <FormattedMessage id="thirdWeek" /> },
];

const subjectsInitial = [
  {
    id: "subject-id-1",
    name: <FormattedMessage id="english" />,
  },
  {
    id: "subject-id-2",
    name: <FormattedMessage id="math" />,
  },
  {
    id: "subject-id-3",
    name: <FormattedMessage id="german" />,
  },
];

const daysInitial = [
  {
    id: "day-1",
    day: <FormattedMessage id="monday" />,
    weekID: "week-id-1",
  },
  {
    id: "day-2",
    day: <FormattedMessage id="tuesday" />,
    weekID: "week-id-1",
  },
  {
    id: "day-3",
    day: <FormattedMessage id="wednesday" />,
    weekID: "week-id-1",
  },
  {
    id: "day-4",
    day: <FormattedMessage id="thursday" />,
    weekID: "week-id-1",
  },
  {
    id: "day-5",
    day: <FormattedMessage id="friday" />,
    weekID: "week-id-1",
  },
  {
    id: "day-6",
    day: <FormattedMessage id="monday" />,
    weekID: "week-id-2",
  },
  {
    id: "day-7",
    day: <FormattedMessage id="tuesday" />,
    weekID: "week-id-2",
  },
  {
    id: "day-8",
    day: <FormattedMessage id="wednesday" />,
    weekID: "week-id-2",
  },
  {
    id: "day-9",
    day: <FormattedMessage id="thursday" />,
    weekID: "week-id-2",
  },
  {
    id: "day-10",
    day: <FormattedMessage id="friday" />,
    weekID: "week-id-2",
  },
  {
    id: "day-11",
    day: <FormattedMessage id="monday" />,
    weekID: "week-id-3",
  },
  {
    id: "day-12",
    day: <FormattedMessage id="tuesday" />,
    weekID: "week-id-3",
  },
  {
    id: "day-13",
    day: <FormattedMessage id="wednesday" />,
    weekID: "week-id-3",
  },
  {
    id: "day-14",
    day: <FormattedMessage id="thursday" />,
    weekID: "week-id-3",
  },
  {
    id: "day-15",
    day: <FormattedMessage id="friday" />,
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

  const [grades, setGrades] = useState({});
  console.log(grades);
  const [currentWeek, setCurrentWeek] = useState("week-id-1");
  const [currentSubject, setCurrentSubject] = useState("subject-id-1");
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
