import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Patient } from "../../../types";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export function PatientsTable({
  loading,
  patients,
  selectedId,
}: {
  loading: boolean;
  patients?: Patient[];
  selectedId?: string;
}) {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="hidden md:table-cell">DOB</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead className="hidden xl:table-cell">Phone</TableHead>
          <TableHead className="hidden lg:table-cell">Email</TableHead>
          <TableHead className="text-right">Last Visit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell>
              <Skeleton className="h-4 w-full" />
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <Skeleton className="h-4 w-[50px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[50px]" />
            </TableCell>
            <TableCell className="hidden xl:table-cell">
              <Skeleton className="h-4 w-[50px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-4 w-[50px]" />
            </TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-4 w-[50px]" />
            </TableCell>
          </TableRow>
        ) : !patients ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center">
              No patients found.
            </TableCell>
          </TableRow>
        ) : (
          patients?.map((patient) => (
            <TableRow
              key={patient.id}
              onClick={() => {
                navigate(`/patients/${patient.id}`);
              }}
              className={cn(
                selectedId && parseInt(selectedId) === patient.id
                  ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  : "hover:cursor-pointer"
              )}
            >
              <TableCell>
                {patient.first_name} {patient.last_name}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {patient.date_of_birth}
              </TableCell>
              <TableCell>{patient.sex}</TableCell>
              <TableCell className="hidden xl:table-cell">
                {patient.phone_number}
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                {patient.email}
              </TableCell>
              <TableCell className="flex justify-end">
                {patient.last_visited_at ?? "Never"}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
