// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Moon, Sun, ArrowLeft } from "lucide-react";

// const blogs = [
//   {
//     id: 1,
//     title: "The Art of Oil Painting",
//     author: "John Doe",
//     date: "Feb 15, 2025",
//     content: `Oil painting is a timeless art form that allows artists to create deep, rich textures and colors. It has been used for centuries to depict landscapes, portraits, and abstract ideas...`,
//     image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?w=800"
//   },
//   {
//     id: 2,
//     title: "Mastering Watercolors",
//     author: "Jane Smith",
//     date: "Feb 10, 2025",
//     content: `Watercolor painting is a delicate and expressive medium. It allows for soft transitions, vibrant color layers, and stunning transparency effects...`,
//     image: "https://images.pexels.com/photos/3938625/pexels-photo-3938625.jpeg?w=800"
//   },
//   {
//     id: 3,
//     title: "The Evolution of Digital Art",
//     author: "Alice Brown",
//     date: "Jan 28, 2025",
//     content: `Digital art combines technology and creativity, giving artists the ability to experiment with limitless possibilities. From digital painting to AI-generated images, the field has grown tremendously...`,
//     image: "https://images.pexels.com/photos/3772526/pexels-photo-3772526.jpeg?w=800"
//   },
// ];

// const BlogDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(false);
//   const blog = blogs.find((b) => b.id === parseInt(id));

//   if (!blog) {
//     return <div className="text-center text-red-500 font-semibold mt-20 text-2xl">Blog not found.</div>;
//   }

//   return (
//     <div className={`min-h-screen flex flex-col items-center py-16 px-6 transition-all ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}> 
//       {/* Theme Toggle */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="absolute top-8 right-10 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:scale-110 transition-all"
//       >
//         {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
//       </button>

//       {/* Back Button */}
//       <button 
//         onClick={() => navigate("/")}
//         className="absolute top-10 left-10 flex items-center bg-white dark:bg-gray-700 shadow-lg px-6 py-3 rounded-lg text-gray-700 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
//       >
//         <ArrowLeft className="mr-2" /> Back
//       </button>

//       {/* Blog Container */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.8 }}
//         className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all"
//       >
//         {/* Blog Image */}
//         <motion.img 
//           src={blog.image} 
//           alt={blog.title} 
//           className="w-full h-96 object-cover rounded-t-3xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         />

//         {/* Blog Content */}
//         <div className="p-12">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-6xl font-extrabold leading-tight text-center"
//           >
//             {blog.title}
//           </motion.h1>

//           <p className="text-gray-500 mt-3 text-lg dark:text-gray-300 text-center">
//             By <span className="font-semibold">{blog.author}</span> • {blog.date}
//           </p>

//           <div className="mt-6 w-24 h-1 bg-indigo-500 mx-auto"></div>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mt-8 text-lg leading-relaxed text-justify"
//           >
//             {blog.content}
//           </motion.p>

//           <div className="mt-10 flex justify-center gap-6">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-indigo-800 transition-all text-lg"
//             >
//               Share
//             </motion.button>
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-all text-lg"
//             >
//               Save for Later
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default BlogDetails;


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun, ArrowLeft } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "The Art of Oil Painting",
    author: "John Doe",
    date: "Feb 15, 2025",
    content: `Oil painting is a timeless art form that allows artists to create deep, rich textures and colors. It has been used for centuries to depict landscapes, portraits, and abstract ideas...`,
    image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?w=800"
  },
  {
    id: 2,
    title: "Mastering Watercolors",
    author: "Jane Smith",
    date: "Feb 10, 2025",
    content: `Watercolor painting is a delicate and expressive medium. It allows for soft transitions, vibrant color layers, and stunning transparency effects...`,
    image: "https://images.pexels.com/photos/3938625/pexels-photo-3938625.jpeg?w=800"
  },
  {
    id: 3,
    title: "The Evolution of Digital Art",
    author: "Alice Brown",
    date: "Jan 28, 2025",
    content: `Digital art combines technology and creativity, giving artists the ability to experiment with limitless possibilities. From digital painting to AI-generated images, the field has grown tremendously...`,
    image: "https://images.pexels.com/photos/3772526/pexels-photo-3772526.jpeg?w=800"
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center text-red-500 font-semibold mt-20 text-2xl">Blog not found.</div>;
  }

  return (
    <div className={`min-h-screen flex flex-col items-center py-16 px-6 transition-all ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}> 
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-8 right-10 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:scale-110 transition-all"
      >
        {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
      </button>

      {/* Back Button */}
      <button 
        onClick={() => navigate("/")}
        className="absolute top-10 left-10 flex items-center bg-white dark:bg-gray-700 shadow-lg px-6 py-3 rounded-lg text-gray-700 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
      >
        <ArrowLeft className="mr-2" /> Back
      </button>

      {/* Blog Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all"
      >
        {/* Blog Image */}
        <motion.img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-96 object-cover rounded-t-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Blog Content */}
        <div className="p-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl font-extrabold leading-tight text-center"
          >
            {blog.title}
          </motion.h1>

          <p className="text-gray-500 mt-3 text-lg dark:text-gray-300 text-center">
            By <span className="font-semibold">{blog.author}</span> • {blog.date}
          </p>

          <div className="mt-6 w-24 h-1 bg-indigo-500 mx-auto"></div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 text-lg leading-relaxed text-justify"
          >
            {blog.content}
          </motion.p>

          <div className="mt-10 flex justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-indigo-800 transition-all text-lg"
            >
              Share
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-all text-lg"
            >
              Save for Later
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
