import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Patient } from "@/types";
import { ChevronLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { config } from "@/config";
import { FormEvent } from "react";
import { toast } from "sonner";
import { FormError } from "@/components/form-error";
import { PhoneInput } from "@/components/ui/phone-input";

type NewPatientValues = {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phone?: string;
  dob?: string;
  email?: string;
};

async function createPatient(values: NewPatientValues) {
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

export function PatientNewPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation({
    mutationFn: (e: FormEvent<HTMLFormElement>) => {
      // Specify the type of the event parameter
      e.preventDefault();

      const data = new FormData(e.target as HTMLFormElement);
      const values = Object.fromEntries(data.entries()) as NewPatientValues;
      return createPatient(values);
    },
    onSuccess: (patient) => {
      queryClient.invalidateQueries({
        queryKey: ["patients"],
      });
      navigate(`/patients/${patient.id}`);
      toast("Patient created successfully");
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors = (error as any)?.response?.data;

  console.log("blah hi data", errors);

  return (
    <div>
      <Link to="/patients" className="2xl:hidden">
        <Button size="xs" variant="link">
          <ChevronLeft className="" />
          Back to patients
        </Button>
      </Link>
      <form className="grid gap-4" onSubmit={mutate as never}>
        <Card className="w-full max-w-5xl">
          <CardHeader>
            <CardTitle>New Patient</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">
              {isPending && <Loader2 className="animate-spin h-4 w-4 mr-2" />}
              Create Patient
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
