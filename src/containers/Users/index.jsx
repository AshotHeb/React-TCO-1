import { Component } from "react";

const User = ({ user }) => {
  return <li>{user.name}</li>;
};
export class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ users });
      });
  }
  render() {
    const { users } = this.state;

    if (!users.length) {
      return <div className="loading">Lodaing...</div>;
    }

    return (
      <ul className="users-list">
        {users.map((user) => (
          <User user={user} />
        ))}
      </ul>
    );
  }
}
