"use client";
import { DashboardHeader } from "@/components/dashboard/dashboardHeader";
import { adminData, adminHeader } from "@/app/constants";
import FloatingLabelInput from "@/components/floatingLabelInput";
import Table from "@/components/dashboard/tables";
import * as Form from "@radix-ui/react-form";
import UseSelection from "@/hook/useSelection";

export default function User() {
  const { handleSelectAll, handleSelectItem, isAllSelected, selectedItems } =
    UseSelection({
      items: adminData,
      getItemId: (item) => item.id,
    });

  return (
    <div className="w-100 mt-4 px-4">
      <DashboardHeader
        title1="Sélectioner une action"
        title2="Ajouter un admin"
        searchBar="Rechercher un admin"
        isSelected={isAllSelected}
        onSelectAll={handleSelectAll}
        addModalContent={
          <Form.Root>
            <FloatingLabelInput
              label="Nom"
              placeholder="Nom de l'admin"
              type="text"
            />
            <FloatingLabelInput
              label="Prénom"
              placeholder="Prénom de l'admin"
              type="text"
            />
            <FloatingLabelInput
              label="Email"
              placeholder="Adresse e-mail de l'admin"
              type="email"
            />
          </Form.Root>
        }
        addModalButton="Ajouter un admin"
      />

      <Table
        headers={adminHeader}
        data={adminData}
        actions={{ edit: true, delete: true }}
        dataType="admin"
        onSelect={handleSelectItem}
        selectedItems={selectedItems}
      />
    </div>
  );
}
