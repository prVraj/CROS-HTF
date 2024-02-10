import React, { useState } from 'react';

const RestaurantMenu = () => {
  const [starters, setStarters] = useState([
    { id: 1, name: 'Caesar Salad', description: 'Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.' },
    { id: 2, name: 'Bruschetta', description: 'Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.' },
    { id: 3, name: 'Garlic Bread', description: 'Toasted bread rubbed with garlic and topped with butter or olive oil.' }
  ]);

  const [mainCourses, setMainCourses] = useState([
    { id: 1, name: 'Spaghetti Bolognese', description: 'Spaghetti pasta with rich tomato and meat sauce.' },
    { id: 2, name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection, served with lemon and herb butter.' },
    { id: 3, name: 'Chicken Alfredo', description: 'Fettuccine pasta with creamy Alfredo sauce and grilled chicken breast.' }
  ]);

  const [desserts, setDesserts] = useState([
    { id: 1, name: 'Tiramisu', description: 'Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.' },
    { id: 2, name: 'Cheesecake', description: 'Classic New York-style cheesecake topped with fruit compote.' },
    { id: 3, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.' }
  ]);

  const [expandedSection, setExpandedSection] = useState(null);

  const handleExpand = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const renderItems = (items) => {
    return items.map(item => (
      <div key={item.id} className="border-b border-gray-300 py-2">
        <div className="flex justify-between">
          <span>{item.name}</span>
          <button onClick={() => console.log(item.description)} className="text-blue-500">View Details</button>
        </div>
        {expandedSection === item.id &&
          <div className="text-sm text-gray-600">{item.description}</div>
        }
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
    </div>
  );
};

export default RestaurantMenu;
