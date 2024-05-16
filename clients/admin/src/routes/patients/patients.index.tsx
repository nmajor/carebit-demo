import axios from "axios";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import { Loader2, Plus, Search } from "lucide-react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { config } from "@/config";
import { Patient } from "./types";
import { useEffect, useState } from "react";

const fetchPatients = async ({ query }: { query: string }) => {
  const { data } = await axios.get(
    `${config.apiUrl}/patients${
      query ? `?query=${encodeURIComponent(query)}` : ""
    }`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

export function PatientsIndex() {
  const [searchValue, setSearchValue] = useState("");
  const { status, data, error, isFetching, refetch, isRefetching } = useQuery<
    Patient[]
  >({
    queryKey: ["patients"],
    queryFn: () => fetchPatients({ query: searchValue }),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    refetch();
  }, [searchValue]);

  console.log({ status, data, error, isFetching });

  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Patient Records</CardTitle>
            <CardDescription>
              View and manage patient information for your clinic.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-1 gap-2 items-center">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <Input
                    className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-none dark:bg-gray-950"
                    placeholder="Search patients..."
                    type="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                {isRefetching ? (
                  <Loader2 className="h-6 w-6 text-muted-foreground animate-spin" />
                ) : (
                  <div className="h-6 w-6" />
                )}
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Patient
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>DOB</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Last Visit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isFetching ? (
                  <TableRow>
                    <TableCell>
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-[50px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-[50px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-[50px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-[50px]" />
                    </TableCell>
                    <TableCell className="flex justify-end">
                      <Skeleton className="h-4 w-[50px]" />
                    </TableCell>
                  </TableRow>
                ) : !data ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      No patients found.
                    </TableCell>
                  </TableRow>
                ) : (
                  data?.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>
                        {patient.first_name} {patient.last_name}
                      </TableCell>
                      <TableCell>{patient.date_of_birth}</TableCell>
                      <TableCell>{patient.sex}</TableCell>
                      <TableCell>{patient.phone_number}</TableCell>
                      <TableCell>{patient.email}</TableCell>
                      <TableCell className="flex justify-end">-</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <div className="mt-4 flex justify-end">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
