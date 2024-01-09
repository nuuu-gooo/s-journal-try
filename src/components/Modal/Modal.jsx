import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage, useIntl } from "react-intl";
export const Modal = ({ visibility, closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const intl = useIntl();

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
          <div className="modal-container bg-white border-none flex-col p-10 w-[400px] h-[250px] flex justify-center items-center  border-black">
            <p>
              <FormattedMessage id="add.new.student" />
            </p>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={intl.formatMessage({ id: "firstName" })}
              type="text"
              className="w-full p-3 outline-none"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              placeholder={intl.formatMessage({ id: "lastName" })}
              type="text"
              className="w-full p-3 mt-3 outline-none"
            />{" "}
            <button
              onClick={closeModal}
              className="absolute bg-[red] text-white border-none top-3 right-7 p-2 w-[40px] cursor-pointer hover:opacity-40"
            >
              X
            </button>
            <button
              onClick={() => CreateNewStudent()}
              className="w-full p-3 mt-7 cursor-pointer bg-[#5847af] text-white border-none rounded hover:opacity-50"
            >
              <FormattedMessage id="add" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
