export const Modal = ({ visibility, closeModal }) => {
  if (!visibility) {
    return null;
  }
  return (
    <div>
      <div className="overlay">
        <div className="modal-wrapper">
          <div className="modal-container flex-col p-10 w-[250px] flex justify-center items-center border-solid border-black">
            <h3>Add Student</h3>
            <input
              placeholder="Enter Name"
              type="text"
              className="w-full p-1"
            />
            <input
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
            <button className="w-full p-2 mt-3">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
