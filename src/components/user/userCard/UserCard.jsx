import { Card } from "react-bootstrap";
import styles from "./userCard.module.css";

export default function UserCard({ user }) {
  return (
    <Card className={styles.userCard}>
      <div className={styles.imageContainer}>
        <Card.Img
          variant="top"
          src={user.picture.medium}
          className={styles.image}
        />
      </div>
      <Card.Body>
        <Card.Title>
          {user.name.first} {user.name.last}
        </Card.Title>
        <Card.Text>{user.registered.age} years</Card.Text>
      </Card.Body>
    </Card>
  );
}
