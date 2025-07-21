import Button from "./components/Button";

export default function AddItemForm() {
  return (
    <form>
      <h2>Add an item</h2>
      <input type="text" />
      <Button>Add item to list</Button>
    </form>
  );
}
