import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Patient } from "@/types";
import { Loader2 } from "lucide-react";
import { FormEvent } from "react";

export function PatientForm({
  defaultValues,
  mutate,
  errors,
  isPending,
}: {
  defaultValues?: Partial<Patient>;
  mutate: (e: FormEvent<HTMLFormElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  isPending: boolean;
}) {
  return (
    <form className="grid gap-4" onSubmit={mutate as never}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first_name">First Name</Label>
          <Input
            name="first_name"
            id="first_name"
            placeholder="John"
            defaultValue={defaultValues?.first_name}
          />
          <FormError errors={errors?.first_name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last_name">Last Name</Label>
          <Input
            name="last_name"
            id="last_name"
            placeholder="Doe"
            defaultValue={defaultValues?.last_name}
          />
          <FormError errors={errors?.last_name} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="middleName">Middle Name</Label>
        <Input
          name="middle_name"
          id="middle_name"
          placeholder="Quincy"
          defaultValue={defaultValues?.middle_name}
        />
        <FormError errors={errors?.middle_name} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="sex">Biological Sex</Label>
        <div>
          <select
            name="sex"
            id="sex"
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
            defaultValue={defaultValues?.sex}
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

          <PhoneInput
            defaultCountry="GB"
            type="tel"
            name="phone_number"
            id="phone_number"
            autoComplete="tel"
            defaultValue={defaultValues?.phone_number}
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
            defaultValue={defaultValues?.date_of_birth}
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
          defaultValue={defaultValues?.email}
        />
        <FormError errors={errors?.email} />
      </div>
      <div className="flex justify-end">
        <Button type="submit">
          {isPending && <Loader2 className="animate-spin h-4 w-4 mr-2" />}
          Submit
        </Button>
      </div>
    </form>
  );
}
