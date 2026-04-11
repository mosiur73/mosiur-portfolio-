import projects from "../../../../public/data.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => String(p.id) === params.id);
  if (!project) return notFound();

  const currentIndex = projects.findIndex((p) => String(p.id) === params.id);
  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <div className="min-h-screen text-white py-20 bg-[#0a192f]">
      <style>{`
        .detail-wrap { max-width: 860px; margin: 0 auto; padding: 0 24px; }

        .back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
          margin-bottom: 40px;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 8px 16px; border-radius: 8px;
        }
        .back-btn:hover { color: #a78bfa; border-color: rgba(139,92,246,0.4); }

        .hero-img {
          width: 100%; height: 400px;
          object-fit: cover;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 40px;
          display: block;
        }

        .project-badge {
          display: inline-block;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #a78bfa;
          background: rgba(139,92,246,0.1);
          border: 1px solid rgba(139,92,246,0.2);
          padding: 4px 12px; border-radius: 999px;
          margin-bottom: 16px;
        }

        .project-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }

        .project-desc {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
          margin: 0;
          max-width: 640px;
        }

        .divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 36px 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 14px;
          margin-bottom: 36px;
        }

        .info-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 18px 20px;
        }

        .info-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 10px;
          display: flex; align-items: center; gap: 6px;
        }
        .label-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #7c3aed; flex-shrink: 0;
        }

        .tech-wrap { display: flex; flex-wrap: wrap; gap: 6px; }
        .tech-tag {
          font-size: 11.5px; font-weight: 500;
          padding: 4px 10px; border-radius: 999px;
          background: rgba(139,92,246,0.1); color: #c4b5fd;
          border: 1px solid rgba(139,92,246,0.2);
        }

        .info-link {
          font-size: 13px; color: #a78bfa;
          text-decoration: none; word-break: break-all;
          line-height: 1.5;
        }
        .info-link:hover { text-decoration: underline; }

        .block { margin-bottom: 28px; }

        .block-heading {
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 10px;
          display: flex; align-items: center; gap: 10px;
        }
        .block-heading::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .block-text {
          font-size: 14.5px;
          color: rgba(255,255,255,0.55);
          line-height: 1.8;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-left: 3px solid rgba(139,92,246,0.45);
          border-radius: 0 10px 10px 0;
          padding: 16px 20px;
        }

        .cta-wrap {
          display: flex; gap: 12px; flex-wrap: wrap;
          margin-top: 36px;
        }

        .btn-live {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 22px; border-radius: 9px;
          background: #7c3aed; color: #fff;
          font-size: 14px; font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          border: none;
        }
        .btn-live:hover { background: #6d28d9; transform: translateY(-2px); }

        .btn-github {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 22px; border-radius: 9px;
          background: transparent; color: rgba(255,255,255,0.7);
          font-size: 14px; font-weight: 600;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.12);
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .btn-github:hover {
          border-color: rgba(139,92,246,0.5);
          color: #c4b5fd; transform: translateY(-2px);
        }

        .next-wrap {
          margin-top: 56px; padding-top: 36px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .next-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.25); margin-bottom: 10px;
        }
        .next-card {
          display: flex; align-items: center;
          justify-content: space-between;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 16px 20px;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .next-card:hover {
          border-color: rgba(139,92,246,0.35);
          background: rgba(139,92,246,0.04);
        }
        .next-title { font-size: 16px; font-weight: 600; color: #fff; }
        .next-sub { font-size: 12px; color: rgba(255,255,255,0.3); margin-top: 3px; }
        .next-arrow { font-size: 18px; color: rgba(139,92,246,0.7); }
      `}</style>

      <div className="detail-wrap">

        <Link href="/projects" className="back-btn">
          ← Back to Projects
        </Link>

        <img src={project.imgUrl} alt={project.title} className="hero-img" />

        <span className="project-badge">Featured Project</span>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-desc">{project.description}</p>

        <div className="divider"></div>

        <div className="info-grid">
          <div className="info-card">
            <div className="info-label">
              <div className="label-dot"></div>
              Tech Stack
            </div>
            <div className="tech-wrap">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="info-card">
            <div className="info-label">
              <div className="label-dot"></div>
              Live Link
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="info-link">
              {project.link}
            </a>
          </div>

          <div className="info-card">
            <div className="info-label">
              <div className="label-dot"></div>
              GitHub (Client)
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="info-link">
              {project.github}
            </a>
          </div>
        </div>

        <div className="block">
          <div className="block-heading">Challenges Faced</div>
          <div className="block-text">{project.challenges}</div>
        </div>

        <div className="block">
          <div className="block-heading">Future Improvements</div>
          <div className="block-text">{project.improvements}</div>
        </div>

        <div className="cta-wrap">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-live">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHub Repo
          </a>
        </div>

        <div className="next-wrap">
          <div className="next-label">Next Project</div>
          <Link href={`/projects/${nextProject.id}`} className="next-card">
            <div>
              <div className="next-title">{nextProject.title}</div>
              <div className="next-sub">{nextProject.techStack.slice(0, 3).join(" · ")}</div>
            </div>
            <span className="next-arrow">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
