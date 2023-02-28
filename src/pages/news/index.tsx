import { FC } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
export type NewProp = {
  id: number;
  title: string;
  description: string;
  category: string;
};

interface NewsProps {
  articles: NewProp[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/news").then((res) =>
    res.json()
  );

  return {
    props: {
      articles: res,
    },
  };
};

const News: FC<NewsProps> = ({ articles }) => {
  return (
    <div>
      <h1>News</h1>
      <ol>
        {articles?.map((item) => (
          <li key={item.id}>
            <Link href={`/news/${item.category}`}>
              {item.title}, {item.category}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default News;
