import React from "react";

const UserPosts = ({ posts = [] }) => {
  const isValidPosts = Array.isArray(posts);

  return (
    <div style={styles.postContainer}>
      <h3 style={styles.heading}>User Posts</h3>
      {isValidPosts && posts.length > 0 ? (
        <ul style={styles.list}>
          {posts.map((post, index) => (
            <li key={index} style={styles.postItem}>
              {post}
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.noPosts}>No posts available.</p>
      )}
    </div>
  );
};

const styles = {
  postContainer: {
    marginTop: "15px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    maxWidth: "400px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "10px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "5px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  postItem: {
    background: "#e9ecef",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    fontSize: "14px",
    color: "#333",
  },
  noPosts: {
    fontSize: "14px",
    color: "#888",
    fontStyle: "italic",
  },
};

export default UserPosts;
