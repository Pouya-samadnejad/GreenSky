import { AppSidebar } from "@/components/App-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SidebarProvider className="flex gap-4">
        <AppSidebar />

        <main>
          <SidebarTrigger className="fixed z-20 bg-white" />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
