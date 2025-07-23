// import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

export default function Counter() {
  const items = useItemsStore((state) => state.items);
  // const { items } = useItemsContext();
  return (
    <p>
      <b>{items.filter((item) => item.packed).length}</b>/{items.length} items
      packed
    </p>
  );
}
