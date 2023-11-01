import { list } from "postcss";
import React from "react";

const Cart = ({ selected }) => {
  //   console.log(selected);
  return (
    <div className="py-2">
      {selected.map((select, idx) => (
        <p key={idx}>
          {idx + 1}. {select.courseName}
        </p>
      ))}
    </div>
  );
};

export default Cart;
