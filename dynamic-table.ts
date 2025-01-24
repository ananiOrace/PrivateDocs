import React from 'react';
import { Cross1Icon, TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Badge, Avatar } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";



export default function DynamicTable({ 
  headers, 
  data, 
  actions = { edit: false, delete: false },
  onEdit,
  onDelete 
}: TableProps) {
  const renderCell = (item: any, header: string) => {
    switch(header) {
      case 'Administrateurs':
      case 'Administrateur':
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
            color={`${item.status === 'active' ? 'green' : 'crimson'}`} 
            className="rounded-pill px-4 py-2 fs-6 fw-bold"
          >
            {item.status}
          </Badge>
        );
      default:
        return item[header.toLowerCase().replace(/\s/g, '')] || item[header.toLowerCase()] || header;
    }
  };

  return (
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
              {(actions.edit || actions.delete) && <th className="p-3">Actions</th>}
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
                      <button 
                        className="btn btn-link text-muted p-0 me-2"
                        onClick={() => onEdit && onEdit(item)}
                      >
                        <Pencil1Icon width={24} height={24} />
                      </button>
                    )}
                    {actions.delete && (
                      <button 
                        className="btn btn-link text-muted p-0"
                        onClick={() => onDelete && onDelete(item)}
                      >
                        <TrashIcon width={24} height={24} />
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
