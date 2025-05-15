import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex justify-center items-center">
      <div className="max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          About Us
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Welcome to our blog! We’re passionate about sharing insightful articles,
          tutorials, and stories that inspire and educate. Our mission is to create
          a community where readers can learn, grow, and connect.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Our team consists of experienced writers, developers, and creatives who
          are dedicated to bringing you high-quality, engaging content. Whether you’re
          here to keep up with the latest trends or deepen your knowledge, you’ll find
          something valuable every time you visit.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Team"
            className="rounded-lg shadow-md w-full sm:w-1/3"
          />
          <div className="sm:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Meet the Team
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our diverse team combines expertise from various fields to deliver
              well-rounded perspectives. We believe that great content comes from
              collaboration and passion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
