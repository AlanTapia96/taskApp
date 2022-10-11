const userService = {};
const apiUrl = "https://randomuser.me/api/";

userService.getUsers = async function (page) {
  return await fetch(`${apiUrl}?page=${page}&seed=foobar&results=12`).then(
    (res) => res.json()
  );
};

userService.getUsersByGender = async function (gender) {
  return await fetch(`${apiUrl}?gender=${gender}&results=8`).then((res) =>
    res.json()
  );
};

export default userService;
