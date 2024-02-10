import React, { useState } from "react";
import Items from "./Items.jsx";

export default function Cards() {
  const menu = [
    {
      id: 1,
      name: "Category 1",
      items: [
        { id: 1, name: "Item 1", price: 10 },
        { id: 2, name: "Item 2", price: 15 },
        { id: 3, name: "Item 3", price: 20 }
      ]
    },
    {
      id: 2,
      name: "Category 2",
      items: [
        { id: 4, name: "Item 4", price: 25 },
        { id: 5, name: "Item 5", price: 30 }
      ]
    }
  ];

  const [show, setShow] = useState(false);

  const categories = menu.map((category) => {
    const { id, name, items } = category;

    return (
      <div key={id}>
        <h2 className="sm:text-[45px] text-[35px] font-bold text-center">
          {name}
        </h2>
        <div className="px-8">
          <p className="text-center font-semibold text-gray-600">
            Pay once, own it forever
          </p>
          <button
            className="mt-6 w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700"
            onClick={() => setShow(true)}
          />
          {show && <Items dishes={items} />}
        </div>
      </div>
    );
  });

  return categories;
}