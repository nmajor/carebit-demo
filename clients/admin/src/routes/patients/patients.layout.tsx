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
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import { Loader2, Plus, Search } from "lucide-react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { config } from "@/config";
import { Patient } from "./types";
import { useEffect, useState } from "react";
import { PatientsTable } from "./_components/patients-table";
import { Outlet } from "react-router-dom";

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

export function PatientsLayout() {
  const [searchValue, setSearchValue] = useState("");
  const { status, data, isFetching, refetch, isRefetching } = useQuery<
    Patient[]
  >({
    queryKey: ["patients"],
    queryFn: () => fetchPatients({ query: searchValue }),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    refetch();
  }, [searchValue]);

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

            {status === "error" && (
              <div className="text-center text-destructive">
                An error occurred while fetching patients.
              </div>
            )}

            <PatientsTable loading={isFetching} patients={data} />
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
      <div>
        <Outlet />
      </div>
    </div>
  );
}
