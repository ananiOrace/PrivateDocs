import { Item } from "./item";
import Image from "next/image";
import { ExitIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Sidebar() {
    return(
        <div className="d-flex flex-column justify-content-between vh-100 position-relative" style={{ width: "80px" }}>
            <div className="position-absolute" style={{ left:15, top:35  }}>
                <Image 
                    alt="Private Docs"
                    width={40}
                    height={45}
                    src={'/private-docs.svg'}
                />
            </div>
        <div className="position-absolute bottom-0 h-[78%] w-100 position-relative" style={{ borderRight: '1px solid #cccccc' }}>

            <div className="mb-2">
                <Item href="/dashboard" type="home" />
            </div>

            <div>
                <Item href="/dashboard/buildings" type="buildings" />
            </div>

            <div className="">
                <Item 
                    href="/dashboard/users" 
                    type="users" 
                    activeRoutes={[
                        "/dashboard/users/details",
                        "/dashboard/users/management"
                    ]}
                />
            </div>
        </div>
        <div className="position-absolute bottom-10 w-100 d-flex align-items-center justify-content-center p-3">
            <Link href={"/auth/login"}>
                <ExitIcon width={30} height={30} />
            </Link>
        </div>
        </div>
    )
}