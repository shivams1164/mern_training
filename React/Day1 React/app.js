import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import ImageGenerator from './src/pages/imageGenerator/imageGenerator';
import HomePage from './src/pages/homePage/homePage';
import History from './src/pages/history/histroypage';
import HistoryInfo from './src/pages/history/historyInfo';

import Signup from './src/pages/signup/signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PointsContext from './src/context/PointContext';
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = () => {
  const [userPoints, setUserPoints] = useState(20);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  }
  const logout = () => {
    setIsLoggedIn(false);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/image-generator",
      element: <ImageGenerator />
    },
    {
      path: "/history",
      element: <History />
    },
    {
      path: '/signup',
      element: <Signup />
    },
  ]);

  return (
    <PointsContext.Provider value={{
      userPoints: userPoints,
      setUserPoints: setUserPoints,
      isLoggedIn: isLoggedIn,
      login,
      logout,
    }}>
      <RouterProvider router={router} />
    </PointsContext.Provider>
  );
}

root.render(<App />);