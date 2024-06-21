import cancelIcon from "../static/icon/icons8-cancel-black.png";

const Modal = ({ content, heading, displayModal, setDisplayModal }) => {

  return (
    <div
      className={`${
        displayModal ? "flex" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 bg-[rgba(26,44,82,0.4)] z-50`}
      onClick={() => setDisplayModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[90%] max-w-[37rem] rounded-xl m-auto max-h-[90vh] overflow-auto p-4"
      >
        <div className={`flex gap-3 items-center ${heading? "justify-between" : "justify-end"}`}>
            {heading && <h1 className="text-2xl font-bold">{heading}</h1>}
          <img
            src={cancelIcon}
            alt="cancel"
            className="w-5 h-auto"
            onClick={() => setDisplayModal(false)}
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
