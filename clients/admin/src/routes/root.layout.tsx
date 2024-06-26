import {
  Calendar,
  FileText,
  Home,
  PanelLeft,
  PieChart,
  Search,
  Settings,
  User2,
  Users2,
} from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/",
  },
  {
    title: "Patients",
    icon: Users2,
    path: "/patients",
  },
  {
    title: "Appointments",
    icon: Calendar,
    path: "/appointments",
  },
  {
    title: "Medical Records",
    icon: FileText,
    path: "/medical-records",
  },
  {
    title: "Reports",
    icon: PieChart,
    path: "/reports",
  },
];

export function RootLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            to="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-muted text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base group"
          >
            <img
              src="https://www.carebit.co/static/carebit-badge-5ff287eb8823adf1e012ea1a105a9ac4.png"
              alt="Carebit Inc"
              className="h-5 w-5 group-hover:h-6 group-hover:w-6 bg-transparent transition-all"
            />
            <span className="sr-only">Carebit Inc</span>
          </Link>
          {navLinks.map((link) => (
            <Tooltip key={link.title}>
              <TooltipTrigger asChild>
                <NavLink to={link.path}>
                  {({ isActive, isPending }) => (
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8",
                        isActive || isPending
                          ? "text-primary bg-muted"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.title}</span>
                    </div>
                  )}
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">{link.title}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    to={link.path}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <User2 className="h-6 w-6" />
                <span className="sr-only">My Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="p-4 md:p-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
