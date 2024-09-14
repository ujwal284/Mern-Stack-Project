import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Vehicless from "./vehicle1/Vehicless";
import Signup from "./Components/Signup";
import Contacts from "./contact1/Contacts";
import Abouts from "./About1/Abouts";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark-text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/vehicle"
            element={authUser ? <Vehicless /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<Abouts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
