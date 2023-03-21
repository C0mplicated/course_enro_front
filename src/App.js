import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllCrouses from "./views/AllCrouses";
import EnrolledCrouses from "./views/EnrolledCrouses";
import MenuBar from "./components/MenuBar";
import LoginDialog from "./components/LoginDialog";

function App() {
  return (
    <div>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<AllCrouses />} />
        <Route path="enrolled-crouses" element={<EnrolledCrouses />} />
          <Route path="login-dialog" element={<LoginDialog/>}/>
      </Routes>
    </div>
  );
}

export default App;

