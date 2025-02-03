'use client';
import { ReactNode, useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";

export default function Dashboard({ children }: { children: ReactNode}) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return(
        <div className="d-flex flex-column flex-md-row min-vh-100">

            {/* bouton menu mobile */}
            <button 
                className="d-md-none position-fixed top-0 start-0 mt-4 ms-4 z-3 p-2 bg-white rounded shadow"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            > 
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* sidebar mobile */}
            <div className={`position-fixed top-0 start-0 w-100 vh-100 bg-black bg-opacity-50 d-md-none z-2 transition 
                ${isSidebarOpen ? 'opacity-100' : 'opacity-0 invisible'}`}>
                <div className={`position-fixed top-0 start-0 h-100 bg-white shadow transition pt-10
                    ${isSidebarOpen ? 'translate-start-0' : 'translate-start-100'}`}>
                    <Sidebar />
                </div>
            </div>

            {/* desktop */}
            <div className="d-none d-md-block" style={{ width: '80px' }}>
                <Sidebar />
            </div>

                
            <main className="flex-grow-1 min-w-0 pt-md-1 pt-sm-5">
                <Header />
                <div className="p-4">
                    {children}
                </div>
            </main>
        </div>
    )
}