import React, { useContext, useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };
  const [isClicked, setClicked] = useState(false);
  const [maskedPassword, setMaskedPassword] = useState("");

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <div className="login-inner">
          <h2>Giriş Yap</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group password">
            <input
              type="text"
              placeholder="Şifre"
              value={isClicked ?'*'.repeat(password.length) : password}
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);
              }}
            />
            <span onClick={() => setClicked(!isClicked)}>
              {isClicked ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </span>
          </div>
          <button type="submit">Giriş Yap</button>
        </div>
      </form>
    </div>
  );
};
