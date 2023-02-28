import { FC } from "react";

interface UserProps {
  user: any;
}

const User: FC<UserProps> = ({ user }) => {
  return <div> {user.name} </div>;
};
export default User;
