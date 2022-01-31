import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
export function ReadMeModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ReadMe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            1. First Name/ Last Name are mandatory/required text fields and
            should be greater than 5 characters.
          </p>
          <p>
            2. Phone number are mandatory/required and should be a numeric
            field.
          </p>
          <p>3. Country is mandatory/required.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
