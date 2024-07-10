import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Example data of blog posts
const blogPosts = [
  { id: 1, title: 'First Blog Post', image: 'https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg', url: '/blog/first-post' },
  { id: 2, title: 'Second Blog Post', image: 'https://www.volunteerforever.com/wp-content/uploads/2019/01/Cheap-Affordable-Volunteer-Programs-Header.jpg', url: '/blog/second-post' },
  { id: 3, title: 'Third Blog Post', image: 'https://globuswarwick.com/wp-content/uploads/2018/10/181021-voluntourism-nepal-team.jpg?w=1920&h=768&crop=1', url: '/blog/third-post' },
];

const BlogSection = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const navigate = useNavigate();

  const nextPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1));
  };

  const previousPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      nextPost();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSeeMoreClick = () => {
    navigate('/blog'); // Navigate to the blog page
  };

  return (
    <div className="min-h-[500px] sm:min-h-[650px] bg-cream p-10 flex flex-col items-center">
      <h2 className="font-medium font-header text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-center max-w-[400px] lg:max-w-full">
        See the projects we helped accomplish
      </h2>
      <div className="max-w-[800px] mx-auto relative w-full">
        {/* Display current blog post */}
        <a href={blogPosts[currentPostIndex].url} className="block rounded-3xl border-rose border-4 overflow-hidden shadow-md">
          <img
            src={blogPosts[currentPostIndex].image}
            alt={blogPosts[currentPostIndex].title}
            className="w-full h-[500px] object-cover transition duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer"
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
      <button
        onClick={handleSeeMoreClick}
        className="mt-4 bg-blue text-cream font-header text-xl lg:text-2xl rounded-full px-6 lg:px-8 py-1 transition duration-300 ease-in-out transform hover:bg-opacity-80 hover:shadow-lg hover:-translate-y-1"
      >
        See More
      </button>
    </div>
  );
};

export default BlogSection;
