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
import axios from "axios";

import { Skeleton } from "@/components/ui/skeleton";
import { config } from "@/config";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ChevronLeft, X } from "lucide-react";
import { titleCase } from "moderndash";
import { Link, useParams } from "react-router-dom";
import { Patient } from "../types";
import { PatientDeleteButton } from "./_components/patient-delete-button";

const fetchPatient = async ({ patientId }: { patientId?: string }) => {
  if (!patientId) return undefined;

  const { data } = await axios.get(`${config.apiUrl}/patients/${patientId}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data;
};

export function PatientPage() {
  const { patientId } = useParams();
  const { status, data, isFetching } = useQuery<Patient>({
    queryKey: ["patient", patientId],
    queryFn: () => fetchPatient({ patientId }),
    placeholderData: keepPreviousData,
  });

  if (isFetching) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-1/2" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-1/4" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (status === "error") {
    return (
      <Card className="text-destructive">An unexpected error happened.</Card>
    );
  }

  if (!data) {
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
              {data.first_name} {data.middle_name} {data.last_name}
            </div>
            <Link to="/patients" className="hidden 2xl:block">
              <Button size="xs" variant="outline">
                <X className="h-4 w-4" />
              </Button>
            </Link>
          </CardTitle>
          <CardDescription>{data.sex}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {Object.keys(data).map((key) => {
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
              )
                return null;

              const label = titleCase(key);
              const value = data[key as keyof Patient];
              return (
                <div className="grid gap-1">
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
