// Modal.js
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);
  const el = useRef(document.createElement("div"));

  // Opening & removing modal from DOM
  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(el.current);

    return () => {
      modalRoot.removeChild(el.current);
    };
  }, []);

  // Closing modal on esc key
  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (modalRoot.hasChildNodes()) {
        modalRoot.removeChild(el.current);
      }
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {modalOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-md mx-auto my-6">
              {/* Modal content */}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/* Header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-500 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-black">&times;</span>
                  </button>
                </div>
                {/* Body */}
                <div className="relative p-6 flex-auto">{children}</div>
              </div>
            </div>
          </div>,
          el.current
        )}
      {modalOpen && <div className="fixed inset-0 bg-black opacity-25"></div>}
    </>
  );
};

export default Modal;
