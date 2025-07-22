import EmptyView from "./EmptyView";

export default function ItemList({ handleDeleteItem, items, handleToggle }) {
  return (
    <ul>
      {items.length === 0 ? <EmptyView /> : null}
      {items.map((item) => (
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
