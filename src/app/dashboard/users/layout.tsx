'use client';
import { usePathname } from "next/navigation";

import User from "./page";
import UserDetails from "./details/page";
import UserManagement from "./management/page";

export default function Users() {
    const pathname = usePathname()
    console.log("lien: ", pathname)

    const render = () => {
        switch(pathname) {
            case "/dashboard/users":
                return <User />
            case "/dashboard/users/details":
                return <UserDetails />
            case "/dashboard/users/management":
                return <UserManagement />
            default:
                return (
                    <div>Null default</div>
                )
        }
    }

    return(
        <main>
            {render()}
        </main>
    )
}