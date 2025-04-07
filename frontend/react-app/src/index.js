import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Messages from "./Pages/Messages";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import CreateAccount from "./Pages/CreateAccount";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPasword";

const App = () => {
  const location = useLocation();

  // Define as rotas onde o Header/Footer NÃO devem aparecer
  const hideLayoutPaths = ["/login", "/create-account", "/forgot-password"];


  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
