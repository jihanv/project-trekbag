import { useItemsContext } from "../lib/hooks";

export default function Counter() {
  const { items } = useItemsContext();
  return (
    <p>
      <b>{items.filter((item) => item.packed).length}</b>/{items.length} items
      packed
    </p>
  );
}
