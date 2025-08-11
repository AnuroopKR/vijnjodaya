"use client"; // only needed if using App Router

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
const pastEvents=[
  {
    title:"SSLC/+2 അനുമോദനം",
    date:"08-06-2025  10:30 AM",
    venue:"Kottoor",
    image:"/sslc.jpg"
  }
]

const events=[
   {
    title: "Independence Day Celebration",
    date: "15 August 2025",
    time: "9:30 AM",
    venue: "Vijnjodaya Arts & Sports Club Ground, Sreekandapuram, Kottoor",
    mapLink: "#",
    description:
      "Join us in celebrating India’s 79th Independence Day with flag hoisting, cultural performances, and patriotic songs.",
    image:
      "/indipendance.jpg",
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
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-14">
          🌟 Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/70 backdrop-blur-lg border border-white/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Event Image */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-700/80 text-white px-4 py-1 rounded-full text-sm shadow-md">
                  {event.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  🕒 <span className="font-medium">{event.time}</span>
                </p>
                <p className="text-gray-600 mb-4">
                  📍 {event.venue}{" "}
                  <a
                    href={event.mapLink}
                    className="text-blue-500 hover:underline"
                  >
                    (View Map)
                  </a>
                </p>
                <p className="text-gray-700 mb-6 flex-grow">
                  {event.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow hover:from-green-600 hover:to-green-700 transition-all duration-300"
                  >
                    Join Us
                  </a>
                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Add to Calendar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
     <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
          🎉 Past Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Event Image with Grayscale */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-60 object-cover filter grayscale"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm shadow-md">
                  Completed
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-500 mb-2">
                  📅 {event.date}
                </p>
                <p className="text-gray-500 mb-4">
                  📍 {event.venue}{" "}
                  {/* <a
                    href={event.mapLink}
                    className="text-blue-500 hover:underline"
                  >
                    (View Map)
                  </a> */}
                </p>
                <p className="text-gray-700 mb-6 flex-grow">
                  {/* {event.description} */}
                </p>

                {/* Gallery Button */}
                <a
                  href={"#"}
                  className="px-4 py-2 text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
                >
                  View Gallery
                </a>
              </div>
            </motion.div>
          ))}
        </div>
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
        <p>© 2025 Vijnjodaya arts and aports club</p>
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
