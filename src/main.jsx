import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { CakeView } from "./features/cake/CakeView.jsx";
import { IcecreamView } from "./features/icecream/IcecreamView.jsx";
import { UserView } from "./features/user/UserView.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cake",
        element: <CakeView />,
      },
      {
        path: "/icecream",
        element: <IcecreamView />,
      },
      {
        path: "/user",
        element: <UserView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
