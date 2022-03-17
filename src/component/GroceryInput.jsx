import React, { useState } from "react";
import style from "./GroceryInput.module.css";

export const GroceryInput = ({ handleitem }) => {
  const [item, setItem] = useState("");
  return (
    <div className={style.inputbox}>
      <input
        placeholder="Add Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          if (item !== "") {
            handleitem(item);
            setItem("");
          } else {
            alert("Enter some Grocery");
          }
        }}
      >
        ADD
      </button>
    </div>
  );
};
