import React, { useEffect, useState } from "react";
import "./RestAPI.css";

const RestAPI = () => {
  const [posts, setPosts] = useState([]);

  const handleGetPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts([posts, ...json]));
  };

  return (
    <div className="rest-api-main-container">
      <button onClick={handleGetPosts}>GET POSTS</button>
      {posts.length !== 0 && (
        <div className="rest-api-post">
          {posts.map((post) => {
            return <div>{post.id}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default RestAPI;
