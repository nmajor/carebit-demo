import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/root.layout";

import "./index.css";
import { ErrorPage } from "./components/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
