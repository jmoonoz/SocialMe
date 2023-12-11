import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Home from "./pages/Home";
import Profile from "./pages/profile/profile";
import "./index.css";

function App() {
  // will automatically send user to login if not logged in
  const CurrentUser = true;

  // page login
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  //if no current user itll return to login
  const ProtectedRoute = ({ children }) => {
    if (!CurrentUser) {
      return <Navigate to="/login/" />;
    }
    return children;
  };

  // react router for pages
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
