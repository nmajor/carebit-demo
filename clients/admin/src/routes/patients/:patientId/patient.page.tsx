import { fetchPatient } from "@/api/patients";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { calculateAge } from "@/lib/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ChevronLeft, Edit, X } from "lucide-react";
import { titleCase } from "moderndash";
import { Link, useParams } from "react-router-dom";
import { Patient } from "../../../types";
import { PatientLoadingCard } from "../_components/patient-loading-card";
import { PatientDeleteButton } from "./_components/patient-delete-button";

export function PatientPage() {
  const { patientId } = useParams();
  const {
    status,
    data: patient,
    isFetching,
  } = useQuery<Patient>({
    queryKey: ["patient", patientId],
    queryFn: () => fetchPatient({ patientId }),
    placeholderData: keepPreviousData,
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
            <div>
              {patient.first_name} {patient.middle_name} {patient.last_name}
            </div>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={`/patients/${patientId}/edit`}
                    className="hidden 2xl:block"
                  >
                    <Button size="xs" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">Edit Patient</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/patients" className="hidden 2xl:block">
                    <Button size="xs" variant="outline">
                      <X className="h-4 w-4" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">Close Patient</TooltipContent>
              </Tooltip>
            </div>
          </CardTitle>
          <CardDescription>
            {patient.sex} age {calculateAge(patient.date_of_birth)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {Object.keys(patient).map((key) => {
              if (
                [
                  "id",
                  "first_name",
                  "middle_name",
                  "last_name",
                  "created_at",
                  "updated_at",
                  "url",
                ].includes(key)
              ) {
                return null;
              }

              const label = titleCase(key);
              const value = patient[key as keyof Patient];

              if (!value) return null;

              return (
                <div className="grid gap-1" key={key}>
                  <Label>{label}</Label>
                  <div className="font-semibold">{value}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          {patientId && <PatientDeleteButton patientId={patientId} />}
        </CardFooter>
      </Card>
    </div>
  );
}
