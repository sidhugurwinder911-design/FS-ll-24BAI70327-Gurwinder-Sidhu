import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectFilteredPosts } from "../redux/postSlice";

const PostList = React.memo(() => {
  const dispatch = useDispatch();

  // Memoized selector
  const posts = useSelector(selectFilteredPosts);

  // Derived state using useMemo
  const totalPosts = useMemo(() => posts.length, [posts]);

  return (
    <div className="posts-section">
      <h2 className="posts-title">Saved Posts</h2>

      <p className="total-posts">
        Total Visible Posts: <strong>{totalPosts}</strong>
      </p>

      {posts.length === 0 ? (
        <div className="empty-posts">
          <h3>No Posts Available</h3>
          <p>Create your first post above.</p>
        </div>
      ) : (
        posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <h3>{post.title}</h3>

              <span className="platform-tag">
                {post.platform}
              </span>
            </div>

            <p className="post-content">
              {post.content}
            </p>

            <small className="post-date">
              📅 {post.date}
            </small>

            <br />

            <button
              className="delete-btn"
              onClick={() => dispatch(deletePost(post.id))}
            >
              🗑 Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
});

export default PostList;