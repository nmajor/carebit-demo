import { Button } from "@/components/ui/button";

export function PatientDeleteButton({ patientId }: { patientId: string }) {
  return <Button variant="destructive">Delete</Button>;
}
