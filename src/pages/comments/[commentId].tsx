import { IParams } from "@/helpers/helpers";
import { comments } from "data/comments";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";

type Comment = {
  id: number;
  text: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch(`${server}/api/comments`).then((res) => res.json());
  // console.log(res);
  // const paths = await res.map((item: Comment) => {
  //   return {
  //     params: {
  //       commentId: String(item.id),
  //     },
  //   };
  // });

  // console.log("res", paths);

  return {
    paths: [
      {
        params: {
          commentId: "1",
        },
      },
      {
        params: {
          commentId: "2",
        },
      },
      {
        params: {
          commentId: "3",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { commentId } = params as IParams;
  const comment = comments.find(
    // @ts-ignore
    (item) => item.id === parseInt(commentId)
  );

  // const res = await fetch(`${server}/api/comment/${params?.commentId}`).then(
  //   (data) => data.json()
  // );

  return {
    props: {
      comment,
    },
  };
};

interface CommentProps {
  comment: Comment;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  console.log(comment);
  return (
    <div>
      {comment.id}: {comment.text}
    </div>
  );
};
export default Comment;
