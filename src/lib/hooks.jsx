import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemContextProvider";

export function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContext Provider"
    );
  }
  return context;
}
