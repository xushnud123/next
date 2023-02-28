import { FC } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  const param = await res.slice(0, 3)?.map((item: PostProps) => {
    return {
      params: {
        postId: `${item.id}`,
      },
    };
  });

  return {
    paths: param,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  ).then((res) => res.json());

  if (!res.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: res,
    },
  };
};

interface Props {
  post?: PostProps;
}

const Post: FC<Props> = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{post?.title}</h1>
      <div>
        <h1>userId {post?.userId}</h1>
        <h1>id {post?.id}</h1>
      </div>
      <p>{post?.body}</p>
    </div>
  );
};
export default Post;
