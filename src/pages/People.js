import React from "react";
import { Form, Row } from "react-bootstrap";
import PeopleTile from "../components/PeopleTile";

const People = () => {
  return (
    <div className="w-100 m-0 overflow-y-scroll">
      <div className="bg-body-tertiary sticky-top p-3 p-lg-5">
        <h3 className="my-3 my-lg-2">People</h3>
        <Form.Control
          type="text"
          placeholder="Search for people"
          className="border-primary border-4"
        />
      </div>
      <Row className="m-3 m-lg-5">
        <PeopleTile />
        <PeopleTile />
        <PeopleTile />
        <PeopleTile />
        <PeopleTile />
        <PeopleTile />
      </Row>
    </div>
  );
};

export default People;
