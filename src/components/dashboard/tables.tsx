/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Badge, Avatar, } from "@radix-ui/themes";
import { TableProps, TableDataItem } from "@/app/types";
import { EditModal } from "./editModal";
import FloatingLabelInput from "../floatingLabelInput";
import * as Form from '@radix-ui/react-form';
import { DeleteModal } from "./deleteModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";


export default function Table({ 
    headers, 
    data: initialData, 
    dataType,
    actions = { edit: false, delete: false },
  }: TableProps) {
    const [data, setData] = useState<TableDataItem[]>(initialData)
    const [editingItem, setEditingItem] = useState<TableDataItem | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleDelete = (itemId: number) => {
        setData(data.filter(item => item.id !== itemId))
        toast.success('Supression Réussie')
    }

    const handleEdit = (item: TableDataItem, updatedValues: Partial<TableDataItem>) => {
        const upadatedData = data.map(dataItem =>
            dataItem.id === item.id ? {...dataItem, ...updatedValues} : dataItem
        )
        setData(upadatedData)
        setEditingItem(null)
        setIsModalOpen(false)
        toast.success('Modification Réussie')
    }

    const renderCell = (item: any, header: string) => {
        switch(header) {
            case 'Organisations':
                return item.name
            case 'Utilisateurs':
                return item.users
            case 'Adresse e-mail':
                return item.email
            case 'checkbox':
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

      const renderEdit = (item: TableDataItem) => {
        const getStatusValue = (status: string) => {
            switch(status) {
                case 'active': return 'actif';
                case 'inactive': return 'inactif';
                case 'pending': return 'en attente';
                default: return status
            }
        }
        const getStatusLabel = (status: string | undefined) => {
            switch(status) {
                case 'actif': return 'active';
                case 'inactif': return 'inactive';
                case 'en attente': return 'pending';
            }
        }
        return(
            <Form.Root onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget);
                const updatedValues = {
                    admin: {
                        name: formData.get('nom') + ' ' + formData.get('prenom'),
                        initials:(formData.get('nom')?.toString()?.[0] || '') + (formData.get('prenom')?.toString()?.[0] || '')
                    },
                    email: formData.get('email')?.toString() || '',
                    status: getStatusLabel(formData.get('status')?.toString())
                }
                handleEdit(item, updatedValues)
            }}
            >
                <FloatingLabelInput label="Nom" placeholder="Modifier le nom" type="text"  name="nom" defaultValue={item.admin.name.split(' ')[0]} />
                <FloatingLabelInput label="Prénom" placeholder="Modifier le prénom" type="text" name="prenom" defaultValue={item.admin.name.split(' ')[1]} />
                <FloatingLabelInput label="Email" placeholder="Modifier l'email" type="text" name="email" defaultValue={item.email} />
                
                {dataType == "admin" && (<FloatingLabelInput 
                    label="Statut" 
                    type="select" 
                    name="status"
                    options={["actif", "inactif", "en attente"]}
                    defaultValue={getStatusValue(item.status)}
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
                <div className="d-flex justify-content-center">
                    <button type="submit" className="bg-primary text-white p-2 fs-5 rounded-pill w-50 text-center">
                        {dataType === "admin" ? "Modifier un Admin" : "Modifier une organisation"}
                    </button>
                </div>
            </Form.Root>
        )
      }

    return(
        <div className="table-responsive">
            <div className="d-inline-block w-100">
                <table className="w-100 bg-primary bg-opacity-25" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                <thead style={{ height: '40px' }}>
                    <tr>
                    {headers.map((header, index) => (
                        <th key={index} className={header.style || 'p-3'}>
                            {header.label === "checkbox" ? "" : header.label}
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
                            {
                                header.label === "checkbox"
                                ?
                                renderCell(item, header.label)
                                :
                                <Link href={"/dashboard/users/details"} className="text-secondary" style={{ textDecoration: 'none' }}>
                                    {renderCell(item, header.label)}
                                </Link>
                            }
                        </td>
                        ))}
                        {(actions.edit || actions.delete) && (
                        <td className="p-3">
                            {actions.edit && (
                                <EditModal 
                                    display={
                                        <button className="btn btn-link text-muted p-0"
                                            onClick={() => setEditingItem(item)}
                                        >
                                            <Pencil1Icon width={24} height={24} />
                                        </button>
                                    }
                                    title={dataType=="admin" ? "Modifier un Admin" : "Modifier une organisation"} 
                                    content={
                                        editingItem && renderEdit(editingItem)
                                    } 
                                    button={
                                        null
                                    } 
                                    isOpen={isModalOpen}
                                    onOpenChange={setIsModalOpen}
                                />
                            )}
                            {actions.delete && (
                                
                                <DeleteModal 
                                    title={dataType === "admin" ? "Supprimer un Admin" : "Supprimer une organisation"} 
                                    content={dataType === "admin" ? "Supprimer un Admin" : "Supprimer une organisation"} 
                                    name={item.admin.name} 
                                    onDelete={() => handleDelete(item.id)}
                                />
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