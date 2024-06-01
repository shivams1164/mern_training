import React from 'react';
import ReactDOM from 'react-dom'
import ImageGenerator from './src/pages/imageGenerator/imageGenerator';
import HomePage from './src/pages/homePage/homePage';
import History from './src/pages/history/histroypage';
import HistoryInfo from './src/pages/history/historyInfo';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
    path:'/history/:historyId',
    element:<HistoryInfo/>,
  }
]);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);


const App = () => {
  return <RouterProvider router={router} />

}


root.render(<App />);

