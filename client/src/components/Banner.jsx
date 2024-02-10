// Banner Component
import React from 'react';

const Banner = () => (
  <section className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
    <div className="w-full h-full  bg-[rgba(0,0,0,0.5)]">
      <header className="max-w-[1170px] mx-auto">
        <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-10 py-15">
          <figure>50
            <img src="Images/logo.png" className="w-48" alt="" />
          </figure>
        </div>
      </header>
      <div className="max-w-[1170px] mx-auto py-50 text-center text-white pt-[20%]">
        <h1 className="sm:text-5xl text-2xl font-bold ">Contactless Restaurant Ordering System</h1>
        <h4 className="text-xl py-5">A contactless restaurant ordering system revolutionizes the dining experience by leveraging technology to enhance convenience and safety for both customers and staff.</h4>
        <p className="text-xl">With features like order customization, contactless payments, and seamless integration with POS systems, restaurants can streamline operations while catering to evolving customer preferences in an increasingly digital world.</p>
      </div>
    </div>
  </section>
);

export default Banner;
