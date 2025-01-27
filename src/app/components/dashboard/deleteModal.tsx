import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon, TrashIcon } from "@radix-ui/react-icons";
import { DeleteModalProps } from "@/app/types";


export function DeleteModal({ title, content, name, onDelete } : DeleteModalProps) {
    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="btn btn-link text-muted p-0">
                    <TrashIcon width={24} height={24} />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />
                <Dialog.Content className="col col-lg-4 col-sm-8 position-fixed d-flex flex-column justify-content-center top-50 start-50 translate-middle bg-white rounded-4 shadow p-4">
                    <Dialog.Title className="fs-4 fw-bold my-10 text-center">{title}</Dialog.Title>
                    
                    <div className="d-flex justify-content-center">
                        <p>{content} <span className="fw-bold">{name}</span></p>
                    </div>

                    <div className="d-flex justify-content-center gap-3 mt-3">
                        <Dialog.Close className="bg-primary bg-opacity-25 text-secondary p-2 fs-5 w-50 w-md-25 rounded-pill text-center">
                            Annuler
                        </Dialog.Close>

                        <button className="bg-danger text-white p-2 fs-5 rounded-pill w-50 text-center"
                            onClick={onDelete}
                        >
                            Supprimer
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