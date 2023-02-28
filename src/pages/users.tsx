import { FC } from "react";
import User from "@/components/user";

interface UsersProps {
  users: any[];
}

const Users: FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h1>
        <mark>Users</mark>
      </h1>

      <ol>
        {users.map((item) => (
          <li key={item.id}>
            <User user={item} />
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return {
    props: {
      users: res,
    },
  };
}
