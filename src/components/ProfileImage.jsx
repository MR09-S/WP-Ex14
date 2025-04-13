import React from "react";

const ProfileImage = ({ imageUrl }) => {
  return (
    <div style={styles.container}>
      <img
        src={imageUrl}
        alt="User Profile"
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default ProfileImage;
