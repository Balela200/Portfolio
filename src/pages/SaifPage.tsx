import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function SaifPage() {
  const location = useLocation();
  const projectData = {
    '/saif-ibn-battuta': {
      title: 'SAIF IBN BATTUTA',
      image: 'https://images.unsplash.com/photo-1596996753909-8d87f51d0e0e?auto=format&fit=crop&q=80',
      github: 'https://github.com/yourusername/saif-ibn-battuta',
      behance: 'https://www.behance.net/gallery/219364341/SAIF-Ibn-Battuta',
      description: 'SAIF Ibn Battuta represents our elite tactical training program, named after the legendary explorer and tactical genius. This program combines centuries-old wisdom with modern combat techniques.'
    },
    '/mama-quack': {
      title: 'MAMA QUACK',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80',
      github: 'https://github.com/yourusername/mama-quack',
      behance: 'https://www.behance.net/gallery/mama-quack',
      description: 'A charming game featuring a mother duck protecting her ducklings. Navigate through beautifully designed levels while solving puzzles and avoiding obstacles.'
    },
    '/erthna': {
      title: 'ERTHNA',
      image: 'https://images.unsplash.com/photo-1584968153986-3f5fe523b044?auto=format&fit=crop&q=80',
      github: 'https://github.com/yourusername/erthna',
      behance: 'https://www.behance.net/gallery/erthna',
      description: 'An augmented reality experience celebrating Saudi heritage. This project combines traditional cultural elements with cutting-edge AI technology.'
    },
    '/zombie-project': {
      title: 'ZOMBIE PROJECT',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80',
      github: 'https://github.com/yourusername/zombie-project',
      behance: 'https://www.behance.net/gallery/zombie-project',
      description: 'A thrilling survival game developed in one week. Face hordes of zombies while managing resources and finding a way to escape.'
    },
    '/project-one': {
      title: 'ZOMBIE PROJECT',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80',
      github: 'https://github.com/yourusername/zombie-project',
      behance: 'https://www.behance.net/gallery/zombie-project',
      description: 'A thrilling survival game developed in one week. Face hordes of zombies while managing resources and finding a way to escape.'
    },
    '/project-two': {
      title: 'ZOMBIE PROJECT',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80',
      github: 'https://github.com/yourusername/zombie-project',
      behance: 'https://www.behance.net/gallery/zombie-project',
      description: 'A thrilling survival game developed in one week. Face hordes of zombies while managing resources and finding a way to escape.'
    }
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
            <h2 className="text-3xl font-military text-white mb-6">Project Overview</h2>
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
              <h3 className="text-xl font-military text-white mb-3">Development Phases</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-tactical-red font-military">Phase 1: Concept & Design</h4>
                  <p className="text-gray-400">Initial planning and prototype development</p>
                </div>
                <div>
                  <h4 className="text-tactical-red font-military">Phase 2: Core Development</h4>
                  <p className="text-gray-400">Implementation of main features and mechanics</p>
                </div>
                <div>
                  <h4 className="text-tactical-red font-military">Phase 3: Polish & Release</h4>
                  <p className="text-gray-400">Final touches, testing, and deployment</p>
                </div>
              </div>
            </div>

            <div className="bg-tactical-gray p-6 rounded-sm border-l-4 border-tactical-red">
              <h3 className="text-xl font-military text-white mb-3">Technologies Used</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Unity Game Engine</li>
                <li>• C# Programming</li>
                <li>• 3D Modeling and Animation</li>
                <li>• Custom Shaders and VFX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}