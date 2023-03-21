import React from "react";
import { useSession, signIn } from "next-auth/react";

type Props = {};

export default function DashboardAuth({}: Props) {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    signIn();
  }
  return <h1>{session?.user?.email}</h1>;
}
