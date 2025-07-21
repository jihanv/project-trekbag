import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initalItems } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initalItems);

  const handleAddItem = (itemText) => {
    const itemToAdd = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    const newItems = [...items, itemToAdd];
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
