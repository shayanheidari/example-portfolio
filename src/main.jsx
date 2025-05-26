import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Thesis from "./components/works/thesis.jsx";
import ProjectsMarine from "./components/ProjectsMarine.jsx";
import ProjectsSide from "./components/ProjectsSide.jsx";

const router = createBrowserRouter([
  { path: "/example-portfolio/", element: <App /> },
  { path: "/example-portfolio/works/thesis/", element: <Thesis /> },
  { path: "/example-portfolio/works/marine/", element: <ProjectsMarine /> },
  { path: "/example-portfolio/works/side/", element: <ProjectsSide /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <html className="scroll-smooth" lang="en">
      <body className="bg-background">
        <RouterProvider router={router} />
      </body>
    </html>
  </StrictMode>,
);
