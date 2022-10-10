import { useState, useEffect, useCallback, memo } from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import UserList from "../userList/UserList";
import userService from "../../services/users";

const UsersContainer = memo(() => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    const users = await userService.getUsers();
    setUsers(users.results);
  };

  const handleUsersByGender = async (gen) => {
    const usersByGender = await userService.getUsersByGender(gen);
    setUsers(usersByGender.results);
  };

  useEffect(() => {
    getUsers().catch((e) => console.log(e));
    // setInitial(false);
  }, []);

  return (
    <Container>
      <ButtonGroup>
        <Button variant="secondary" onClick={() => handleUsersByGender("male")}>
          Male
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleUsersByGender("female")}
        >
          Female
        </Button>
        <Button variant="secondary" onClick={() => getUsers()}>
          All
        </Button>
      </ButtonGroup>
      <UserList users={users} />
    </Container>
  );
});

export default UsersContainer;
