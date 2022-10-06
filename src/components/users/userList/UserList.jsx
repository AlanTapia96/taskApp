import React from "react";
import { Col, Row } from "react-bootstrap";
import UserCard from "../userCard/UserCard";

export default function UserList({ users }) {
  return (
    <Row>
      {users.map((user) => (
        <Col xs={6} md={3} key={user.login.uuid}>
          <UserCard user={user} />
        </Col>
      ))}
    </Row>
  );
}
