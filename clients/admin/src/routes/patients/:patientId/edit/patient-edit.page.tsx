import {
  UpdatePatientValues,
  fetchPatient,
  updatePatient,
} from "@/api/patients";
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Patient } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ChevronLeft, Loader2, X } from "lucide-react";
import { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
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
                  <Link to="/patients" className="hidden 2xl:block">
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
          <form className="grid gap-4" onSubmit={mutate as never}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first_name">First Name</Label>
                <Input name="first_name" id="first_name" placeholder="John" />
                <FormError errors={errors?.first_name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Last Name</Label>
                <Input name="last_name" id="last_name" placeholder="Doe" />
                <FormError errors={errors?.last_name} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="middleName">Middle Name</Label>
              <Input name="middle_name" id="middle_name" placeholder="Quincy" />
              <FormError errors={errors?.middle_name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sex">Biological Sex</Label>
              <div>
                <select
                  name="sex"
                  id="sex"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                >
                  <option value="">Select option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <FormError errors={errors?.sex} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone_number">Phone Number</Label>

                {/* <Input
                  name="phone_number"
                  id="phone_number"
                  placeholder="(123) 456-7890"
                  type="text"
                /> */}
                <PhoneInput
                  defaultCountry="GB"
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  autoComplete="tel"
                />
                <FormError errors={errors?.phone_number} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date_of_birth">Date of Birth</Label>
                <Input
                  className="w-auto"
                  name="date_of_birth"
                  id="date_of_birth"
                  type="date"
                />
                <FormError errors={errors?.date_of_birth} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                type="email"
              />
              <FormError errors={errors?.email} />
            </div>
            <div>
              <Button type="submit">
                {isPending && <Loader2 className="animate-spin h-4 w-4 mr-2" />}
                Create Patient
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
