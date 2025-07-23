// import { useContext } from "react";
import Button from "./Button";
// import { ItemsContext } from "../contexts/ItemContextProvider";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  // const {
  //   handleMarkAllAsComplete,
  //   handleMarkAllAsIncomplete,
  //   handleResetToInitial,
  //   handleRemoveAllItems,
  // } = useContext(ItemsContext);

  const handleMarkAllAsComplete = useItemsStore(
    (state) => state.handleMarkAllAsComplete
  );

  const handleMarkAllAsIncomplete = useItemsStore(
    (state) => state.handleMarkAllAsIncomplete
  );
  const handleResetToInitial = useItemsStore(
    (state) => state.handleResetToInitial
  );
  const handleRemoveAllItems = useItemsStore(
    (state) => state.handleRemoveAllItems
  );

  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
