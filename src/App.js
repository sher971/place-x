import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import Header from "./components/header/Header";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter, useRoutes } from "react-router-dom";
import React, { useState } from "react";
import Quiz from './components/Quiz'
import "./App.css"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";


function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    
    <AuthProvider>
      {routesElement}
     <Routes>
        <Route path='/Quiz' element ={<Quiz/>} exact/>
        </Routes>
      <Header />
    </AuthProvider>
   
  );
}

export default App;
