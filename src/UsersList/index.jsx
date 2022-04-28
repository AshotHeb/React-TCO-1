import { USERS_DAMI_LIST } from "../static";

const UserListItem = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>-----------</p>
    </div>
  );
};
export const UsersList = () => {
  //   const jsxArray = [<span>1</span>, <span>2</span>, <span>1</span>];
  const usersJsx = USERS_DAMI_LIST.map((user, index) => {
    return <UserListItem key={index} user={user} />;
  });
  return (
    <div>
      {/* {jsxArray} */}
      {/* <UserListItem index={0} />
      <UserListItem index={1} />
      <UserListItem index={3} /> */}
      {usersJsx}
    </div>
  );
};
