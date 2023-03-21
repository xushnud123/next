import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";

type Props = {
  data: any;
};

export default function Blog({ data }: Props) {
  return <h1>Name: {data?.user?.name}</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${process.env.NEXT_PUBLIC_CALLBACK_URL}`,
        permanent: true,
      },
    };
  }
  return {
    props: {
      session,
      data: session ? session : "malumotlar shaxsiylashtirilgan",
    },
  };
};
