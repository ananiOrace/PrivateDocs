import Table from "@/components/dashboard/tables"
import { organizationsData, orgHeader } from "@/app/constants"
import { DashboardHeader } from "@/components/dashboard/dashboardHeader"
import FloatingLabelInput from "@/components/floatingLabelInput"
import * as Form from "@radix-ui/react-form"

export default function Buildings () {
    return(
        <div className="w-100 mt-4 px-4">

            <DashboardHeader 
                title1="Sélectioner une action" 
                title2="Ajouter une organisation" 
                searchBar="Rechercher une organisation" 
                addModalContent={
                    <Form.Root>
                        <FloatingLabelInput label="Nom de l'entreprise" placeholder="Nom de l'entreprise" type="text" /> 
                        <FloatingLabelInput label="Nom" placeholder="Nom de l'admin" type="text" /> 
                        <FloatingLabelInput label="Prénom" placeholder="Prénom de l'admin" type="text" /> 
                        <FloatingLabelInput label="Email" placeholder="Adresse e-mail de l'admin" type="email" />
                    </Form.Root>
                }
                addModalButton="Ajouter une organisation"
            />
            
            <Table headers={orgHeader} data={organizationsData} dataType="organisation" actions={{ edit: false, delete: true}} />

        </div>
    )
}