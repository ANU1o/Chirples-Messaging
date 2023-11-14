import React, { useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import PeopleTile from "../components/PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../service/redux/userSlice";

const People = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userSlice);
  const { loading, allUser, error } = userData;

  useEffect(
    () => {
      dispatch(fetchUser());
    },
    // eslint-disable-next-line
    []
  );
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
        {loading && <div>{loading}</div>}
        {error && <div>{error}</div>}
        {allUser?.length > 0 &&
          allUser?.map((user) => (
            <PeopleTile nameVal={user.name} userNameVal={user.id} />
          ))}
      </Row>
    </div>
  );
};

export default People;
