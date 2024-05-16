import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { config } from "@/config";

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
        queryKey: ["patients", ["patient", patientId]],
      });
      navigate("/patients");
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
