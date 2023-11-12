import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Modal fullscreen show={true}>
      <Modal.Body className="bgsocial user-select-none d-flex flex-column justify-content-center align-items-center">
        <div className="bg-body-secondary rounded p-3 p-lg-5 mb-3">
          <div className="mb-5">
            <h1 className="text-primary display-1 text-center">
              <i className="bi bi-feather2"></i>
            </h1>
            <h2 className="text-center text-primary">Chirples</h2>
            <h3 className="text-center">Register</h3>
          </div>
          <Form.Control
            type="name"
            placeholder="Create Username"
            className="border-5 border-primary mb-3"
          />
          <Form.Control
            type="password"
            placeholder="Enter New Password"
            className="border-5 border-primary mb-3"
          />
          <Form.Control
            type="password"
            placeholder="Confirm New Password"
            className="border-5 border-primary mb-3"
          />
          <Button variant="primary" className="w-100">
            Register
          </Button>
          <hr />
          <p className="text-center m-0">
            Already in Chirple?{" "}
            <Link to="/" className="fw-bold text-decoration-none">
              Sign In
            </Link>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
