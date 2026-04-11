"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "SSC",
    institution: "Munshi Hazrat Ali High School",
    duration: "2020",
    board: "Rajshahi Board",
    group: "Arts",
    gpa: "4.39",
    gpaMax: "5.00",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
  },
  {
    degree: "Diploma in Engineering",
    field: "Computer Technology",
    institution: "Bangladesh Polytechnic Institute",
    duration: "2021 — 2024",
    board: "Technical Board",
    gpa: "4.68",
    gpaMax: "5.00",
    color: "#10b981",
    glow: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.22)",
  },
];

const Education = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 text-white">
      <style>{`
        .edu-wrap { max-width: 900px; margin: 0 auto; padding: 0 24px; }

        .edu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .edu-card {
          border-radius: 16px;
          padding: 28px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          transition: transform 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .edu-card:hover { transform: translateY(-5px); }

        .edu-card-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 16px 16px 0 0;
        }

        .edu-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          flex-shrink: 0;
        }

        .edu-degree {
          font-size: 22px; font-weight: 700;
          color: #ffffff; line-height: 1.2;
          margin-bottom: 4px;
        }
        .edu-field {
          font-size: 13px; font-weight: 500;
          margin-bottom: 6px;
        }
        .edu-duration {
          display: inline-block;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.08em;
          padding: 3px 10px; border-radius: 999px;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.4);
          margin-bottom: 20px;
        }

        .edu-divider {
          height: 1px; background: rgba(255,255,255,0.06);
          margin-bottom: 18px;
        }

        .edu-rows { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .edu-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .edu-row-label {
          font-size: 12px; color: rgba(255,255,255,0.35);
          font-weight: 500; flex-shrink: 0;
        }
        .edu-row-value {
          font-size: 13px; color: rgba(255,255,255,0.75);
          font-weight: 500; text-align: right;
        }

        .gpa-wrap {
          background: rgba(255,255,255,0.03);
          border-radius: 10px;
          padding: 14px 16px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .gpa-top {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 10px;
        }
        .gpa-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .gpa-value {
          font-size: 22px; font-weight: 700; line-height: 1;
        }
        .gpa-max { font-size: 13px; color: rgba(255,255,255,0.3); font-weight: 400; }
        .gpa-bar-bg {
          height: 4px; border-radius: 999px;
          background: rgba(255,255,255,0.07); overflow: hidden;
        }
        .gpa-bar-fill { height: 100%; border-radius: 999px; }

        .eyebrow-wrap {
          display: flex; align-items: center; gap: 12px;
          justify-content: center; margin-bottom: 12px;
        }
        .eyebrow-line { height: 1px; width: 36px; background: rgba(139,92,246,0.5); }
        .eyebrow-text {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase; color: #a78bfa;
        }
      `}</style>

      <div className="edu-wrap">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "52px" }}
        >
          <div className="eyebrow-wrap">
            <div className="eyebrow-line"></div>
            <span className="eyebrow-text">Academic Background</span>
            <div className="eyebrow-line"></div>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
            Education
          </h2>
        </motion.div>

        <div className="edu-grid">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="edu-card"
              style={{ background: edu.glow, borderColor: edu.border }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="edu-card-accent" style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}></div>

              <div className="edu-icon-wrap" style={{ background: `${edu.color}18` }}>
                <GraduationCap size={22} style={{ color: edu.color }} />
              </div>

              <div className="edu-degree">{edu.degree}</div>
              {edu.field && (
                <div className="edu-field" style={{ color: edu.color }}>{edu.field}</div>
              )}
              <span className="edu-duration">{edu.duration}</span>

              <div className="edu-divider"></div>

              <div className="edu-rows">
                <div className="edu-row">
                  <span className="edu-row-label">Institution</span>
                  <span className="edu-row-value">{edu.institution}</span>
                </div>
                <div className="edu-row">
                  <span className="edu-row-label">Board</span>
                  <span className="edu-row-value">{edu.board}</span>
                </div>
                {edu.group && (
                  <div className="edu-row">
                    <span className="edu-row-label">Group</span>
                    <span className="edu-row-value">{edu.group}</span>
                  </div>
                )}
              </div>

              <div className="gpa-wrap">
                <div className="gpa-top">
                  <span className="gpa-label">GPA</span>
                  <span className="gpa-value" style={{ color: edu.color }}>
                    {edu.gpa} <span className="gpa-max">/ {edu.gpaMax}</span>
                  </span>
                </div>
                <div className="gpa-bar-bg">
                  <motion.div
                    className="gpa-bar-fill"
                    style={{ background: `linear-gradient(90deg, ${edu.color}88, ${edu.color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(parseFloat(edu.gpa) / parseFloat(edu.gpaMax)) * 100}%` }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;