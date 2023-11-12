import { useState } from "react";
import { Image, Offcanvas } from "react-bootstrap";
import { MessageSpace } from "./MessageSpace";

const ChatSession = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(true);
  return (
    <>
      <div
        onClick={toggleShow}
        className="d-flex flex-row gap-3 border-bottom border-3 border-primary-subtle p-3 bg-card-body"
      >
        <Image
          src="/social.jpg"
          style={{ width: "5rem", height: "5rem" }}
          roundedCircle
        />
        <div className="d-flex flex-column">
          <h6 className="text-primary">Username</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
        </div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={false}
        placement="end"
        className="w-MS user-select-none"
      >
        <Offcanvas.Body className="p-0">
          <MessageSpace closeSpace={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ChatSession;
