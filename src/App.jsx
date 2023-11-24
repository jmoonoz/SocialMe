import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Leftbar from "./components/Leftbar";
import Home from "./pages/Home";
import Profile from "./pages/profile/profile";
import "./index.css";

function App() {
  // will automatically send user to login if not logged in
  const CurrentUser = false;

  // page login
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };

  //if no current user itll return to login
  const ProtectedRoute = ({ children }) => {
    if (!CurrentUser) {
      return <Navbar to="/login" />;
    }
    return children;
  };

  // react router for pages
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        //  protects all paged in the layout
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
