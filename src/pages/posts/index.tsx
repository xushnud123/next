import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";

import cls from "./index.module.css";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts?: any[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  console.log(posts);
  const param = posts?.map((item: PostProps) => {
    return {
      params: {
        postId: item.id,
      },
    };
  });
  console.log("param", param);
  return (
    <div className={cls.wrapper}>
      <h1>Title</h1>
      <ol className={cls.ol}>
        {posts?.map((item: any) => (
          <li key={item.id}>
            <Link href={`posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return {
    props: {
      posts: res.slice(0, 3),
    },
  };
}
