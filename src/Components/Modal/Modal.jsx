import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Popup</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus obcaecati numquam exercitationem sunt qui debitis
              quasi! Dolores consequatur corporis, excepturi dolor nemo amet
              deserunt? Natus provident dignissimos voluptates praesentium
              distinctio nobis eligendi maxime error in. Placeat molestias
              temporibus quidem nemo laboriosam, mollitia blanditiis fuga,
              dolorem eaque, labore aspernatur neque illum.
            </p>
            <button onClick={toggleModal} className="close-modal">
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
