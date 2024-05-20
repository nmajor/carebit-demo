import {
  UpdatePatientValues,
  fetchPatient,
  updatePatient,
} from "@/api/patients";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Patient } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ChevronLeft, X } from "lucide-react";
import { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { PatientForm } from "../../_components/patient-form";
import { PatientLoadingCard } from "../../_components/patient-loading-card";

export function PatientEditPage() {
  const { patientId } = useParams();
  const {
    status,
    data: patient,
    isFetching,
  } = useQuery<Patient>({
    queryKey: ["patient", patientId],
    queryFn: () => fetchPatient({ patientId }),
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation({
    mutationFn: (e: FormEvent<HTMLFormElement>) => {
      // Specify the type of the event parameter
      e.preventDefault();

      const data = new FormData(e.target as HTMLFormElement);
      const values = Object.fromEntries(data.entries()) as UpdatePatientValues;
      if (!patientId) throw Error("Missing patientId, cannot edit");

      return updatePatient(patientId, values);
    },
    onSuccess: (patient) => {
      queryClient.invalidateQueries({
        queryKey: ["patients"],
      });
      navigate(`/patients/${patient.id}`);
      toast("Patient created successfully");
    },
  });

  if (isFetching) {
    return <PatientLoadingCard />;
  }

  if (status === "error") {
    return (
      <Card className="text-destructive">An unexpected error happened.</Card>
    );
  }

  if (!patient) {
    return <Card className="">Record not found</Card>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors = (error as any)?.response?.data;

  return (
    <div>
      <Link to="/patients" className="2xl:hidden">
        <Button size="xs" variant="link">
          <ChevronLeft className="" />
          Back to patients
        </Button>
      </Link>
      <Card className="w-full max-w-5xl">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <div>Edit Patient</div>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={`/patients/${patientId}`}
                    className="hidden 2xl:block"
                  >
                    <Button size="xs" variant="outline">
                      <X className="h-4 w-4" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">Close Form</TooltipContent>
              </Tooltip>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <PatientForm
            mutate={mutate}
            errors={errors}
            isPending={isPending}
            defaultValues={patient}
          />
        </CardContent>
      </Card>
    </div>
  );
}
