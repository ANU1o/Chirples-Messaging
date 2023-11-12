import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Modal fullscreen show={true}>
      <Modal.Body className="bgsocial user-select-none d-flex flex-column justify-content-center align-items-center">
        <div className="bg-body-secondary rounded p-3 p-lg-5 mb-3">
          <div className="mb-5">
            <h1 className="text-primary display-1 text-center">
              <i className="bi bi-feather2"></i>
            </h1>
            <h2 className="text-center text-primary">Chirples</h2>
            <h3 className="text-center">Login</h3>
          </div>
          <Form.Control
            type="name"
            placeholder="Username"
            className="border-5 border-primary mb-3"
          />
          <Form.Control
            type="password"
            placeholder="Password"
            className="border-5 border-primary mb-3"
          />
          <Button variant="primary" className="w-100">
            Login
          </Button>
          <hr />
          <p className="text-center m-0">
            New to Chirple?{" "}
            <Link to="/Register" className="fw-bold text-decoration-none">
              Join Now
            </Link>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
