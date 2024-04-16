import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import "./indexjs.css";
const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <nav className="flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b justify-end items-center bg-black">
      {userLoggedIn ? (
        <>
          <div className="log">
            <button
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/login");
                });
              }}
              className="text-sm text-blue-600 underline"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="hi">
            <Link className="text-sm text-blue-600 underline" to={"/login"}>
              Login
            </Link>
            <Link className="text-sm text-blue-600 underline" to={"/register"}>
              Register New Account
            </Link>
            <div></div>
          </div>
          <div className="logo">
            <Link to="/" className="logo-text">
              PlaceX
            </Link>
          </div>
          <nav className="navbar">
            <div className="container">
              <div className="nav-links">
                <ul>
                  <li>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
           
          </nav>
        </>
      )}
    </nav>
  );
};

export default Header;
