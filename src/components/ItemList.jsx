export default function ItemList({ handleDeleteItem, items, handleToggle }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

function Item({ handleDeleteItem, item, handleToggle }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggle(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
