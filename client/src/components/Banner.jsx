// Banner Component
import React from 'react';

function registerUser() {
  const NAME = document.getElementById("Name")?.value;
  console.log(NAME);
  if (NAME) {
    fetch("http://localhost:8000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: NAME }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    const scrollAmount = 500; // Adjust this value as needed

    // Scroll the window to the specified amount
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  } else {
    alert("Name is Required...!!!");
  }
}

  const Banner = () => {

  return (
    <section
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full h-full  bg-[rgba(0,0,0,0.5)]">
        <header className="max-w-[1170px] mx-auto">
          <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-10 py-15">
            <figure>
              50
              <img src="Images/logo.png" className="w-48" alt="" />
            </figure>
          </div>
        </header>
        <div className="max-w-[1170px] mx-auto py-50 text-center text-white pt-[20%]">
          <h1 className="sm:text-5xl text-2xl font-bold ">
            Contactless Restaurant Ordering System
          </h1>
          <h4 className="text-xl py-5">
            A contactless restaurant ordering system revolutionizes the dining
            experience by leveraging technology to enhance convenience and
            safety for both customers and staff.
          </h4>
          <p className="text-xl">
            With features like order customization, contactless payments, and
            seamless integration with POS systems, restaurants can streamline
            operations while catering to evolving customer preferences in an
            increasingly digital world.
          </p>
          <div className="max-w-[1170px] mx-auto flex justify-center items-center gap-4">
            <label htmlFor="name" className="text-white">
              Name:
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 bg-white text-black"
              style={{ caretColor: "blue" }} // Set caret color to blue
            />
            <button
              onClick={registerUser}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
            >
              Order Food
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  };


export default Banner;
