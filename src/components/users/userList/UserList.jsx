import { Col, Row } from "react-bootstrap";
import UserCard from "../userCard/UserCard";
import styles from "./userList.module.css";

export default function UserList({ users }) {
  return (
    <Row className={styles.userListRow}>
      {users.map((user) => (
        <Col sm={6} md={4} lg={3} key={user.login.uuid}>
          <UserCard user={user} />
        </Col>
      ))}
    </Row>
  );
}
