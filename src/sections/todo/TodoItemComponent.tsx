import React from "react";

const TodoItem = ({ item }: any) => {
  const handleRemoveOnClick = () => {
    console.log("remove item");
  };
  return (
    <>
      <div>
        {item.id} - {item.description} - {item.status}
      </div>
      <button onClick={handleRemoveOnClick}>Remove</button>
    </>
  );
};

export default TodoItem;
