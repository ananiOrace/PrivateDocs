import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import Image from "next/image"
import SearchBar from "./searchBar"
import { AddModal } from "./addModal"
import { ReactNode } from "react"

export function DashboardHeader({ title1, title2, addModalContent, searchBar, addModalButton } : { title1: string, title2: string, addModalContent: ReactNode, searchBar: string, addModalButton: string }) {
    return(
        <div className="row row-cols-md-1 row-cols-lg-2 w-100 justify-content-between pt-4">
            <div className="row row-cols-2 container fs-4 mx-auto py-4 gap-4">
                <input type="checkbox" className="form-check-input" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
                <div className="d-flex justify-content-center bg-secondary bg-opacity-25 rounded-pill px-2 gap-3">
                    <div className="">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <div className="d-flex align-items-center justify-content-center gap-2 p-2">
                                    <div className="text-secondary fs-5">{title1}</div>
                                    <button className="">
                                        <Image alt='arrow' src='/arrow.svg' width={14} height={8}/>
                                    </button>
                                </div>
                            </DropdownMenu.Trigger>
                        </DropdownMenu.Root> 
                    </div>
                </div>
            </div>

            <div className="d-flex container justify-content-lg-end align-items-center pb-md-4 pb-lg-2 pb-sm-4 gap-2">
                {/* <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button className="bg-primary text-white p-2 fs-5 rounded-pill">
                            {title2}
                        </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />
                        <Dialog.Content className="col col-lg-4 col-sm-8 position-fixed d-flex flex-column justify-content-center top-50 start-50 translate-middle bg-white rounded-4 shadow p-4">
                            <Dialog.Title className="fs-4 fw-bold my-10 text-center">Ajouter une organisation</Dialog.Title>
                            
                            <div>

                                <FloatingLabelInput label="Nom de l'entreprise" placeholder="Nom de l'entreprise" type="text" /> 
                                <FloatingLabelInput label="Nom" placeholder="Nom de l'admin" type="text" /> 
                                <FloatingLabelInput label="Prénom" placeholder="Prénom de l'admin" type="text" /> 
                                <FloatingLabelInput label="Email" placeholder="Adresse e-mail de l'admin" type="email" /> 
                            </div>

                            <div className="d-flex justify-content-center">
                                <button className="bg-primary text-white p-2 fs-5 rounded-pill w-50 text-center">
                                    Ajouter une organisation
                                </button>
                            </div>

                            <Dialog.Close>
                                <Cross1Icon width={20} height={20} className="position-absolute top-0 end-0 m-3 text-muted" />
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root> */}

                <AddModal title={title2} content={addModalContent} button={addModalButton} />

                <SearchBar placeholder={searchBar}  />
            </div>
        </div>
    )
}