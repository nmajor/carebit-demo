import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";

import "./index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
