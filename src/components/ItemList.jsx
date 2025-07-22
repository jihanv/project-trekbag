import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsContext } from "../lib/hooks";

const options = [
  {
    value: "default",
    label: "Sort by default",
  },
  {
    value: "packed",
    label: "Sort by packed",
  },
  {
    value: "unpacked",
    label: "Sort by unpacked",
  },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const { items, handleDeleteItem, handleToggle } = useItemsContext();

  const sorted = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );
  return (
    <ul className>
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            defaultValue={options[0]}
            onChange={(option) => setSortBy(option.value)}
            options={options}
          />
        </section>
      ) : null}

      {sorted.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

function Item({ onDeleteItem, item, onToggle }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggle(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
