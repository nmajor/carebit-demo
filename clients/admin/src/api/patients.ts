import { config } from "@/config";
import { Patient } from "@/types";
import axios from 'axios';

export async function fetchPatients({ query }: { query: string }) {
  const { data } = await axios.get(
    `${config.apiUrl}/patients${query ? `?query=${encodeURIComponent(query)}` : ""
    }`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
}

export async function fetchPatient({ patientId }: { patientId?: string }) {
  if (!patientId) return undefined;

  const { data } = await axios.get(`${config.apiUrl}/patients/${patientId}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data;
}

export type CreatePatientValues = {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phone?: string;
  dob?: string;
  email?: string;
};

export async function createPatient(values: CreatePatientValues) {
  const response = await axios.post(
    `${config.apiUrl}/patients`,
    { patient: values },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return response.data as Patient;
}

export type UpdatePatientValues = {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phone?: string;
  dob?: string;
  email?: string;
};

export async function updatePatient(patientId: string, values: UpdatePatientValues) {
  const response = await axios.put(
    `${config.apiUrl}/patients/${patientId}`,
    { patient: values },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return response.data as Patient;
}