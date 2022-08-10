import React from "react";

export default function Hero() {
  return (
    <section className="py-12">
      <div className="hero"></div>
      <main className="lg:relative pt-20 md:mb-18 lg:mb-0 lg:pt-0">
        <div className="mx-auto w-full text-center lg:py-36 md:text-left lg:text-left lg:max-w-screen-xl">
          <div className="px-4 md:w-7/12 lg:pt-0 lg:w-1/2 ">
            <h1 className="text-5xl text-left tracking-tight font-extrabold text-gray-900  md:text-6xl lg:text-2xl">
              <span className="block text-5xl md:text-5xl text-yankee-blue font-semibold lg:text-6xl">
                Maximize skill, minimize budget
              </span>
            </h1>
            <p className="mt-3 max-w-md text-left mx-auto text-md text-gray-500 text-roman-silver sm:text-xl md:mt-5 md:max-w-3xl">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <div className="mt-6 text-left">
              <button
                type="button"
                className="inline-flex items-center px-8 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-t from-frost-bite to-outrageous-orange"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="intro"></div>
        </div>
      </main>
    </section>
  );
}
