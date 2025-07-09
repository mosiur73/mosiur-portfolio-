"use client";

import Link from "next/link";
import projects from "../../../public/data.json";

export default function ProjectsPage() {
  return (
    <section id="projects" 
     className="min-h-screen py-20 ">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 flex items-center justify-center ">
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                    className="rounded-lg h-full object-cover"
                  />
                </div>
                <div className="bg-[#0a192f] p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description.slice(0, 70)}...
                  </p>
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
