import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Card, Button } from "react-bootstrap";
import { cardProgress } from "../const/cardProgress";
import styles from "./taskCard.module.css";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(task);
  };

  return (
    <>
      <Card border="light" className={styles.taskCard}>
        <Card.Header>{task.title}</Card.Header>
        <Card.Body>
          <Card.Text>{task.description}</Card.Text>
          <div className={styles.progressContainer}>
            <div
              className={`${styles.progress} ${
                styles[cardProgress[task.progress].name]
              }`}
            >
              <Card.Text>{cardProgress[task.progress].friendlyName}</Card.Text>
            </div>
          </div>
          <div>
            <Button
              variant="danger"
              className={styles.deleteButton}
              onClick={handleDelete}
            >
              Delete
            </Button>{" "}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
