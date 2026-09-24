import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlatform } from "./redux/platformSlice";
import { addPost, deletePost } from "./redux/postSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const platform = useSelector((state) => state.platform.selectedPlatform);
  const posts = useSelector((state) => state.posts.posts);

  const [content, setContent] = useState("");

  const savePost = () => {
    if (content.trim() === "") return;

    dispatch(
      addPost({
        id: Date.now(),
        platform,
        content,
      })
    );

    setContent("");
  };

  return (
    <div className="container">
      <h1>Redux Post Manager</h1>

      <label>Select Platform</label>

      <select
        value={platform}
        onChange={(e) => dispatch(setPlatform(e.target.value))}
      >
        <option>LinkedIn</option>
        <option>Twitter</option>
        <option>Facebook</option>
      </select>

      <textarea
        rows="7"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post..."
      />

      <h3>Characters : {content.length}/3000</h3>

      <p className="status">
        {content.length <= 3000 ? "Ready To Post" : "Limit Exceeded"}
      </p>

      <button onClick={savePost}>Save Post</button>

      <hr />

      <h2>Saved Posts</h2>

      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h3>{post.platform}</h3>

          <p>{post.content}</p>

          <button
            className="delete"
            onClick={() => dispatch(deletePost(post.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;