import { PatientPage } from "./:patientId/patient.page";
import { PatientsLayout } from "./patients.layout";

export const patientsRoutes = [
  {
    path: "/patients",
    element: <PatientsLayout />,
    children: [
      {
        path: ":patientId",
        element: <PatientPage />,
      },
    ],
  },
];
