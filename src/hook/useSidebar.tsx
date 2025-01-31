import { useContext } from "react";
import { SidebarContext } from "@/components/providers/sidebarProvider";

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    return context;
};