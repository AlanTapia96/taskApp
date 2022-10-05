import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../taskCard/TaskCard";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import styles from "./taskList.module.css";

export default function TaskList() {
  const { totalTasks, toDoTasks, inProgressTasks, doneTasks } =
    useContext(TaskContext);

  return (
    <Container className={styles.listContainer}>
      {totalTasks.length === 0 ? (
        <h2 className={styles.noTaskCreated}>No hay tareas creadas</h2>
      ) : (
        <Tabs
          defaultActiveKey="toDo"
          // id="uncontrolled-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="toDo" title="To do" className={styles.tab}>
            <div className={styles.list}>
              {toDoTasks.map((t) => (
                <TaskCard task={t} key={t.id} />
              ))}
            </div>
          </Tab>
          <Tab eventKey="inProgress" title="In progress" className={styles.tab}>
            <div className={styles.list}>
              {inProgressTasks.map((t) => (
                <TaskCard task={t} key={t.id} />
              ))}
            </div>
          </Tab>
          <Tab eventKey="done" title="Done" className={styles.tab}>
            <div className={styles.list}>
              {doneTasks.map((t) => (
                <TaskCard task={t} key={t.id} />
              ))}
            </div>
          </Tab>
        </Tabs>
        // <Row className={styles.columnDirection}>
        //   <Col className={`${styles.column}`}>
        //     <h2 className={styles.title}>To do</h2>
        // <div className={styles.list}>
        //   {toDoTasks.map((t) => (
        //     <TaskCard task={t} key={t.id} />
        //   ))}
        // </div>
        //   </Col>
        //   <Col className={`${styles.column} ${styles.inProgressCol}`}>
        //     <h2 className={styles.title}>In progress</h2>
        // <div className={styles.list}>
        //   {inProgressTasks.map((t) => (
        //     <TaskCard task={t} key={t.id} />
        //   ))}
        // </div>
        //   </Col>
        //   <Col className={`${styles.column}`}>
        //     <h2 className={styles.title}>Done</h2>
        // <div className={styles.list}>
        //   {doneTasks.map((t) => (
        //     <TaskCard task={t} key={t.id} />
        //   ))}
        // </div>
        //   </Col>
        // </Row>
      )}
    </Container>
  );
}
