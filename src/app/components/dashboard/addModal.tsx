import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

export function AddModal({ title, content, button } : {title: string, content: ReactNode, button: string}) {
    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="bg-primary text-white p-2 fs-5 rounded-pill">
                    {title}
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />
                <Dialog.Content className="col col-lg-4 col-sm-8 position-fixed d-flex flex-column justify-content-center top-50 start-50 translate-middle bg-white rounded-4 shadow p-4">
                    <Dialog.Title className="fs-4 fw-bold my-10 text-center">Ajouter une organisation</Dialog.Title>
                    
                    {content}
                    
                    <div className="d-flex justify-content-center">
                        <button className="bg-primary text-white p-2 fs-5 rounded-pill w-50 text-center">
                            {button}
                        </button>
                    </div>

                    <Dialog.Close>
                        <Cross1Icon width={20} height={20} className="position-absolute top-0 end-0 m-3 text-muted" />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}