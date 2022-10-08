import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskCard from "../taskCard/TaskCard";
import { Container, Tabs, Tab } from "react-bootstrap";
import styles from "./taskList.module.css";

export default function TaskList() {
  const { tasks, totalTasks } = useContext(TaskContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [tasks]);

  return (
    <Container className={styles.listContainer}>
      {!isLoaded && <h1>Cargando...</h1>}
      {isLoaded && totalTasks === 0 ? (
        <h2 className={styles.noTaskCreated}>No hay tareas creadas</h2>
      ) : isLoaded && totalTasks > 0 ? (
        <Tabs defaultActiveKey="toDo" className="mb-3" justify>
          <Tab eventKey="toDo" title="To do" className={styles.tab}>
            <div className={styles.list}>
              {tasks["toDo"].map((t) => (
                <TaskCard task={t} key={t.id} />
              ))}
            </div>
          </Tab>
          <Tab eventKey="inProgress" title="In progress" className={styles.tab}>
            <div className={styles.list}>
              {tasks["inProgress"].map((t) => (
                <TaskCard task={t} key={t.id} />
              ))}
            </div>
          </Tab>
          <Tab eventKey="done" title="Done" className={styles.tab}>
            <div className={styles.list}>
              {tasks["done"].map((t) => (
                <TaskCard task={t} key={t.id} />
              ))}
            </div>
          </Tab>
        </Tabs>
      ) : null}
    </Container>
  );
}
