export type Patient = {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  date_of_birth: string
  sex: string;
  phone_number: string;
  email: string;
  emergency_contact_name: string;
  emergency_contact_phone_number: string;
  emergency_contact_relationship: string;
  address: string;
  preferred_language: string;
  occupation: string;
  preexisting_conditions: string;
  allergies: string;
  medications: string;
  surgeries: string;
  transportation_needs: string;
  family_medical_history: string;
  last_visited_at: string;
  created_at: string;
  updated_at: string;
};

export type PatientCreateResponse = {
  data: Patient & { created_at: string; updated_at: string };
}
