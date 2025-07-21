import { useRef, useState } from "react";
import Button from "./components/Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Basic Validation
    if (itemText === "") {
      alert("Item cannot be empty");
      inputRef.current.focus();
      return;
    }
    setItems((prev) => [
      ...prev,
      { id: new Date().getTime(), name: itemText, packed: false },
    ]);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        type="text"
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <Button>Add item to list</Button>
    </form>
  );
}
