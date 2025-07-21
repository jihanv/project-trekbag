import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initalItems } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initalItems);
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} setItems={setItems} />
        <Sidebar setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
