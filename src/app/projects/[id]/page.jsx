
import projects from "../../../../public/data.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectDetails({ params }) {
  const project = projects.find(
    (p) => String(p.id) === params.id
  );

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center py-20">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20">
        <img
          src={project.imgUrl}
          alt={project.title}
          className="w-full rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <p className="text-gray-400 mb-4">
          <strong>Challenges:</strong> {project.challenges}
        </p>
        <p className="text-gray-400 mb-4">
          <strong>Improvements:</strong> {project.improvements}
        </p>

        <div className="flex gap-4 mb-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded hover:scale-105 transition-transform duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded hover:scale-105 transition-transform duration-300"
          >
            GitHub
          </a>
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2 py-1 rounded bg-white/10 text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
