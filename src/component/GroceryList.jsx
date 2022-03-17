import React from "react";

export const GroceryList = ({ title, id, handleDelete }) => {
  return (
    <div>
      <h1>
        {title}
        <button onClick={() => handleDelete(id)}>Toggle delete</button>
      </h1>
    </div>
  );
};
