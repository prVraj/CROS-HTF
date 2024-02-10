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
        { id: 5, name: "Item 5", price: 30 },
        { id: 6, name: "Item 6", price: 35 },
      ]
    },
    {
      id: 3,
      name: "Category 3",
      items: [
        { id: 4, name: "Item 4", price: 25 },
        { id: 5, name: "Item 5", price: 30 },
        { id: 6, name: "Item 6", price: 35 },
      ]
    },
    {
      id: 4,
      name: "Category 4",
      items: [
        { id: 4, name: "Item 4", price: 25 },
        { id: 5, name: "Item 5", price: 30 },
        { id: 6, name: "Item 6", price: 35 },
      ]
    }
  ];

  const [show, setShow] = useState(false);

//   return (
//     <div class="grid sm:grid-cols-2 grid-cols-1 items-center">
//       {menu.map((category) => (
//         <div >
//         <div key={category.id}>
//           <h2 className="sm:text-[45px] text-[35px] font-bold text-center">
//             {category.name}
//           </h2>
//           <div className="mx-auto max-w-xs px-8">
//             <p className="text-center font-semibold text-gray-600">
//               Pay once, own it forever
//             </p>
//             <button
//               className="mt-6 w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700"
//               onClick={() => setShow(!show)}
//             >
//               {show ? "Hide Items" : "Show Items"}
//             </button>
//             {show && <Items dishes={category.items} />}
//           </div>
//         </div>
//         </div
//       ))}
//     </div>
//     </div>
    
//   );
// }/

return (
 
  <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
  {menu.map((category) => (
    <div key={category.id} className="p-4">
      <div>
        <h2 className="sm:text-3xl text-2xl font-bold text-center">
          {category.name}
        </h2>
        <div className="mx-auto max-w-xs px-8">
          <p className="text-center font-semibold text-gray-600">
            Pay once, own it forever
          </p>
          <button
            className="mt-6 w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700"
            onClick={() => setShow(!show)}
          >
            {show ? "Hide Items" : "Show Items"}
          </button>
          {show && <Items dishes={category.items} />}
        </div>
      </div>
    </div>
  ))}
</div>
);
}
