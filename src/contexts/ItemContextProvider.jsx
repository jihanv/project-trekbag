import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemContextProvider({ children }) {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromLocalStorage || initialItems);

  const handleAddItem = (itemText) => {
    const itemToAdd = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    const newItems = [...items, itemToAdd];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggle = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const completed = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(completed);
  };

  const handleMarkAllAsIncomplete = () => {
    const incomplete = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(incomplete);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggle,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
