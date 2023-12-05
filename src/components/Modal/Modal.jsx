import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { v4 as uuidv4 } from "uuid";
export const Modal = ({ visibility, closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { setStudents } = useContext(GlobalContext);
  if (!visibility) {
    return null;
  }

  const CreateNewStudent = () => {
    const newStudent = {
      name: firstName,
      lastName: lastName,
      studentID: uuidv4(),
    };
    setStudents((prev) => [...prev, newStudent]);
    setFirstName("");
    setLastName("");
    closeModal();
  };
  return (
    <div>
      <div className="overlay">
        <div className="modal-wrapper">
          <div className="modal-container bg-white border-none flex-col p-10 w-[250px] flex justify-center items-center  border-black">
            <h3>Add Student</h3>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              type="text"
              className="w-full p-1"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Name"
              type="text"
              className="w-full p-1 mt-3"
            />{" "}
            <button
              onClick={closeModal}
              className="absolute top-3 right-7 p-2 w-[40px] cursor-pointer hover:opacity-40"
            >
              X
            </button>
            <button
              onClick={() => CreateNewStudent()}
              className="w-full p-2 mt-3 cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
