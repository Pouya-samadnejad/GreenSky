"use client";
import { Calendar, Home, PlusCircle, User } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Add property",
    url: "/account/addproperty",
    icon: PlusCircle,
  },
  {
    title: "Reservations",
    url: "/account/reservations",
    icon: Calendar,
  },
  {
    title: "User profile",
    url: "/account/profile",
    icon: User,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="pt-20  ">
      <SidebarContent className="bg-bg-brown">
        <SidebarGroup>
          <SidebarGroupLabel>Panel Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`hover:bg-[#E0D0AF] ${
                      pathname === item.url ? "bg-[#E0D0AF]" : ""
                    }`}
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
