import React, { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { v4 as uuid } from "uuid";
import style from "./Grocery.module.css";

export const Grocery = () => {
  const [data, setData] = useState([]);

  const handleadd = (item) => {
    const onload = {
      title: item,
      id: uuid(),
    };
    setData([...data, onload]);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((i) => i.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <div className={style.nav}>
        <h1>Grocery</h1>
      </div >
      <GroceryInput handleitem={handleadd} />
      <div className={style.list}>
        <h2>List of Grocery</h2>
        {data.map((i, id) => (
          <GroceryList {...i} key={id} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};
