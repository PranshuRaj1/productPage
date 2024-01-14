import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React.js: Building Tomorrow's Web Today
            </h2>
            <p className="mt-6 text-gray-600">
              "React.js: Building Tomorrow's Web Today" is a cutting-edge
              JavaScript library developed by Facebook. Renowned for its
              declarative and component-based architecture, React.js empowers
              developers to construct dynamic and interactive user interfaces
              with unparalleled efficiency. By efficiently managing the state of
              applications, React enhances performance and promotes code
              reusability, making it a cornerstone technology for modern web
              development. As a forward-looking framework, React.js continues to
              shape the future of web development by providing a robust
              foundation for creating responsive and engaging user experiences.
            </p>
            <br />
            <p className="mt-4 text-gray-600">By Pranshu Raj</p>
          </div>
        </div>
      </div>
    </div>
  );
}
