import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import profileImage from "../images/profile.jpg"; // ✅ Correct path

const ProfilePage = () => {
  const user = {
    name: "Shiva Chikkala",
    email: "ssmurthy@gmail.com",
    bio: "Web Developer | React Enthusiast",
    imageUrl: profileImage, // ✅ Use imported image
    posts: ["First post!", "Loving Full Stack", "Coding is somewhat fun :("],
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <ProfileImage imageUrl={user.imageUrl} />
        <UserInfo name={user.name} email={user.email} bio={user.bio} />
        <UserPosts posts={user.posts} />
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
  },
  card: {
    width: "400px",
    maxWidth: "90%",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
};

export default ProfilePage;
