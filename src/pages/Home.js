import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import ChatSession from "../components/ChatSession";

const Home = (session) => {
  return (
    <>
      <Row className="w-100 gap-0 p-0 m-0">
        <Col lg="3" xs="12" className="p-0 overflow-y-scroll vh-100">
          <div className="bg-body-tertiary sticky-top p-3 p-lg-5">
            <h3 className="my-3 my-lg-2">Chats</h3>
            <Form.Control
              type="text"
              placeholder="Search messages or user"
              className="border-primary border-4"
            />
          </div>
          <div className="d-flex flex-column">
            <ChatSession />
            <ChatSession />
            <ChatSession />
            <ChatSession />
            <ChatSession />
            <ChatSession />
            <ChatSession />
            <ChatSession />
            <ChatSession />
          </div>
        </Col>
        <Col className="d-none d-lg-flex flex-column align-items-center justify-content-center ">
          <h1 className="display-1 text-muted">
            <i className="bi bi-feather2"></i>
          </h1>
          <h2 className="text-muted">Chirples</h2>
          <h5 className="text-muted">
            Select a user in the left and start talkin'
          </h5>
        </Col>
      </Row>
    </>
  );
};

export default Home;
