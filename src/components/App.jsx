import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initalItems } from "../lib/constants";

function App() {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromLocalStorage || initalItems);

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
    setItems(initalItems);
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
    <>
      <BackgroundHeading />
      <main>
        <Header
          packed={items.filter((item) => item.packed).length}
          total={items.length}
        />
        <ItemList
          handleDeleteItem={handleDeleteItem}
          items={items}
          handleToggle={handleToggle}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
