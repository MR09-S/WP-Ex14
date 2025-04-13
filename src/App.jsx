import React from "react";
import NovellLogin from "./components/NovellLoginForm";
import ProfileImage from "./components/ProfileImage";
import ProfilePage from "./components/ProfilePage";
import UserInfo from "./components/UserInfo";
import UserPosts from "./components/UserPosts";

// Import image from src/images
import profileImage from "./images/profile.jpg";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Displaying Components One by One</h1>

      <div>
        <h2>Novell Login</h2>
        <NovellLogin />
      </div>

      <div>
        <h2>Profile Image</h2>
        <ProfileImage imageUrl={profileImage} /> {/* passing image as prop */}
      </div>

      <div>
        <h2>Profile Page</h2>
        <ProfilePage />
      </div>

      <div>
        <h2>User Info</h2>
        <UserInfo />
      </div>

      <div>
        <h2>User Posts</h2>
        <UserPosts />
      </div>
    </div>
  );
}

export default App;
