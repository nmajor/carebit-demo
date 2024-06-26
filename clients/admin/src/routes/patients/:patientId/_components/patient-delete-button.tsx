import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { config } from "@/config";
import { toast } from "sonner";

function deletePatient({ patientId }: { patientId: string }) {
  return axios.delete(`${config.apiUrl}/patients/${patientId}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

export function PatientDeleteButton({ patientId }: { patientId: string }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: () => deletePatient({ patientId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["patients"],
      });
      queryClient.invalidateQueries({
        queryKey: ["patient", patientId],
      });
      navigate("/patients");
      toast.success("Patient deleted successfully");
    },
    onError: () => {
      toast.error("An error occurred while deleting the patient");
    },
  });

  return (
    <Button
      variant="destructive"
      onClick={() => {
        mutate();
      }}
    >
      {isPending && <Loader2 className="animate-spin h-4 w-4 mr-2" />} Delete
    </Button>
  );
}
