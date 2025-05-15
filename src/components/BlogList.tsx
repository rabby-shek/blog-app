import React from "react";
import Card from "./Card"; // Adjust path if needed
import LatestPostCard from "./LatestPostCard";
const Home = () => {
  return (
  <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Cards Section (8 columns) */}
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* Latest Posts Section (4 columns) */}
        <div className="col-span-12 lg:col-span-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Latest Posts
          </h2>
          <div className="space-y-4">
            <LatestPostCard
              image="https://via.placeholder.com/64"
              title="React Server Components Explained"
              date="May 15, 2025"
              author="Shek Saheb"
            />
            <LatestPostCard
              image="https://via.placeholder.com/64"
              title="Tailwind vs Bootstrap in 2025"
              date="May 14, 2025"
              author="Shek Saheb"
            />
            <LatestPostCard
              image="https://via.placeholder.com/64"
              title="Next.js App Directory Guide"
              date="May 13, 2025"
              author="Shek Saheb"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
