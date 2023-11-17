import { useContext, useEffect, useState } from "react";
import { UserPrefencesContext } from "../context/UserPrefencesContext.jsx";
import axios from "axios";
import "./Settings.css";

const Settings = () => {
  const { language, changeLanguage, theme, toggleTheme } =
    useContext(UserPrefencesContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).access_token
            }`,
          },
        })
        .then((response) => setUser(response.data));
      console.log(response);
    };

    getUserProfile();
  }, []);

  return (
    <div className="profile">
      <div className="profile-card">
      <h2>Profile</h2>
         <div className="profile-image">
          <img src={user.avatar} alt="" />
        </div>
        <div className="profile-header">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      </div>
      <div className="settings-option">
        <div className="language">
        <label htmlFor="">Language:</label>
        <select
          value={language}
          name=""
          id=""
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        </div>
        <div className="theme">
        <label htmlFor="">Theme:</label>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>
      </div>

    </div>
  );
};

export default Settings;
