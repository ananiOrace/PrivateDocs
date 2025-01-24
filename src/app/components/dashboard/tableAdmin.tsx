import { Badge, Avatar } from "@radix-ui/themes";
import { adminDatasTypes } from "@/app/types";
import { adminHeader, } from "@/app/constants";
import { DeleteModal } from "./deleteModal";
import { EditModal } from "./editModal";
import FloatingLabelInput from "../floatingLabelInput";
import { Pencil1Icon } from "@radix-ui/react-icons";


export default function TableAdmin({ datas }: {datas: adminDatasTypes[]}) {
    return(
        <div className="table-responsive">
                <div className="d-inline-block w-100">
                    <table className="w-100 bg-primary bg-opacity-25" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', }}>
                        <thead className="" style={{ height: '40px' }}>
                            <tr>

                            {adminHeader.map((header, index) => (
                                <th key={index} className={header.style}>
                                    {header.label}
                                </th>
                            ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                        {datas.map((org) => (
                            <tr key={org.id} className="">
                            <td className="p-3">
                                <input type="checkbox" className="form-check-input" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
                            </td>
                            <td className="p-3">
                                <div className="d-flex align-items-center">
                                    <Avatar
                                        fallback={org.admin.initials}
                                        radius="full"
                                        color="blue"
                                        variant="soft"
                                        style={{ width: 40, height: '40px', marginInlineEnd: '10px' }}
                                        className="rounded-pill"
                                    />
                                    {org.admin.name}
                                </div>
                            </td>
                            <td className="p-3">{org.email}</td>
                            <td className="p-3">
                                <Badge variant="soft" radius="full" color={`${org.status === 'active' ? 'green' : 'crimson' }`} className={`rounded-pill px-4 py-2 fs-6 fw-bold 
                            `} >
                                {org.status}
                                </Badge>
                            </td>
                            <td className="p-3">
                                <EditModal 
                                    display={
                                        <button className="btn btn-link text-muted p-0">
                                            <Pencil1Icon width={24} height={24} />
                                        </button>
                                    }
                                    title="Modifier un Admin" 
                                    content={
                                        <FloatingLabelInput label="Nom" placeholder="Modifier le nom" type="text" />
                                    } 
                                    button={
                                        <div className="d-flex justify-content-center">
                                            <button className="bg-primary text-white p-2 fs-5 rounded-pill w-50 text-center">
                                                Modifier un Admin
                                            </button>
                                        </div>
                                    } 
                                />
                                <DeleteModal title="Supprimer un Admin" content="Voulez-vous supprimer l'admin" name={org.admin.name} />
                                
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}