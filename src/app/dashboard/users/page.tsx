import { DashboardHeader } from "@/components/dashboard/dashboardHeader";
import { adminData, adminHeader } from "@/app/constants";
import FloatingLabelInput from "@/components/floatingLabelInput";
import Table from "@/components/dashboard/tables";
import * as Form from "@radix-ui/react-form";

export default function User() {
  return (
    <div className="w-100 mt-4 px-4">
      <DashboardHeader
        title1="Sélectioner une action"
        title2="Ajouter un admin"
        searchBar="Rechercher un admin"
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
      />
    </div>
  );
}
