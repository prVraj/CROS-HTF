import React, { useState } from "react";

export default function Items({ dishes }) {
  const [selectedDishes, setSelectedDishes] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelect = (event, dish) => {
    const selectedPrice = parseFloat(event.target.value);
    setSelectedDishes({ ...selectedDishes, [dish.id]: selectedPrice });
    calculateTotalPrice();
  };

  const calculateTotalPrice = () => {
    const totalPrice = Object.values(selectedDishes).reduce(
      (acc, price) => acc + price,
      0
    );
    setTotalPrice(totalPrice);
  };

  const selectOptions = (dish) => (
    <option key={dish.id} value={dish.price}>
      {dish.name} - ${dish.price}
    </option>
  );

  const items = dishes.map((dish) => (
    <div key={dish.id} className="flex justify-between items-center">
      <select
        className="text-xl font-bold"
        onChange={(event) => handleSelect(event, dish)}
      >
        <option value="" className="items-center">Select {dish.name}</option>
        {selectOptions(dish)}
      </select>
    </div>
  ));

  return items;
}