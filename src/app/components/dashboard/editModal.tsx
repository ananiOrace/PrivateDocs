import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

export function EditModal({ display, title, content, button } : {display: ReactNode, title: string, content: ReactNode, button: ReactNode}) {
    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {display}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />
                <Dialog.Content className="col col-lg-4 col-sm-8 position-fixed d-flex flex-column justify-content-center top-50 start-50 translate-middle bg-white rounded-4 shadow p-4">
                    <Dialog.Title className="fs-4 fw-bold my-10 text-center">{title}</Dialog.Title>
                    
                    {content}
                    
                    {button}

                    <Dialog.Close>
                        <Cross1Icon width={20} height={20} className="position-absolute top-0 end-0 m-3 text-muted" />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}