import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import LandingPage from "./components/LandingPage";

import { useEffect, useState } from "react";
import { auth } from "./Firebase";

function App() {
  const [userName, setUserName] = useState("");
  const [wlcmMsg, setWlcmMsg] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setWlcmMsg("Hello World !!");
      } else {
        setUserName("");
        setWlcmMsg("");
      }
    });
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} text={wlcmMsg} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
