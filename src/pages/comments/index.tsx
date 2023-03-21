import React, { useEffect, useState } from "react";

interface CommentsProps {
  id: number;
  text: string;
}

export default function Comments() {
  const [comments, setComments] = useState<CommentsProps[] | []>([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const data = await fetch("/api/comments").then((res) => res.json());
    setComments(data);
  };

  useEffect(() => {}, [comments]);
  const SubmitComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  const deleteComment = async (id: number) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={SubmitComment}>Submit Comment</button>
      </div>
      <button onClick={fetchComments}>Load Comments</button>
      <div>
        {comments.map((item) => (
          <div className='wrap' key={item.id}>
            <div key={item.id}>{item.text}</div>
            <button onClick={() => deleteComment(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
