import { useRef, useContext, useState } from "react";
import uuid from "react-uuid";
import { Button, Form } from "react-bootstrap";
import { TaskContext } from "../../context/TaskContext";
import { NotifContext } from "../../context/NotifContext";
import styles from "./taskForm.module.css";

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const notify = useContext(NotifContext);
  const form = useRef(null);
  const title = useRef(null);
  const description = useRef(null);
  const [progress, setProgress] = useState("default");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: uuid(),
      title: title.current.value,
      description: description.current.value,
      progress,
    });
    notify("Task added");
    form.current.reset();
    setProgress("default");
  };

  return (
    <form onSubmit={handleSubmit} ref={form} className={styles.form}>
      <h2 className={styles.h2}>Add Task</h2>
      <div className={styles.formItem}>
        <Form.Control
          type="text"
          placeholder="Enter title"
          required
          ref={title}
        />
      </div>
      <div className={styles.formItem}>
        <Form.Control
          as="textarea"
          ref={description}
          required
          placeholder="Enter description"
        />
      </div>
      <div className={styles.formItem}>
        <Form.Select
          onChange={(e) => {
            setProgress(e.target.value);
          }}
          defaultValue={progress}
        >
          <option value="default" disabled>
            Select progress
          </option>
          <option value="toDo">To do</option>
          <option value="inProgress">In progress</option>
          <option value="done">Done</option>
        </Form.Select>
      </div>
      <div className={styles.formItem}>
        <Button
          disabled={progress === "default"}
          className={styles.button}
          variant="secondary"
          type="submit"
        >
          Add
        </Button>
      </div>
    </form>
  );
}
