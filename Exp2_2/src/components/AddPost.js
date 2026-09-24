import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/postSlice";

const MAX_CHARACTERS = 280;

const AddPost = () => {
  const dispatch = useDispatch();

  const platform = useSelector((state) => state.platform.selected);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const charactersRemaining = MAX_CHARACTERS - content.length;

  const handleSubmit = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    dispatch(
      addPost({
        id: Date.now(),
        title,
        content,
        platform,
        date: new Date().toLocaleString(),
      })
    );

    setTitle("");
    setContent("");
  };

  return (
    <div className="add-post">

      <h2>Create New Post</h2>

      <label>Platform</label>

      <input
        type="text"
        value={platform}
        readOnly
      />

      <label>Post Title</label>

      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Post Content</label>

      <textarea
        placeholder="What's happening?"
        value={content}
        maxLength={280}
        onChange={(e) => setContent(e.target.value)}
      />

      <p>
        Characters Remaining:
        <strong> {charactersRemaining}</strong>
      </p>

      {content.length >= 10 ? (
        <p className="ready">✅ Ready to Post</p>
      ) : (
        <p className="warning">
          Write at least 10 characters...
        </p>
      )}

      <button
        className="save-btn"
        onClick={handleSubmit}
      >
        💾 Save Post
      </button>

    </div>
  );
};

export default AddPost;
