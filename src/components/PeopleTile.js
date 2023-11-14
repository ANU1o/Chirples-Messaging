import React, { useEffect, useState } from "react";
import { Button, Col, Image } from "react-bootstrap";
import { getFriend, addFriend } from "../service/APIs/allAPIs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PeopleTile = ({ nameVal, userNameVal, ppic, sessionRef }) => {
  const [user, setuser] = useState([]);

  const fetchUser = async () => {
    const result = await getFriend(sessionRef);
    setuser(result.data);
    console.log(sessionRef);
    console.log(user);
  };

  const AddBuddy = async (id) => {
    const result = await addFriend(sessionRef, id);
    if (result.status >= 200 && result.status < 300) {
      toast.success(`${userNameVal} Added`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Col lg={4} md={6} xs={12}>
      <div className="d-flex gap-3 mb-4 align-items-center bg-body p-3">
        <Image
          src={ppic}
          style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
          roundedCircle
        />
        <div>
          <h4 className="text-primary">{nameVal}</h4>
          <h6>{userNameVal}</h6>
        </div>
        <div className="d-flex ms-auto align-items-center">
          {/* {user.friends.find((i) => i.id === userNameVal) ? ( */}
          <Button variant="primary" onClick={() => AddBuddy(userNameVal)}>
            <i className="bi bi-person-plus-fill"></i>
          </Button>
          {/* ) : ( */}
          <Button variant="primary" onClick={() => AddBuddy(userNameVal)}>
            <i className="bi bi-person-check-fill"></i>
          </Button>
          {/* )} */}
        </div>
      </div>
      <ToastContainer />
    </Col>
  );
};

export default PeopleTile;
