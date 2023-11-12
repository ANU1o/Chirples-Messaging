import React from "react";
import { Button, Col, Image } from "react-bootstrap";

const PeopleTile = ({ userData }) => {
  return (
    <Col lg={4} md={6} xs={12}>
      <div className="d-flex gap-3 mb-4 align-items-center bg-body p-3">
        <Image
          src="/social.jpg"
          style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
          roundedCircle
        />
        <div>
          <h4 className="text-primary">Name</h4>
          <h6>UserName</h6>
        </div>
        <div className="d-flex ms-auto align-items-center">
          <Button variant="primary">
            <i className="bi bi-person-plus-fill"></i>
            {/* bi bi-person-check-fill */}
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default PeopleTile;
