import "./NavigationBar.css";
import logo from "../../assets/recipe.png";
import { useContext, useState } from "react";
import { UserPrefencesContext } from "../../context/UserPrefencesContext.jsx";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

export function NavigationBar() {

  const ThemeSlider = () => {
    const {theme, toggleTheme} = useContext(UserPrefencesContext);
    const [isToggled, setIsToggled] = useState(theme === "dark")

    const handleToggle = () => {
      setIsToggled(!isToggled);
      toggleTheme();
    }

    return (
      <div className={`slider-container ${isToggled ? "dark" : "light"}`} onClick={handleToggle} >
        <div className="slider-button">
        </div>
      </div>
    );
  }

  const {isAuth, user, logout} = useContext(AuthContext);
  console.log("navbar: ", user)
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login")
  }

  const handleLogout = () => {
    logout();
    navigate("/login")
  }

  return (
    <>
      <div className="navbar container">
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt="" width={90} />
          </div>
          <p>Recipe Platform</p>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/addrecipe">Add Recipe</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
            <a href="" onClick={isAuth ? handleLogout : handleLogin}>{isAuth ? "Logout" : "Login"} </a>
            </li>
            <li>
              <ThemeSlider />
            </li>
            {isAuth && ( <li>
              <a href="/settings">
                <img className="profil-picture" src={user.avatar} alt="" width={60} /></a>
            </li>)}
          </ul>
        </div>
      </div>
    </>
  );
}
