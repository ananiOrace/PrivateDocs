'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemTypes } from "@/app/types";
import { HomeIcon } from "@radix-ui/react-icons";
import Image from 'next/image'


export function Item({
    href,
    type,
    activeRoutes
}: itemTypes) {
    const pathname = usePathname()
    const isActive = href == pathname || activeRoutes?.some(route => pathname.startsWith(route))
    return(
        <Link
            href={href}
            className={`d-flex align-items-center justify-content-center p-3 position-relative 
                ${isActive ? 'text-primary' : 'text-secondary'}
            `}
        >
            <div className={`mr-2 ${isActive ? 'active-icon' : 'inactive-icon'}`}>
                
                {type === "home" && (
                    <HomeIcon width={30} height={30} />
                )}
                {type === "users" && (
                    <Image alt='users' src={'/people.svg'} width={30} height={30} />
                )}
                {type === "buildings" && (
                    <Image alt='buildings' src={'/buildings.svg'} width={30} height={30} />
                )}
            </div>
            {
                isActive
                &&
                <div
                    className="position-absolute h-100 bg-primary"
                    style={{ width: '2px', top: 0, right: 0 }}
                >
                </div>
            }
        </Link>
    )
}