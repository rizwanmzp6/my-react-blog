import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { initialPosts } from "../../initialPosts";
import "./postdetails-styles.css";

export default function PostDetails() {
  const [post, setPost] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const viewPost = initialPosts.find((post) => post.id === parseInt(id, 10));
    setPost(viewPost);
  }, [id]);

  return post ? (
    <div id="viewPostWrapper">
      <h2>{post.title}</h2>
      <img src={post.url} alt="thumbnail" />
      <p>{post.postText}</p>
      <em>{post.date} </em>
    </div>
  ) : null;
}
