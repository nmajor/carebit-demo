import { createBrowserRouter } from "react-router-dom";

import "./index.css";
import { ErrorPage } from "./components/error-page";
import { RootPage } from "./routes/root.page";
import { RootLayout } from "./routes/root.layout";
import { patientsRoutes } from "./routes/patients/patients.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
      },
      ...patientsRoutes,
    ],
  },
]);
