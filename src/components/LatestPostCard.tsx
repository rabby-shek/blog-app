// components/LatestPostCard.js
import React from "react";

const LatestPostCard = ({ image, title, date, author }) => {
  return (
    <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-md shadow">
      <img
        src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
        alt="Post thumbnail"
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
        <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full">
          {author}
        </span>
      </div>
    </div>
  );
};

export default LatestPostCard;
