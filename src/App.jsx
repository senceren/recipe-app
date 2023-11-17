/* eslint-disable no-unused-vars */
import "./App.css";
import { NavigationBar } from "./components/navigation-bar/Navigation.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { APIProvider } from "./context/APIContext.jsx";
import { UserPrefencesContext } from "./context/UserPrefencesContext.jsx";
import { useContext } from "react";

import { AboutPage } from "./pages/AboutPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { PrivateRoute } from "./services/PrivateRoute.jsx";
import { AddRecipe } from "./components/add-recipe/AddRecipe.jsx";
import Settings from "./settings/Settings.jsx";

function App() {
  const { theme } = useContext(UserPrefencesContext);

  return (
    <>
      <AuthProvider>
        <div className={`App ${theme}`}>
          <APIProvider>
            <Router>
              <NavigationBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/addrecipe"
                  element={<PrivateRoute element={<AddRecipe />} />}
                />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/settings"
                  element={<PrivateRoute element={<Settings />} />}
                />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Router>
          </APIProvider>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
