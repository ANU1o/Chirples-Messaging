import { useEffect } from "react";
import { Button, Card, Form, Image, InputGroup } from "react-bootstrap";
import MessageBubble from "./MessageBubble";
import { useDispatch, useSelector } from "react-redux";
import fetchMessages from "../redux/userSlice";

const MessageSpace = ({ closeSpace, uname, name, img, session }) => {
  const messageData = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const { allMessages, loading, error } = messageData;

  useEffect(
    () => {
      dispatch(fetchMessages());
    },
    // eslint-disable-next-line
    []
  );

  return (
    <Card className="rounded-0 border-0 h-100">
      <Card.Header className="bg-primary rounded-0">
        <div className="d-flex flex-row gap-3 align-items-center">
          <Image
            src={img}
            style={{ width: "3rem", aspectRatio: "1/1", objectFit: "cover" }}
            roundedCircle
          />
          <div className="d-flex flex-column" data-bs-theme="dark">
            <h5 className="m-0 text-white">{name}</h5>
            <h6 className="m-0 text-muted">{uname}</h6>
          </div>
          <Button variant="light" className="ms-auto" onClick={closeSpace}>
            <i className="bi bi-x-lg"></i>
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="overflow-y-scroll">
        {loading && <div>{loading}</div>}
        {error && <div>{error}</div>}
        {allMessages?.length > 0 &&
          allMessages
            ?.filter((m) => m.reciverName === uname)
            .filter((m) => m.senderName === session)
            .map((message) => (
              <MessageBubble
                sender={session ? true : false}
                content={message.content}
                mID="m1"
              />
            ))}
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
