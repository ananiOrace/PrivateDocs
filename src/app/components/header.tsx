import Image from "next/image";

export default function Header() {
    return(
        <div className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto text-center d-flex align-items-center justify-content-center">
          <Image 
            src="/logo.svg"
            alt="Private Docs"
            width={163}
            height={30}
          />
        </div>
      </div>
    )
}