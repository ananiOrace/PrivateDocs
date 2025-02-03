"use client";
import { createContext, useState, useCallback, useEffect, ReactNode } from "react";

import { SidebarContextType } from "@/app/types";

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => {},
  width: 0,
  isMobile: false,
  toggleSidebar: () => {},
});

export function SidebarProvider({children} : {children: ReactNode}) {
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const isMobile = width < 768

    const toggleSidebar = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            if (window.innerWidth >= 768) {
            setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <SidebarContext.Provider 
          value={{ 
            isOpen, 
            setIsOpen, 
            width, 
            isMobile,
            toggleSidebar
          }}
        >
          {children}
        </SidebarContext.Provider>
      );

}