import React from "react";
import Modal from "react-modal";

const OptionModal = props => {
  const selectedOption = props.selectedOption;
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="Selected Option"
      onRequestClose={props.handleCloseModal}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option: </h3>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="button" onClick={props.handleClearSelectedOption}>
        Okay
      </button>
    </Modal>
  );
};

export default OptionModal;
