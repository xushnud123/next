import { FC } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { NewProp } from ".";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:4000/news?category=${params?.category}`
  ).then((res) => res.json());

  return {
    props: {
      category: res,
    },
  };
};

interface ArticleCategoryProps {
  category: NewProp[];
}

const ArticleCategory: FC<ArticleCategoryProps> = ({ category }) => {
  return (
    <ol>
      {category.map((item) => (
        <li key={item.id}>
          <h3>
            {item?.id} <mark>|</mark> {item?.title} <mark>|</mark>&nbsp;
            {item?.category}
          </h3>
          <p>{item?.description}</p>
          <hr />
        </li>
      ))}
    </ol>
  );
};
export default ArticleCategory;
