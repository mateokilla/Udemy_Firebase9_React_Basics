import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user, authIsReady } = useAuthContext();
  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        {authIsReady && <li>{user && <Link to="/">Home</Link>}</li>}
        {authIsReady && <li>{!user && <Link to="/login">Login</Link>}</li>}
        {authIsReady && <li>{!user && <Link to="/signup">Signup</Link>}</li>}

        {user && <li onClick={logout}>Logout</li>}
      </ul>
    </nav>
  );
}
