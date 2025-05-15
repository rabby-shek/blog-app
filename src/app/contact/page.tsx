import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-3xl w-full p-10">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Get in Touch
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
          <p>Or reach us directly at:</p>
          <p className="mt-2">📞 (555) 412-1234</p>
          <p>📧 support@myblog.com</p>
          <p>🏢 123 Blog Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
