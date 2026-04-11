"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs, FaBootstrap, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiFirebase, SiExpress, SiNextdotjs, SiRedux, SiShadcnui, SiVercel, SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const categories = [
  {
    label: "Frontend",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.15)",
    border: "rgba(99,102,241,0.25)",
    skills: [
      { name: "React", icon: <FaReact />, iconColor: "#60a5fa", level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, iconColor: "#ffffff", level: 85 },
      { name: "JavaScript", icon: <FaJs />, iconColor: "#facc15", level: 88 },
      { name: "TypeScript", icon: <SiTypescript />, iconColor: "#3b82f6", level: 75 },
      { name: "HTML5", icon: <FaHtml5 />, iconColor: "#f97316", level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, iconColor: "#3b82f6", level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, iconColor: "#2dd4bf", level: 92 },
      { name: "Bootstrap", icon: <FaBootstrap />, iconColor: "#a78bfa", level: 80 },
      { name: "Redux", icon: <SiRedux />, iconColor: "#a78bfa", level: 72 },
      { name: "ShadCn UI", icon: <SiShadcnui />, iconColor: "#ffffff", level: 78 },
    ],
  },
  {
    label: "Backend & Database",
    color: "#10b981",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.22)",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, iconColor: "#4ade80", level: 80 },
      { name: "Express.js", icon: <SiExpress />, iconColor: "#9ca3af", level: 78 },
      { name: "MongoDB", icon: <SiMongodb />, iconColor: "#4ade80", level: 82 },
      { name: "PostgreSQL", icon: <BiLogoPostgresql />, iconColor: "#60a5fa", level: 65 },
      { name: "Prisma", icon: <SiPrisma />, iconColor: "#4ade80", level: 70 },
      { name: "Firebase", icon: <SiFirebase />, iconColor: "#fbbf24", level: 75 },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.22)",
    skills: [
      { name: "GitHub", icon: <FaGithub />, iconColor: "#e5e7eb", level: 88 },
      { name: "Figma", icon: <FaFigma />, iconColor: "#60a5fa", level: 70 },
      { name: "Vercel", icon: <SiVercel />, iconColor: "#ffffff", level: 85 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-28 text-white overflow-x-hidden">
      <style>{`
        .skills-wrap { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        .cat-card {
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
          padding: 28px 28px 24px;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .cat-header {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 22px;
        }
        .cat-dot {
          width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
        }
        .cat-label {
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .cat-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 10px;
        }

        .skill-item {
          display: flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 12px 14px;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          cursor: default;
        }
        .skill-item:hover {
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
        }

        .skill-icon {
          font-size: 22px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
        }

        .skill-info { flex: 1; min-width: 0; }
        .skill-name {
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.85);
          margin-bottom: 5px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .skill-bar-bg {
          height: 3px; border-radius: 999px;
          background: rgba(255,255,255,0.07);
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%; border-radius: 999px;
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        .skill-level {
          font-size: 10px; font-weight: 600;
          color: rgba(255,255,255,0.25);
          flex-shrink: 0; letter-spacing: 0.04em;
        }

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

      <div className="skills-wrap">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "52px" }}
        >
          <div className="eyebrow-wrap">
            <div className="eyebrow-line"></div>
            <span className="eyebrow-text">What I Work With</span>
            <div className="eyebrow-line"></div>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
            Skills &amp; Expertise
          </h2>
        </motion.div>

        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            className="cat-card"
            style={{ borderColor: cat.border, background: cat.glow }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: ci * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="cat-header">
              <div className="cat-dot" style={{ background: cat.color }}></div>
              <span className="cat-label" style={{ color: cat.color }}>{cat.label}</span>
              <div className="cat-line"></div>
            </div>

            <div className="skills-grid">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={si}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: si * 0.04 }}
                  viewport={{ once: true }}
                  style={{ "--hover-border": cat.border }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = cat.border}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
                >
                  <div className="skill-icon" style={{ color: skill.iconColor }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        style={{ background: `linear-gradient(90deg, ${cat.color}99, ${cat.color})` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: si * 0.05, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
