import React from "react";

const UserInfo = ({ name = "John Doe", email = "johndoe@example.com", bio = "This is a sample bio." }) => {
  return (
    <div style={styles.infoContainer}>
      <h2 style={styles.name}>{name}</h2>
      <div style={styles.divider}></div>
      <p style={styles.text}>
        <strong>Email:</strong> {email}
      </p>
      <p style={styles.text}>
        <strong>Bio:</strong> {bio}
      </p>
    </div>
  );
};

// CSS Styles
const styles = {
  infoContainer: {
    marginTop: "10px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    maxWidth: "400px",
    textAlign: "left",
  },
  name: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "4px",
    textAlign: "center",
  },
  divider: {
    height: "1px",
    backgroundColor: "#ccc",
    margin: "8px 0 12px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
  },
};

export default UserInfo;
