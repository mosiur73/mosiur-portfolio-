"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bannerImage from "../../../../public/profile.jpg";
import React, { useEffect, useState } from "react";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "4+", label: "Projects Completed" },
  { value: "10+", label: "Technologies" },
];

const interests = ["Problem Solving", "Open Source", "Football", "Photography"];

const roles = ["Frontend Developer", "React Specialist", "UI Enthusiast", "Problem Solver"];

// Stagger children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUpVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeftVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

// Typing animation hook
function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 50, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!isDeleting && display === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && display === "") {
      setIsDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplay(isDeleting
          ? current.slice(0, display.length - 1)
          : current.slice(0, display.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pause]);

  return display;
}

const AboutSection = () => {
  const typedRole = useTypingEffect(roles);

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 py-8 lg:py-12 text-white overflow-x-hidden"
    >
      <style>{`
        @keyframes rotatering {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotatering2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes countup {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ring1 { animation: rotatering 6s linear infinite; }
        .ring2 { animation: rotatering2 10s linear infinite; }

        .about-img-wrap {
          position: relative;
          width: 320px; height: 320px;
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .about-img-wrap { width: 220px; height: 220px; }
        }

        .ring-svg {
          position: absolute; inset: -18px;
          width: calc(100% + 36px);
          height: calc(100% + 36px);
          pointer-events: none;
        }

        .img-inner {
          width: 100%; height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(139,92,246,0.4);
          position: relative;
          z-index: 1;
        }

        .typing-cursor {
          display: inline-block;
          width: 2px; height: 1.1em;
          background: #a78bfa;
          margin-left: 2px;
          vertical-align: middle;
          border-radius: 1px;
          animation: blink 1s step-end infinite;
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #a78bfa 0%,
            #ffffff 40%,
            #a78bfa 60%,
            #6366f1 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 16px 20px;
          text-align: center;
          transition: border-color 0.25s, transform 0.25s;
        }
        .stat-card:hover {
          border-color: rgba(139,92,246,0.4);
          transform: translateY(-3px);
        }
        .stat-val {
          font-size: 26px; font-weight: 700;
          color: #c4b5fd; line-height: 1;
          margin-bottom: 4px;
          animation: countup 0.5s ease forwards;
        }
        .stat-lbl {
          font-size: 11.5px; color: rgba(255,255,255,0.4);
          letter-spacing: 0.04em;
        }

        .interest-tag {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 500;
          padding: 5px 12px; border-radius: 999px;
          background: rgba(139,92,246,0.1);
          color: #c4b5fd;
          border: 1px solid rgba(139,92,246,0.2);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .interest-tag:hover {
          background: rgba(139,92,246,0.2);
          border-color: rgba(139,92,246,0.45);
          transform: translateY(-2px);
        }
        .interest-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #7c3aed;
        }

        .section-eyebrow {
          display: flex; align-items: center;
          gap: 10px; margin-bottom: 12px;
        }
        .eyebrow-line { height: 1px; width: 32px; background: rgba(139,92,246,0.5); }
        .eyebrow-text {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #a78bfa;
        }

        .divider-h { height: 1px; background: rgba(255,255,255,0.06); margin: 28px 0; }

        .highlight-line {
          position: relative;
          display: inline;
        }
        .highlight-line::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #6366f1);
          border-radius: 1px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s ease;
        }
        .highlight-line:hover::after { transform: scaleX(1); }
      `}</style>

      {/* Section heading */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
          About Me
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* Image */}
        <motion.div
          variants={fadeLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="about-img-wrap"
        >
          <svg className="ring-svg ring1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="47" stroke="url(#g1)" strokeWidth="1.2" strokeDasharray="6 4" />
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7c3aed" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <svg className="ring-svg ring2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ inset: "-32px", width: "calc(100% + 64px)", height: "calc(100% + 64px)" }}>
            <circle cx="50" cy="50" r="47" stroke="url(#g2)" strokeWidth="0.6" strokeDasharray="2 8" />
            <defs>
              <linearGradient id="g2" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa" stopOpacity="0.5" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="img-inner">
            <Image
              src={bannerImage}
              alt="Md Mosiur Rahman"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content — staggered children */}
        <motion.div
          style={{ flex: 1 }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUpVariants} className="section-eyebrow">
            <div className="eyebrow-line"></div>
            <span className="eyebrow-text">Who I Am</span>
          </motion.div>

          {/* Name */}
          <motion.h3
            variants={fadeUpVariants}
            style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#ffffff", marginBottom: "10px", letterSpacing: "-0.01em" }}
          >
            <span style={{ color: "#a78bfa" }}>Hello, I&apos;m</span>{" "}
            <span className="shimmer-text">Md Mosiur Rahman</span>
          </motion.h3>

          {/* Typing role */}
          <motion.p
            variants={fadeUpVariants}
            style={{ fontSize: "14px", fontWeight: 500, color: "rgba(139,92,246,0.85)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "20px", minHeight: "22px" }}
          >
            {typedRole}<span className="typing-cursor"></span>
          </motion.p>

          {/* Para 1 */}
          <motion.p
            variants={fadeUpVariants}
            style={{ fontSize: "15px", lineHeight: 1.85, color: "rgba(255,255,255,0.55)", marginBottom: "16px" }}
          >
            I&apos;m a web developer from Bangladesh with a passion for building dynamic, responsive, and
            user-friendly web applications. My journey into programming started with{" "}
            <span className="highlight-line" style={{ color: "rgba(255,255,255,0.8)" }}>curiosity about how websites work</span>
            {" "}— and it quickly became something I love doing every day.
          </motion.p>

          {/* Para 2 */}
          <motion.p
            variants={fadeUpVariants}
            style={{ fontSize: "15px", lineHeight: 1.85, color: "rgba(255,255,255,0.55)", marginBottom: 0 }}
          >
            I work with modern technologies like React, Tailwind CSS, Node.js, and MongoDB to craft
            seamless experiences. Outside of coding, I enjoy{" "}
            <span className="highlight-line" style={{ color: "rgba(255,255,255,0.8)" }}>football and photography</span>
            {" "}— they help me think creatively and approach problems from different angles.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="divider-h" />

          {/* Stats */}
          <motion.div
            variants={fadeUpVariants}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "24px" }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.4 + i * 0.1, ease: "backOut" }}
                viewport={{ once: true }}
              >
                <div className="stat-val">{s.value}</div>
                <div className="stat-lbl">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interests */}
          <motion.div
            variants={fadeUpVariants}
            style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
          >
            {interests.map((tag, i) => (
              <motion.span
                key={i}
                className="interest-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.55 + i * 0.07, ease: "backOut" }}
                viewport={{ once: true }}
              >
                <span className="interest-dot"></span>
                {tag}
              </motion.span>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
