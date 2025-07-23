import { create } from "zustand";
import { initialItems } from "../lib/constants";

export const useItemsStore = create((set) => ({
  items: initialItems,

  handleRemoveAllItems: () => {
    return set(() => ({ items: [] }));
  },

  handleResetToInitial: () => {
    return set(() => ({ items: initialItems }));
  },

  handleMarkAllAsIncomplete: () => {
    return set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: false };
      });
      return { items: newItems };
    });
  },

  handleMarkAllAsComplete: () => {
    return set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: true };
      });
      return { items: newItems };
    });
  },

  handleAddItem: (itemText) => {
    const itemToAdd = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    set((state) => {
      return { items: [...state.items, itemToAdd] };
    });
  },

  handleDeleteItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  },

  handleToggle: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { items: newItems };
    });
  },
}));
