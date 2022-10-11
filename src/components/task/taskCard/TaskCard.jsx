import { useContext, useState } from "react";
import { Card, Button, DropdownButton, Dropdown, Modal } from "react-bootstrap";
import { TaskContext } from "../../context/TaskContext";
import { NotifContext } from "../../context/NotifContext";
import { cardProgress } from "../../../const/constants";
import styles from "./taskCard.module.css";

export default function TaskCard({ task }) {
  const { deleteTask, changeStatus } = useContext(TaskContext);
  const notify = useContext(NotifContext);
  const [showModal, setShowModal] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [buttonModalActive, setButtonModalActive] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setButtonModalActive(null);
  };
  const handleShowModal = () => setShowModal(true);

  const handleDeleteTask = () => {
    deleteTask(task);
    notify("Task deleted");
  };

  const setActive = (type) => {
    setButtonModalActive(type);
    setNewStatus(type);
  };

  const handleSaveChange = () => {
    changeStatus(task, newStatus);
    notify("Task modified");
    handleCloseModal();
  };

  return (
    <>
      <Card border="light" className={styles.taskCard}>
        <Card.Header>{task.title}</Card.Header>
        <Card.Body>
          <Card.Text>{task.description}</Card.Text>
          <div className={styles.container}>
            <div className={styles.progressContainer}>
              <div
                className={`${styles.progress} ${
                  styles[cardProgress[task.progress].name]
                }`}
              >
                <Card.Text>
                  {cardProgress[task.progress].friendlyName}
                </Card.Text>
              </div>
            </div>
            <DropdownButton
              id="dropdown-basic-button"
              title="Actions"
              size="sm"
              drop="down"
              variant="secondary"
            >
              <Dropdown.Item onClick={handleDeleteTask}>Delete</Dropdown.Item>
              <Dropdown.Item onClick={handleShowModal}>
                Change status
              </Dropdown.Item>
            </DropdownButton>
          </div>

          <Modal show={showModal} onHide={handleCloseModal} centered size="sm">
            <Modal.Header closeButton>
              <Modal.Title>Change task status</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
              {Object.keys(cardProgress).map((type, index) => (
                <button
                  key={index}
                  onClick={() => setActive(type)}
                  className={`${styles.progress} ${styles.modalButton}
                      ${
                        cardProgress[task.progress].name ===
                        cardProgress[type].name
                          ? `${styles.hide}`
                          : undefined
                      }
                      ${
                        type === buttonModalActive
                          ? `${styles.active}`
                          : undefined
                      }
                      `}
                >
                  {cardProgress[type].friendlyName}
                </button>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleSaveChange}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
}
