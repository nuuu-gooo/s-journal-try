import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Modal } from "../Modal/Modal";

export const ChooseSubject = () => {
  const { subjects, setCurrentSubject, currentSubject } =
    useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const ModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      {subjects.map((subject) => {
        return (
          <button
            onClick={() => setCurrentSubject(subject.id)}
            key={subject.id}
            className={`${
              currentSubject === subject.id
                ? "text-white bg-[#5847af] p-3 mr-5 cursor-pointer rounded border-[#5847af]"
                : "bg-white p-3 mr-5 border-solid border-black rounded cursor-pointer"
            } "p-3"`}
          >
            {subject.name}
          </button>
        );
      })}
      <button
        onClick={() => setIsModalVisible(true)}
        className="absolute top-[80%] cursor-pointer right-[70%] bg-[#5847af] text-white border-none rounded p-4 hover:opacity-50 w-[300px]"
      >
        ახალი მოსწავლის დამატება
      </button>
      <Modal visibility={isModalVisible} closeModal={ModalClose} />
    </div>
  );
};
