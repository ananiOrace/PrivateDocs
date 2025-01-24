/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Badge, Avatar } from "@radix-ui/themes";
import { TableProps } from "@/app/types";
import { EditModal } from "./editModal";
import FloatingLabelInput from "../floatingLabelInput";
import * as Form from '@radix-ui/react-form';
import { DeleteModal } from "./deleteModal";
import Image from "next/image";


export default function Table({ 
    headers, 
    data, 
    dataType,
    actions = { edit: false, delete: false },
  }: TableProps) {

    function convert (data: any) {
        if(typeof data === 'string') return data;
        if(typeof data === 'number') return data.toString();
        if(typeof data === 'boolean') return data.toString();
    }

    // function fetchItem(data)

    const renderCell = (item: any, header: string) => {
        switch(header) {
            case 'Organisations':
                return item.name
            case 'Utilisateurs':
                return item.users
            case 'Adresse e-mail':
                return item.email
            case '':
                return(
                    <input type="checkbox" className="form-check-input" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
                )
            case 'Administrateurs':
                return (
                <div className="d-flex align-items-center">
                    <Avatar
                    fallback={item.admin?.initials || item.initials}
                    radius="full"
                    color="blue"
                    variant="soft"
                    style={{ width: 40, height: '40px', marginInlineEnd: '10px' }}
                    className="rounded-pill"
                    />
                    {item.admin?.name || item.name}
                </div>
                );
            case 'Statut':
                    return (
                    <Badge 
                        variant="soft" 
                        radius="full" 
                        color={`${item.status === 'active' ? 'green' : item.status === 'inactive' ? 'crimson' : 'cyan'}`} 
                        className="rounded-pill px-4 py-2 fs-6 fw-bold"
                    >
                        {item.status === 'active' ? 'Actif' : item.status === 'inactive' ? 'Inactif' : 'En attente'}
                    </Badge>
                    );
          default:
            return ''
        }
      };

    return(
        <div className="table-responsive">
            <div className="d-inline-block w-100">
                <table className="w-100 bg-primary bg-opacity-25" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                <thead style={{ height: '40px' }}>
                    <tr>
                    {headers.map((header, index) => (
                        <th key={index} className={header.style || 'p-3'}>
                        {header.label}
                        </th>
                    ))}
                    {(actions.edit || actions.delete) && <th className="p-3"></th>}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((item, rowIndex) => (
                    <tr key={item.id || rowIndex}>
                        {headers.map((header, colIndex) => (
                        <td key={colIndex} className={header.style || 'p-3'}>
                            {renderCell(item, header.label)}
                        </td>
                        ))}
                        {(actions.edit || actions.delete) && (
                        <td className="p-3">
                            {actions.edit && (
                                <EditModal 
                                    display={
                                        <button className="btn btn-link text-muted p-0">
                                            <Pencil1Icon width={24} height={24} />
                                        </button>
                                    }
                                    title={dataType=="admin" ? "Modifier un Admin" : "Modifier une organisation"} 
                                    content={
                                        <Form.Root>
                                            <FloatingLabelInput label="Nom" placeholder="Modifier le nom" type="text" />
                                            <FloatingLabelInput label="Prénom" placeholder="Modifier le prénom" type="text" />
                                            <FloatingLabelInput label="Email" placeholder="Modifier l'email" type="text" />
                                            
                                            {dataType == "admin" && (<FloatingLabelInput 
                                                label="Statut" 
                                                type="select" 
                                                options={["actif", "inactif", "en attente"]}
                                                button={
                                                    <button
                                                        type="button"
                                                        className="btn position-absolute end-0 top-50 translate-middle-y border-0"
                                                    >
                                                        <Image 
                                                            src="/arrow.svg"
                                                            alt="Private Docs"
                                                            width={25}
                                                            height={5}
                                                        />
                                                    </button>
                                                }
                                            />)}
                                        </Form.Root>
                                    } 
                                    button={
                                        <div className="d-flex justify-content-center">
                                            <button className="bg-primary text-white p-2 fs-5 rounded-pill w-50 text-center">
                                               {dataType === "admin" ? "Modifier un Admin" : "Modifier une organisation"}
                                            </button>
                                        </div>
                                    } 
                                />
                            )}
                            {actions.delete && (
                                
                                <DeleteModal title={dataType === "admin" ? "Supprimer un Admin" : "Supprimer une organisation"} content={dataType === "admin" ? "Supprimer un Admin" : "Supprimer une organisation"} name={item.admin.name} />
                            )}
                        </td>
                        )}
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}