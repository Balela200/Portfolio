import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function SaifPage() {
  const location = useLocation();
  const projectData = {
    '/3DModeling-one': {
      title: '3D Modeling',
      image: 'https://l.top4top.io/p_3343mzg7w1.png',
      github: 'https://github.com/yourusername/nebula-drift',
      behance: 'https://www.behance.net/gallery/220151667/3D-Model',
      description: 'An immersive VR space exploration game that puts players in control of their own spacecraft. Navigate through stunning nebulae, dodge asteroid fields, and uncover mysterious alien artifacts. Features realistic physics-based movement and breathtaking cosmic vistas.'
    },
  };

  const project = projectData[location.pathname];

  return (
    <main className="pt-20">
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-tactical-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl md:text-7xl font-military text-white text-center">
            {project.title}
          </h1>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tactical-red hover:bg-red-700 text-white font-military px-6 py-3 rounded-sm transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={project.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1769ff] hover:bg-[#0d4bc6] text-white font-military px-6 py-3 rounded-sm transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Behance
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center bg-tactical-black hover:bg-tactical-gray text-tactical-red hover:text-red-700 font-military mb-8 px-4 py-2 rounded-sm transition-all duration-300 border border-tactical-red"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Operations
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-military text-white mb-6">3D Modeling</h2>
            <p className="text-gray-300 mb-4">
              {project.description}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Advanced game mechanics and controls</li>
              <li>Immersive storytelling and world-building</li>
              <li>Optimized performance and smooth gameplay</li>
              <li>Engaging user experience design</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-tactical-gray p-6 rounded-sm border-l-4 border-tactical-red">
              <h3 className="text-xl font-military text-white mb-3">Technologies Used</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Maya | Blender - 3D Modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}