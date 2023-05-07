const TodoFooter = () => {
  const handleAddOnclick = () => {
    console.log("Add new static item ");
  };
  return (
    <>
      <div>todo footer</div>
      <button onClick={handleAddOnclick}>Add new Item</button>
    </>
  );
};

export default TodoFooter;
