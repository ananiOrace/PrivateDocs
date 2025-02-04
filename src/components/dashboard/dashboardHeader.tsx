import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import SearchBar from "./searchBar";
import { AddModal } from "./addModal";
import { ReactNode } from "react";

export function DashboardHeader({
  title1,
  title2,
  addModalContent,
  searchBar,
  addModalButton,
  isSelected,
  onSelectAll,
}: {
  title1: string;
  title2: string;
  addModalContent: ReactNode;
  searchBar: string;
  addModalButton: string;
  isSelected: boolean;
  onSelectAll: (checked: boolean) => void;
}) {
  return (
    <div className="row row-cols-md-1 row-cols-lg-2 w-100 justify-content-between pt-4">
      <div className="row row-cols-2 container fs-4 mx-auto py-4 gap-4">
        <input
          type="checkbox"
          className="form-check-input"
          style={{ width: "24px", height: "24px", borderRadius: "6px" }}
          checked={isSelected}
          onChange={(e) => onSelectAll(e.target.checked)}
        />
        <div className="d-flex justify-content-center bg-secondary bg-opacity-25 rounded-pill px-2 gap-3">
          <div className="">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <div className="d-flex align-items-center justify-content-center gap-2 p-2">
                  <div className="text-secondary fs-5">{title1}</div>
                  <button className="">
                    <Image alt="arrow" src="/arrow.svg" width={14} height={8} />
                  </button>
                </div>
              </DropdownMenu.Trigger>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>

      <div className="d-flex container justify-content-lg-end align-items-center pb-md-4 pb-lg-2 pb-sm-4 gap-2">
        <AddModal
          title={title2}
          content={addModalContent}
          button={addModalButton}
        />

        <SearchBar placeholder={searchBar} />
      </div>
    </div>
  );
}
