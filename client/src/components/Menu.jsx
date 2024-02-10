import React, { useState } from 'react';

const RestaurantMenu = () => {
  const [starters, setStarters] = useState([
    { id: 1, name: 'Caesar Salad', description: 'Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.', price: 8, quantity: 0 },
    { id: 2, name: 'Bruschetta', description: 'Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.', price: 7, quantity: 0 },
    { id: 3, name: 'Garlic Bread', description: 'Toasted bread rubbed with garlic and topped with butter or olive oil.', price: 5, quantity: 0 }
  ]);

  const [mainCourses, setMainCourses] = useState([
    { id: 4, name: 'Spaghetti Bolognese', description: 'Spaghetti pasta with rich tomato and meat sauce.', price: 12, quantity: 0 },
    { id: 5, name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection, served with lemon and herb butter.', price: 15, quantity: 0 },
    { id: 6, name: 'Chicken Alfredo', description: 'Fettuccine pasta with creamy Alfredo sauce and grilled chicken breast.', price: 14, quantity: 0 }
  ]);

  const [desserts, setDesserts] = useState([
    { id: 7, name: 'Tiramisu', description: 'Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.', price: 9, quantity: 0 },
    { id: 8, name: 'Cheesecake', description: 'Classic New York-style cheesecake topped with fruit compote.', price: 10, quantity: 0 },
    { id: 9, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.', price: 8, quantity: 0 }
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleIncrement = (item) => {
    const updatedItems = [...starters, ...mainCourses, ...desserts].map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
    updateMenu(updatedItems);
  };

  const handleDecrement = (item) => {
    const updatedItems = [...starters, ...mainCourses, ...desserts].map(i =>
      i.id === item.id && i.quantity > 0 ? { ...i, quantity: i.quantity - 1 } : i
    );
    updateMenu(updatedItems);
  };

  const updateMenu = (updatedItems) => {
    const startersCount = starters.reduce((acc, item) => acc + item.quantity, 0);
    const mainCoursesCount = mainCourses.reduce((acc, item) => acc + item.quantity, 0);
    const dessertsCount = desserts.reduce((acc, item) => acc + item.quantity, 0);

    const newStarters = updatedItems.slice(0, starters.length);
    const newMainCourses = updatedItems.slice(starters.length, starters.length + mainCourses.length);
    const newDesserts = updatedItems.slice(starters.length + mainCourses.length);

    setStarters(newStarters);
    setMainCourses(newMainCourses);
    setDesserts(newDesserts);

    const selectedItems = updatedItems.filter(item => item.quantity > 0);
    setSelectedItems(selectedItems);
  };

  const handleOrderSubmit = () => {
    // Format the selected items for submission
    const orderData = selectedItems.map(item => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price * item.quantity // Calculate total price for each item
    }));

    // Send a POST request to the server with the order data
    fetch('/orders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
    .then(response => {
      // Handle response
      console.log('Order submitted successfully');
    })
    .catch(error => {
      // Handle error
      console.error('Error submitting order:', error);
    });
  };

  const renderItems = (items) => {
    return items.map(item => (
      <div key={item.id} className="border-b border-gray-300 py-2">
        <div className="flex justify-between items-center">
          <span>{item.name}</span>
          <div className="flex items-center">
            <button onClick={() => handleDecrement(item)} className="bg-gray-300 px-2 py-1 rounded-md">-</button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => handleIncrement(item)} className="bg-gray-300 px-2 py-1 rounded-md">+</button>
          </div>
        </div>
        {item.quantity > 0 && <div>Price: ${item.price * item.quantity}</div>}
      </div>
    ));
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Starters</h2>
        {renderItems(starters)}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Main Courses</h2>
        {renderItems(mainCourses)}
      </div>
      <div>
        <h2 className="text-xl font-semibold">Desserts</h2>
        {renderItems(desserts)}
      </div>
      <div className="mt-4">
        <button onClick={handleOrderSubmit} disabled={selectedItems.length === 0} className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50">Order</button>
      </div>
    </div>
  );
};

export default RestaurantMenu;
