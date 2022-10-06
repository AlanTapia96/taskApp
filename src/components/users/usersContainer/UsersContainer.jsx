import { useState, useEffect, useCallback, memo } from "react";
import { Container } from "react-bootstrap";
import UserList from "../userList/UserList";

const UsersContainer = memo(() => {
  const [users, setUsers] = useState([]);
  // const [page, setPage] = useState(1);

  const getUsers = useCallback(async () => {
    const res = await fetch(
      //   `https://randomuser.me/api/?page=${page}&results=10`
      `https://randomuser.me/api/?seed=foobar&results=12`
    );
    const users = await res.json();
    setUsers(users.results);
  }, []);

  useEffect(() => {
    getUsers().catch((e) => console.log(e));
  }, [getUsers]);

  return (
    <Container>
      <UserList users={users} />
    </Container>
  );
});

export default UsersContainer;
