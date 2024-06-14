import React, { useState } from 'react';

// Example data of blog posts
const blogPosts = [
  { id: 1, title: 'First Blog Post', image: 'https://via.placeholder.com/900x500', url: '/blog/first-post' },
  { id: 2, title: 'Second Blog Post', image: 'https://via.placeholder.com/900x500', url: '/blog/second-post' },
  { id: 3, title: 'Third Blog Post', image: 'https://via.placeholder.com/900x500', url: '/blog/third-post' },
];

const BlogSection = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const nextPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1));
  };

  const previousPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1));
  };

  return (
    <div className="min-h-[500px] sm:min-h-[650px] bg-cream p-10 flex flex-col items-center">
      <h2 className="font-medium font-header text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-center max-w-[400px] lg:max-w-full">See the projects we helped accomplish</h2>
      <div className="max-w-[800px] mx-auto relative w-full">
        {/* Display current blog post */}
        <a href={blogPosts[currentPostIndex].url} className="block rounded-3xl border-rose border-4 overflow-hidden shadow-md">
          <img
            src={blogPosts[currentPostIndex].image}
            alt={blogPosts[currentPostIndex].title}
            className="w-full transition duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer"
          />
        </a>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4">
          {/* Previous button */}
          <button
            className="text-cream bg-rose rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
            onClick={previousPost}
          >
            &lt;
          </button>
          {/* Next button */}
          <button
            className="text-cream bg-rose rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
            onClick={nextPost}
          >
            &gt;
          </button>
        </div>
      </div>
      {/* See More button */}
      <a href={blogPosts[currentPostIndex].url} className="mt-4 bg-blue text-cream font-header text-xl lg:text-2xl rounded-full px-6 lg:px-8 py-1 hover:bg-opacity-80 transition duration-300">
        See More
      </a>
    </div>
  );
};

export default BlogSection;
