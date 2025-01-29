/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from "react";
import { EditModal } from "@/components/dashboard/editModal";
import FloatingLabelInput from "@/components/floatingLabelInput";
import * as Form from "@radix-ui/react-form";
import { Close } from "@radix-ui/react-dialog"; 

export default function UserManagement() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <div className="w-100 border h-100 mt-4">
            <div className="col col-12 d-flex justify-content-center align-items-center bg-primary bg-opacity-25 position-relative">
                <div className="fs-5 py-4">Pentatonic</div>
                <button className="position-absolute d-flex justify-content-center align-items-center end-10 h-50 fs-5 py-2 px-4 rounded-pill bg-secondary bg-opacity-25 text-white">
                    Annuler
                </button>
            </div>

            <div className="px-4 pt-4">
                <div className="d-flex row row-cols-lg-2 row-cols-sm-1">
                    <div className="w-lg-50 w-md-50 w-sm-100 py-3">
                        <Form.Root>
                            <FloatingLabelInput label="Nom de l'organisation" placeholder=".." type="text" />
                        </Form.Root>
                    </div>
                    <div className="w-lg-50 w-md-50 w-sm-100 py-3">
                        <Form.Root>
                            <FloatingLabelInput label="Adresse e-mail de l'admin" placeholder=".." type="text" />
                        </Form.Root>
                    </div>
                    <div className="w-lg-50 w-md-50 w-sm-100 py-3">
                        <Form.Root>
                            <FloatingLabelInput label="Nom de l'admin" placeholder=".." type="text" />
                        </Form.Root>
                    </div>
                    <div className="w-lg-50 w-md-50 w-sm-100 py-3">
                        <Form.Root>
                            <FloatingLabelInput label="Prénom de l'admin" placeholder=".." type="text" />
                        </Form.Root>
                    </div>
                </div>
            </div>

            <div className="px-4">
                <div className="d-flex row row-cols-lg-2 row-cols-sm-1">
                    <div className="d-flex col col-3 col-sm-12 py-3 gap-4">
                        <EditModal 
                            display={
                                <button className="bg-primary text-white py-2 px-4 fs-5 rounded-pill">
                                    Modifier
                                </button>
                            }
                            title="Modifier un Admin" 
                            content={
                                <div className="d-flex justify-content-center">
                                    <p className="fs-5">Voulez-vous modifier l'admin ?</p>
                                </div>
                            } 
                            button={
                                <div className="d-flex justify-content-center gap-3 mt-3">
                                    <Close className="bg-primary bg-opacity-25 text-secondary p-2 fs-5 w-50 w-md-25 rounded-pill text-center">
                                        <button>
                                            Non
                                        </button>
                                    </Close>
            
                                
                                    <button className="bg-danger text-white p-2 fs-5 rounded-pill w-50 text-center">
                                        Oui
                                    </button>
                                </div>
                            } 
                            isOpen={isModalOpen}
                            onOpenChange={setIsModalOpen}
                        />

                        <EditModal 
                            display={
                                <button className="border border-2 border-primary bg-white text-primary py-2 px-4 fs-5 rounded-pill">
                                    Mot de passe
                                </button>
                            }
                            title="Réinitialiser le mot de passe" 
                            content={
                                <div className="d-flex justify-content-center">
                                    <p className="fs-5">Voulez-vous réinitialiser le mot de passe ?</p>
                                </div>
                            } 
                            button={
                                <div className="d-flex justify-content-center gap-3 mt-3">
                                    <Close className="bg-primary bg-opacity-25 text-secondary p-2 fs-5 w-50 w-md-25 rounded-pill text-center">
                                        <button>
                                            Non
                                        </button>
                                    </Close>
            
                                    <button className="bg-danger text-white p-2 fs-5 rounded-pill w-50 text-center">
                                        Oui
                                    </button>
                                </div>
                            } 
                            isOpen={isModalOpen}
                            onOpenChange={setIsModalOpen}
                        />

                        <EditModal 
                            display={
                                <button className="bg-danger text-white py-2 px-4 fs-5 rounded-pill">
                                    Bloquer
                                </button>
                            }
                            title="Bloquer l'admin" 
                            content={
                                <div className="d-flex justify-content-center">
                                    <p className="fs-5">Voulez-vous bloquer l'admin' ?</p>
                                </div>
                            } 
                            button={
                                <div className="d-flex justify-content-center gap-3 mt-3">
                                    <Close className="bg-primary bg-opacity-25 text-secondary p-2 fs-5 w-50 w-md-25 rounded-pill text-center">
                                        <button>
                                            Non
                                        </button>
                                    </Close>
            
                                    <button className="bg-danger text-white p-2 fs-5 rounded-pill w-50 text-center">
                                        Oui
                                    </button>
                                </div>
                            } 
                            isOpen={isModalOpen}
                            onOpenChange={setIsModalOpen}
                        />
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}