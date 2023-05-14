import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import {  Profile, Account } from "./pages";

const User = () => {
  return (
    <>
      <h1>User</h1>

      <nav>
        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>

      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route path="user" element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </>
  );
};


export default App;