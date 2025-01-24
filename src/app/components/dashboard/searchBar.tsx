import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { TextField } from "@radix-ui/themes"
import Image from "next/image"

export default function SearchBar({ placeholder } : { placeholder: string }) {
    return(
        <TextField.Root placeholder={placeholder} className="p-2 gap-2 rounded-pill position-relative">
            <TextField.Slot>
                <MagnifyingGlassIcon width={30} height={30} />
            </TextField.Slot>
            <TextField.Slot>
                <button
                    type="button"
                >
                    <Image src='/setting-3.svg' alt='' width={30} height={30} />
                </button>
            </TextField.Slot>
        </TextField.Root>
    )
} 