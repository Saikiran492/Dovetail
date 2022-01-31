import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ReadMeModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        classNames={{ modal: "customModal" }}
        onClose={onCloseModal}
        center
      >
        <div className="me-4">
          <p>
            1. First Name/ Last Name are mandatory/required text fields and
            should be greater than 5 characters.
          </p>
          <p>
            2. Phone number are mandatory/required and should be a numeric
            field.
          </p>
          <p>3. Country is mandatory/required.</p>
        </div>
      </Modal>
      <button className="btn btn-primary" onClick={onOpenModal}>
        Read Me
      </button>
    </div>
  );
};

export default ReadMeModal;
