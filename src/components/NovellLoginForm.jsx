import React, { useState } from "react";

function NovellLoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    city: "",
    server: "",
    role: "",
    signOn: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        signOn: checked
          ? [...prevData.signOn, value]
          : prevData.signOn.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      city: "",
      server: "",
      role: "",
      signOn: [],
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Novell Services Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div style={styles.inputGroup}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* City */}
        <div style={styles.inputGroup}>
          <label>City of Employment:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        {/* Web Server Dropdown */}
        <div style={styles.inputGroup}>
          <label>Web Server:</label>
          <select
            name="server"
            value={formData.server}
            onChange={handleChange}
          >
            <option value="">-- Choose a server --</option>
            <option value="Server 1">Server 1</option>
            <option value="Server 2">Server 2</option>
            <option value="Server 3">Server 3</option>
          </select>
        </div>

        {/* Role Selection (Radio Buttons) */}
        <div style={styles.inputGroup}>
          <label>Please specify your role:</label>
          <div style={styles.radioContainer}>
            {["Admin", "Engineer", "Manager", "Guest"].map((role) => (
              <label key={role} style={styles.radioLabel}>
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={formData.role === role}
                  onChange={handleChange}
                />
                {role}
              </label>
            ))}
          </div>
        </div>

        {/* Single Sign-On (Checkboxes) */}
        <div style={styles.inputGroup}>
          <label>Single Sign-on to the following:</label>
          <div style={styles.radioContainer}>
            {["Mail", "Payroll", "Self-service"].map((service) => (
              <label key={service} style={styles.radioLabel}>
                <input
                  type="checkbox"
                  name="signOn"
                  value={service}
                  checked={formData.signOn.includes(service)}
                  onChange={handleChange}
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button type="submit">Login</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

// CSS Styles
const styles = {
  container: {
    width: "450px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  radioContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "10px",
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};

export default NovellLoginForm;
