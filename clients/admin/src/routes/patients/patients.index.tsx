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
import { Plus, Search } from "lucide-react";

export function PatientsIndex() {
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
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-none dark:bg-gray-950"
                  placeholder="Search patients..."
                  type="search"
                />
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
                  <TableHead>Age</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Last Visit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>123-456-7890</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>2023-04-15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>42</TableCell>
                  <TableCell>Female</TableCell>
                  <TableCell>987-654-3210</TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell>2023-03-28</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Michael Johnson</TableCell>
                  <TableCell>28</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>555-123-4567</TableCell>
                  <TableCell>michael@example.com</TableCell>
                  <TableCell>2023-05-01</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Emily Davis</TableCell>
                  <TableCell>31</TableCell>
                  <TableCell>Female</TableCell>
                  <TableCell>987-654-3210</TableCell>
                  <TableCell>emily@example.com</TableCell>
                  <TableCell>2023-04-20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>David Wilson</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>123-456-7890</TableCell>
                  <TableCell>david@example.com</TableCell>
                  <TableCell>2023-05-05</TableCell>
                </TableRow>
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
