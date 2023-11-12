import React from "react";
import { Button, Card, Form, Image, InputGroup } from "react-bootstrap";
import MessageBubble from "./MessageBubble";

const MessageSpace = ({ closeSpace }) => {
  return (
    <Card className="rounded-0 border-0 h-100">
      <Card.Header className="bg-primary rounded-0">
        <div className="d-flex flex-row gap-3 align-items-center">
          <Image
            src="/social.jpg"
            style={{ width: "3rem", aspectRatio: "1/1" }}
            roundedCircle
          />
          <div className="d-flex flex-column" data-bs-theme="dark">
            <h5 className="m-0 text-white">Name</h5>
            <h6 className="m-0 text-muted">Username</h6>
          </div>
          <Button variant="light" className="ms-auto" onClick={closeSpace}>
            <i className="bi bi-x-lg"></i>
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="overflow-y-scroll">
        <MessageBubble
          sender={true}
          time="8:20 AM"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          mID="m1"
        />
        <MessageBubble
          sender={false}
          time="8:26 AM"
          mID="m2"
          content="Laborum soluta voluptatibus ducimus et, ipsa aliquam explicabo saepe
        veniam suscipit voluptates accusamus maiores est dolore consequatur
        quaerat maxime enim aperiam possimus?"
        />
      </Card.Body>
      <Card.Footer className="rounded-0">
        <InputGroup>
          <Form.Control
            type="text"
            className="border-5 border-end-0 border-primary"
            placeholder="Enter message here"
          />
          <Button variant="primary">
            <i className="bi bi-send-fill"></i>
          </Button>
        </InputGroup>
      </Card.Footer>
    </Card>
  );
};

export { MessageSpace };
