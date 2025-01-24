import Image from "next/image"

export default function Header() {
    return(
        <div className="w-100 bg-white d-flex justify-content-between px-4 pt-4">
            <div className="container fs-4 w-100 mx-auto d-flex justify-content-start py-4 position-relative">
                <p className="h-auto position-absolute fw-bold left-0 end-0 top-50 translate-middle-y">Bienvenue Mr ADAO</p> 
            </div>
            <div className="container w-100 mx-auto d-flex justify-content-end align-items-center gap-2">
                <Image alt='Cloche' src='/Cloche.svg' width={40} height={40}/>
                <div className="rounded-pill" style={{ width: '54px', height: '54px' }}>
                    <Image alt='avatar' src='/images/Avatar.jpg' width={54} height={54} color="blue" />
                </div>
                <Image alt='arrow' src='/arrow.svg' width={14} height={8}/>
            </div>
      </div>
    )
}