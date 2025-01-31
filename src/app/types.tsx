import { ReactNode } from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface itemTypes {
    href: string,
    type: string,
    activeRoutes?: string[]
}

export interface statsType {
    id: number,
    title: string,
    value: string | number,
    icon: string,
    color: string
}

export interface adminDatasTypes {
    id: number,
    admin: {
      name: string,
      initials: string
    },
    email: string,
    status: string
}

export interface tableDatasTypes {
  id: number,
  name: string,
  users: number,
  admin: {
    name: string,
    initials: string
  },
  email: string,
  status: string
}

export interface TableProps {
  headers: tableHeaderTypes[];
  data: any[];
  dataType: string;
  actions?: {
    edit?: boolean;
    delete?: boolean;
  };
}

export type InputType = 'text' | 'email' | 'password' | 'select';

export interface FloatingLabelInputProps {
  label: string;
  placeholder?: string;
  type: InputType;
  options?: string[]; 
  showPasswordToggle?: boolean; 
  button?: ReactNode,
  name?: string,
  defaultValue?: any
}

export interface tableHeaderTypes {
    label: string,
    style?: string
}

export interface DeleteModalProps {
    title: string, 
    content: string, 
    name: string, 
    onDelete: () => void
}

export interface TableDataItem {
  id: number,
  name?: string,
  users?: number,
  admin: { name: string, initials: string },
  email: string,
  status: string,
}

export type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  width: number;
  isMobile: boolean;
  toggleSidebar: () => void | undefined;
};
