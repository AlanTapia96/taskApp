import { useState, useEffect, useCallback } from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import UserList from "../userList/UserList";
import userService from "../../../services/users";
import PaginationComp from "../pagination/Pagination";
import styles from "./usersContainer.module.css";
import { PropagateLoader } from "react-spinners";

const UsersContainer = () => {
  const [initial, setInitial] = useState(true);
  const [loading, setLoading] = useState(null);
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const getUsers = useCallback(async () => {
    setLoading(true);
    const users = await userService.getUsers(currentPage);
    setUsers(users.results);
    setLoading(false);
  }, [currentPage]);

  const getUsersByGender = useCallback(
    async (gen) => {
      setLoading(true);
      setGender(gender);
      const usersByGender = await userService.getUsersByGender(gen);
      console.log(usersByGender);
      setUsers(usersByGender.results);
      setLoading(false);
    },
    [gender]
  );

  const handleSetPage = (e) => {
    setCurrentPage(e.target.innerText);
  };

  useEffect(() => {
    if (!initial && gender) {
      getUsersByGender(gender);
    } else {
      getUsers();
    }
    setInitial(false);
  }, [currentPage, gender, initial, getUsers, getUsersByGender]);

  return (
    <Container>
      {loading && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}>
            <PropagateLoader
              loading={loading}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}
      {!loading && (
        <>
          <div className={styles.buttonsContainer}>
            <ButtonGroup>
              <Button variant="secondary" onClick={() => setGender("male")}>
                Male
              </Button>
              <Button variant="secondary" onClick={() => setGender("female")}>
                Female
              </Button>
              <Button variant="secondary" onClick={() => setGender("")}>
                All
              </Button>
            </ButtonGroup>
          </div>
          <UserList users={users} loading={loading} />
          <PaginationComp
            handleSetPage={handleSetPage}
            currentPage={currentPage}
          />
        </>
      )}
    </Container>
  );
};

export default UsersContainer;
