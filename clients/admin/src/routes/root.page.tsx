import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Activity,
  ArrowUp,
  CalendarIcon,
  DollarSign,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";

export function RootPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Patients
            </CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345</div>
            <p className="text-xs text-muted-foreground">
              +15.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Appointments
            </CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+78</div>
            <p className="text-xs text-muted-foreground">
              +10.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unpaid Bills</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Patients Seen</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +20% since last week
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>
                Patients scheduled for the next 7 days.
              </CardDescription>
            </div>
            <Button asChild className="ml-auto gap-1" size="sm">
              <Link to="#">
                View All
                <ArrowUp className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead className="hidden xl:table-column">
                    Reason
                  </TableHead>
                  <TableHead className="hidden xl:table-column">Date</TableHead>
                  <TableHead className="hidden xl:table-column">Time</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">John Doe</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      john@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Routine Check-up
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    2023-06-23
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    10:00 AM
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="outline">
                      Confirmed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Jane Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      jane@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Flu Shot
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    2023-06-24
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2:30 PM
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="outline">
                      Confirmed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Michael Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      michael@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Physical Exam
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    2023-06-25
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    9:00 AM
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="outline">
                      Confirmed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Emily Davis</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      emily@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Allergy Testing
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    2023-06-26
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    11:30 AM
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="outline">
                      Confirmed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">David Lee</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      david@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Flu Shot
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    2023-06-27
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    3:00 PM
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="outline">
                      Confirmed
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <CardTitle>Recent Patients</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage alt="Avatar" src="/avatars/01.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-sm text-muted-foreground">
                  john.doe@email.com
                </p>
              </div>
              <div className="ml-auto">
                <Button size="sm">View</Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage alt="Avatar" src="/avatars/02.png" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Jane Smith</p>
                <p className="text-sm text-muted-foreground">
                  jane.smith@email.com
                </p>
              </div>
              <div className="ml-auto">
                <Button size="sm">View</Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage alt="Avatar" src="/avatars/03.png" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Michael Johnson
                </p>
                <p className="text-sm text-muted-foreground">
                  michael.johnson@email.com
                </p>
              </div>
              <div className="ml-auto">
                <Button size="sm">View</Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage alt="Avatar" src="/avatars/04.png" />
                <AvatarFallback>ED</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Emily Davis</p>
                <p className="text-sm text-muted-foreground">
                  emily.davis@email.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
