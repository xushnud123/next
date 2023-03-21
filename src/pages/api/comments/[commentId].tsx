import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    // @ts-ignore
    const comment = comments.find((item) => item.id === parseInt(commentId));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find(
      // @ts-ignore
      (item) => item.id === parseInt(commentId)
    );
    // @ts-ignore
    const index = comments.findIndex((item) => item.id === parseInt(commentId));
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
}
