import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemContextProvider";

export function useItemsContext() {
  const context = useContext(ItemsContext);
  return context;
}
