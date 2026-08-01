"use client";

import Link from "next/link";
import projects from "../../../public/data.json";

export default function ProjectsPage() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <style>{`
        .proj-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover {
          border-color: rgba(139,92,246,0.5);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .proj-card:hover .proj-img { transform: scale(1.05); }
        .proj-img-wrap {
          overflow: hidden;
          position: relative;
          height: 220px;
        }
        .proj-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }
        .proj-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(8,12,35,0.9) 100%);
        }
        .proj-num {
          position: absolute; top: 12px; right: 14px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.35);
          background: rgba(0,0,0,0.4);
          padding: 3px 8px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .proj-body {
          padding: 22px 24px 24px;
          flex: 1; display: flex; flex-direction: column;
        }
        .proj-title {
          font-size: 20px; font-weight: 700; color: #ffffff;
          margin: 0 0 10px; letter-spacing: -0.01em;
        }
        .proj-desc {
          font-size: 14px; color: rgba(255,255,255,0.5);
          line-height: 1.65; margin: 0 0 16px; flex: 1;
        }
        .tech-wrap { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
        .tech-tag {
          font-size: 11.5px; font-weight: 500;
          padding: 4px 11px; border-radius: 999px;
          background: rgba(139,92,246,0.12); color: #c4b5fd;
          border: 1px solid rgba(139,92,246,0.2);
        }
        .view-btn {
          display: inline-flex; align-items: center;
          justify-content: center; gap: 8px;
          width: 100%; padding: 13px 20px; border-radius: 10px;
          background: linear-gradient(135deg, rgba(139,92,246,0.18), rgba(99,102,241,0.18));
          border: 1px solid rgba(139,92,246,0.35);
          color: #c4b5fd; font-size: 14px; font-weight: 600;
          letter-spacing: 0.03em;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
        }
        .proj-card:hover .view-btn {
          background: linear-gradient(135deg, rgba(139,92,246,0.4), rgba(99,102,241,0.4));
          border-color: rgba(139,92,246,0.7); color: #ffffff;
        }
        .view-btn-arrow {
          width: 24px; height: 24px; border-radius: 50%;
          background: rgba(139,92,246,0.5);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px;
          transition: background 0.2s, transform 0.2s;
        }
        .proj-card:hover .view-btn-arrow {
          background: #7c3aed; transform: translateX(3px);
        }
        .eyebrow-wrap {
          display: flex; align-items: center; gap: 12px;
          justify-content: center; margin-bottom: 14px;
        }
        .eyebrow-line { height: 1px; width: 36px; background: rgba(139,92,246,0.5); }
        .eyebrow-text {
          font-size: 12px; font-weight: 600; letter-spacing: 0.14em;
          color: #a78bfa; text-transform: uppercase;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div className="eyebrow-wrap">
          <div className="eyebrow-line"></div>
          <span className="eyebrow-text">My Work</span>
          <div className="eyebrow-line"></div>
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800,
          textAlign: "center", color: "#ffffff",
          letterSpacing: "-0.02em", marginBottom: "10px",
        }}>
          Featured Projects
        </h1>
        <p style={{
          textAlign: "center", fontSize: "15px",
          color: "rgba(255,255,255,0.4)", marginBottom: "52px",
        }}>
          A selection of projects I&apos;ve built — from idea to deployment.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="proj-card">
              <div className="proj-img-wrap">
                <img src={project.imgUrl} alt={project.title} className="proj-img" />
                <div className="proj-img-overlay"></div>
                <span className="proj-num">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="proj-body">
                <h3 className="proj-title">{project.title}</h3>
                <p className="proj-desc">{project.description.slice(0, 90)}...</p>
                <div className="tech-wrap">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-tag">+{project.techStack.length - 4}</span>
                  )}
                </div>
                <div className="view-btn">
                  <span>View Details</span>
                  <div className="view-btn-arrow">→</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


