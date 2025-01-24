import * as Dialog from "@radix-ui/react-dialog";
import { CheckIcon } from "@radix-ui/react-icons";

export function SuccessModal() {
    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div></div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />
                <Dialog.Content className="col col-lg-4 col-sm-8 position-fixed d-flex flex-column justify-content-center top-50 start-50 translate-middle bg-white rounded-4 shadow p-4">
                    <Dialog.Title className="fs-4 fw-bold my-10 text-center"> </Dialog.Title>
                    
                    <div className="d-flex align-items-center justify-content-center p-2 bg-success bg-opacacity-25"
                        style={{ width: '50px', height: '50px', borderRadius: '100%' }}
                    >
                        <div className="d-flex align-items-center justify-content-center p-4 bg-success bg-opacacity-25"
                            style={{ width: '45px', height: '45px', borderRadius: '100%' }}
                        >
                            <CheckIcon color="white" width={30} height={30} />
                        </div>
                    </div>

                    {/* <Dialog.Close>
                        <Cross1Icon width={20} height={20} className="position-absolute top-0 end-0 m-3 text-muted" />
                    </Dialog.Close> */}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}