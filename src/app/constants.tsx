import { statsType } from "./types";
import { tableDatasTypes, adminDatasTypes, tableHeaderTypes } from "./types";

export const statsData: statsType[] = [
  { id: 1, title: 'Organisations', value: 48, icon: '/buildings.svg', color: 'blue' },
  { id: 2, title: 'Utilisateurs', value: 121, icon: '/people.svg', color: 'blue' },
  { id: 3, title: 'Documents', value: 2584, icon: '/archive.svg', color: 'blue' },
  { id: 4, title: 'Stockage', value: '2.1TB', icon: '/ecart.svg', color: 'blue' }
];



export const adminHeader: tableHeaderTypes[] = [
  {
    label: "checkbox",
    style: "p-1 d-none d-sm-table-cell"
  }, 
  {
    label: "Administrateurs",
    style: "p-3"
  },
  {
    label: "Adresse e-mail",
    style: "p-3 d-none d-lg-table-cell"
  },
  {
    label: "Statut",
    style: "p-3"
  }, 
  {
    label: "",
    style: "p-3"
  }
]

export const orgHeader: tableHeaderTypes[] = [
  {
    label: "checkbox",
    style: "p-1 d-none d-sm-table-cell"
  }, 
  {
    label: "Organisations",
    style: "p-3"
  }, 
  {
    label: "Utilisateurs",
    style: "p-3 d-none d-sm-table-cell"
  }, 
  {
    label: "Administrateurs",
    style: "p-3"
  },
  {
    label: "Adresse e-mail",
    style: "p-3 d-none d-lg-table-cell"
  }, 
  {
    label: "Statut",
    style: "p-3"
  },
]

export const organizationsData: tableDatasTypes[] = [
  {
    id: 1,
    name: "Tech Solutions",
    users: 25,
    admin: { name: "John Doe", initials: "JD" },
    email: "contact@techsolutions.com",
    status: "active"
  },
  {
    id: 2,
    name: "Digital Services",
    users: 18,
    admin: { name: "Mary Smith", initials: "MS" },
    email: "info@digitalservices.com",
    status: "inactive"
  },
  {
    id: 3,
    name: "Cloud Systems",
    users: 32,
    admin: { name: "Robert Brown", initials: "RB" },
    email: "contact@cloudsystems.com",
    status: "pending"
  }
];

export const adminData: adminDatasTypes[] = [
  {
    id: 1,
    admin: { name: "John Doe", initials: "JD" },
    email: "contact@techsolutions.com",
    status: "active"
  },
  {
    id: 2,
    admin: { name: "Mary Smith", initials: "MS" },
    email: "info@digitalservices.com",
    status: "inactive"
  },
  {
    id: 3,
    admin: { name: "Robert Brown", initials: "RB" },
    email: "contact@cloudsystems.com",
    status: "pending"
  }
];