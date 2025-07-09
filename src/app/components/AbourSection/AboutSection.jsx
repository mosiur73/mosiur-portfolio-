"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bannerImage from "../../../../public/profile.jpg";
import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-7xl px-4 py-10 lg:py-20 text-white font-sans overflow-x-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        About Me
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-left space-y-4">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold"
          >
            <span className="text-purple-400">Hello, I'm</span>
            <br />
            <span>Md Mosiur Rahman</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base leading-relaxed text-gray-300"
          >
            I’m a web developer from Bangladesh with a passion for building
            dynamic, responsive, and user-friendly web applications. I work with
            modern technologies like React, Tailwind CSS, Node.js, and MongoDB
            to craft seamless experiences. I’m continuously learning and growing
            in the tech field, always aiming to deliver clean and meaningful
            code. Whether it's a backend API or a beautifully designed UI, I
            enjoy solving problems and bringing ideas to life.
          </motion.p>
          
        </div>

        {/* Image Section - Responsive */}
        {/* <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-lg"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: -2,
              filter: "brightness(1.2) contrast(1.1)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src={bannerImage}
              alt="Md Mosiur Rahman's Profile Photo"
              fill
              className="object-cover rounded-full"
              priority
            />
          </motion.div>
        </motion.div> */}
        <motion.div
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
>
  {/* Outer Ring 1 */}
  <div
    className="absolute inset-0 rounded-full border-4 border-transparent"
    style={{
      background: "conic-gradient(from 0deg, #00FFFF, #0000FF, #FF00FF, #00FFFF)",
      maskImage: "radial-gradient(farthest-side, transparent calc(100% - 6px), white calc(100% - 4px))",
      WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 6px), white calc(100% - 4px))",
      animation: "spinClockwise 5s linear infinite",
    }}
  ></div>

  {/* Outer Ring 2 */}
  <div
    className="absolute inset-0 rounded-full border-4 border-transparent"
    style={{
      background: "conic-gradient(from 0deg, #FF00FF, #0000FF, #00FFFF, #FF00FF)",
      maskImage: "radial-gradient(farthest-side, transparent calc(100% - 12px), white calc(100% - 10px))",
      WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 12px), white calc(100% - 10px))",
      animation: "spinCounterClockwise 8s linear infinite",
    }}
  ></div>

  {/* Image */}
  <motion.div
    whileHover={{
      scale: 1.05,
      rotate: -2,
      filter: "brightness(1.2) contrast(1.1)",
    }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="w-full h-full rounded-full overflow-hidden border-4 border-[#0EA5E9] shadow-xl"
  >
    <Image
      src={bannerImage}
      alt="Md Mosiur Rahman's Profile Photo"
      fill
      className="object-cover rounded-full"
      priority
    />
  </motion.div>
</motion.div>

        
      </div>
    </section>
  );
};

export default AboutSection;
