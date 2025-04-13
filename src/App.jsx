import React from "react";
import srcImage from "./images/sc1.jpg"; // Importing image from src folder

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Displaying Images in React</h1>
      {/* Image from Public Folder */}
      <h2>Image from Public Folder</h2>
      <img src="/sc2.jpg" alt="Public Folder Image" width="300" />

      {/* Image from Src Folder */}
      <h2>Image from Src Folder</h2>
      <img src={srcImage} alt="Src Folder Image" width="300" />
    </div>
  );
}

export default App;
