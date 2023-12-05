import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Modal } from "../Modal/Modal";

export const ChooseSubject = () => {
  const { subjects } = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const ModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      {subjects.map((subject) => {
        return (
          <button className="p-4 mr-8" key={subject.id}>
            {subject.name}
          </button>
        );
      })}
      <button
        onClick={() => setIsModalVisible(true)}
        className="absolute top-[80%] cursor-pointer right-[75%] p-3 w-[200px]"
      >
        Add Student
      </button>
      <Modal visibility={isModalVisible} closeModal={ModalClose} />
    </div>
  );
};
