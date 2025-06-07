"use client"; // only needed if using App Router

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const events=[
  {
    name:"SSLC/+2 അനുമോദനം",
    date:"08-06-2025  10:30 AM",
    location:"Kottoor",
    image:"/medal.jpg"
  }
]
export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      <Head>
        <title>Vijnjodaya</title>
        <meta
          name="description"
          content="Celebrating Arts, Sports, and Spirit of Kerala"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gray-700 text-white h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="Kerala Culture"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="p-4 z-10">
          <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="m-auto bg-white rounded-full bg-opacity-50"
          />
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold drop-shadow mb-4"
          >
            വിജ്ഞോദയ
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-lg font-extrabold drop-shadow mb-4"
          >
            ആർട്സ് ആൻഡ് സ്പോർട്സ് ക്ലബ്ബ്
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl font-light"
          >
            Igniting Creativity, Shaping a New Tomorrow.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition"
          >
            Join Now
          </motion.button>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
       <p className="max-w-5xl mx-auto text-gray-900 text-lg mb-6">
    <strong>വിജ്ഞോദയ ആർട്സ് ആൻഡ് സ്പോർട്സ് ക്ലബ്ബ്</strong>  was founded on <strong>January 1, 2023</strong>, and has quickly grown into one of the most renowned clubs in <strong>Sreekandapuram, Kottoor</strong>. Known for its vibrant energy and active community, the club is dedicated to promoting arts, sports, and cultural unity in the region.
  </p>
  <p className="max-w-5xl mx-auto text-gray-700 text-base">
    Through various programs, events, and tournaments, the club encourages participation from all age groups and continues to be a symbol of creativity, fitness, and togetherness in Kerala.
  </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg hover:scale-105 transition">
            🎨 <strong>Arts Programs</strong>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg hover:scale-105 transition">
            🏏 <strong>Sports Tournaments</strong>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg hover:scale-105 transition">
            👥 <strong>Community Events</strong>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.name}
              whileHover={{ scale: 1.03 }}
              className=" p-10  rounded-xl shadow-xl  bg-cover bg-gray-200"
              // style={{ backgroundImage: `url('/medal.jpeg')` }}
            >
              <h3 className="text-2xl font-semibold mb-2 ">
                 {event.name}
              </h3>
              <p className="mb-2">📅 Date & Time:{event.date}</p>
              <p className="mb-4">📍 Location:{event.location}</p>
              {/* <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                Register
              </button> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((img) => (
            <div
              key={img}
              className="h-40 bg-gray-200 rounded-lg hover:scale-105 transition shadow-inner"
            ></div>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:shadow-md">
          View Full Gallery
        </button>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-6 bg-green-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Become a Member</h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          Join our vibrant community and take part in exciting events,
          workshops, and tournaments.
        </p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 px-6 text-center">
        <p>© 2025 Vibrance Kerala Club</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}
