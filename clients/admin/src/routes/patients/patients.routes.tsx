import { PatientNewPage } from "./new/patient-new.page";
import { PatientPage } from "./:patientId/patient.page";
import { PatientsLayout } from "./patients.layout";
import { PatientEditPage } from "./:patientId/edit/patient-edit.page";

export const patientsRoutes = [
  {
    path: "/patients",
    element: <PatientsLayout />,
    children: [
      {
        path: "new",
        element: <PatientNewPage />,
      },
      {
        path: ":patientId/edit",
        element: <PatientEditPage />,
      },
      {
        path: ":patientId",
        element: <PatientPage />,
      },
    ],
  },
];
