import { useState } from "react";
import { UseSelectionProps } from "@/app/types";

export default function UseSelection<T>({
  items,
  getItemId,
}: UseSelectionProps<T>) {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const selection = new Set(items.map((item) => getItemId(item)));
      setSelectedItems(selection);
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleSelectItem = (id: number, checked: boolean) => {
    const selection = new Set(selectedItems);
    if (checked) {
      selection.add(id);
    } else {
      selection.delete(id);
    }
    setSelectedItems(selection);
  };

  const isAllSelected = items.length > 0 && selectedItems.size === items.length;

  return {
    handleSelectAll,
    handleSelectItem,
    isAllSelected,
    selectedItems,
  };
}
