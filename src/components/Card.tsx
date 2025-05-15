import React from "react";

const Card = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="text"
        />
      </a>
      <div className="p-4">
        <a href="#">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>

        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            May 16, 2025
          </span>
          <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Shek Saheb
          </span>
        </div>

        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          Biggest enterprise tech acquisitions of 2021 so far.
        </p>

        {/* Thumbs Reactions */}
        <div className="flex items-center gap-4 mb-3">
          <button className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform">
            👍 <span className="text-xs">12</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform">
            👎 <span className="text-xs">2</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
