import React from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Art of Oil Painting",
    author: "John Doe",
    date: "Feb 15, 2025",
    excerpt: "Explore the beauty of oil painting techniques and how to bring your imagination to life on canvas...",
    image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?w=800"
  },
  {
    id: 2,
    title: "Mastering Watercolors",
    author: "Jane Smith",
    date: "Feb 10, 2025",
    excerpt: "Watercolors can create stunning, vibrant artworks. Learn how to master this versatile medium...",
    image: "https://images.pexels.com/photos/3938625/pexels-photo-3938625.jpeg?w=800"
  },
  {
    id: 3,
    title: "The Evolution of Digital Art",
    author: "Alice Brown",
    date: "Jan 28, 2025",
    excerpt: "Digital art has transformed creativity in the modern era. Discover the latest tools and techniques...",
    image: "https://images.pexels.com/photos/3772526/pexels-photo-3772526.jpeg?w=800"
  },
];

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-100 text-gray-800 flex flex-col items-center py-16 px-6">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-indigo-600 drop-shadow-lg">
        Art & Creativity Blog
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="p-6 bg-white shadow-xl border border-gray-200 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-64 object-cover rounded-xl mb-5"
              loading="lazy"
            />
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-500">By {blog.author} • {blog.date}</p>
            <p className="mt-3 text-gray-600 leading-relaxed">{blog.excerpt}</p>
            
            <button 
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold text-lg shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-purple-600 transition-all duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
