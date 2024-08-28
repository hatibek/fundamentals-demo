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
      <button className="get-posts-button" onClick={handleGetPosts}>
        GET POSTS
      </button>
      
      {posts.length !== 0 && (
        <div className="rest-api-post">
          <table id="posts">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Post</th>
              </tr>
            </thead>
            <tbody>
              {posts.length !== 0 &&
                posts.map((post) => {
                  return (
                    <tr>
                      <th>{post.id}</th>
                      <th>{post.title}</th>
                      <th>{post.body}</th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RestAPI;
