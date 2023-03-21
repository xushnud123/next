import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const res = await fetch(`http://localhost:4000/events?${queryString}`).then(
    (res) => res.json()
  );

  return {
    props: {
      events: res,
    },
  };
};
type Props = {
  events: {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
  }[];
};

export default function Events({ events }: Props) {
  const router = useRouter();
  const [category, setCategory] = useState(events);

  const fetchSport = async () => {
    const res = await fetch(
      "http://localhost:4000/events?category=sports"
    ).then((res) => res.json());

    setCategory(res);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={() => fetchSport()}>Sports Event</button>
      <ol>
        {category?.map((item) => (
          <li key={item.id}>
            {item.title} / {item.category}
          </li>
        ))}
      </ol>
    </div>
  );
}
