import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function SaifPage() {
  const location = useLocation();
  const projectData = {
    '/saif-ibn-battuta': {
      title: 'SAIF IBN BATTUTA',
      image: 'https://a.top4top.io/p_3343m50s31.png',
      github: 'https://github.com/yourusername/saif-ibn-battuta',
      behance: 'https://www.behance.net/gallery/219364341/SAIF-Ibn-Battuta',
      description: 'SAIF Ibn Battuta represents our elite tactical training program, named after the legendary explorer and tactical genius. This program combines centuries-old wisdom with modern combat techniques.'
    },
    '/mama-quack': {
      title: 'MAMA QUACK',
      image: 'https://b.top4top.io/p_3343x7ott1.png',
      github: 'https://github.com/yourusername/mama-quack',
      behance: 'https://www.behance.net/gallery/220068879/Mama-Quack',
      description: 'A charming game featuring a mother duck protecting her ducklings. Navigate through beautifully designed levels while solving puzzles and avoiding obstacles.'
    },
    '/erthna': {
      title: 'UI Shooting Game',
      image: 'https://h.top4top.io/p_3343iyull1.png',
      github: 'https://github.com/yourusername/erthna',
      behance: 'https://www.behance.net/gallery/220148369/UI-Shooting-Game',
      description: 'This design was part of my training to improve my skills in UI design for electronic games. In this design, I aimed to make it resemble modern games while ensuring it is clean, organized, and visually appealing. My goal was to create a UI that provides all the essential data the player needs while maintaining a seamless and enjoyable user experience.'
    },
    '/zombie-project': {
      title: 'ZOMBIE PROJECT',
      image: 'https://j.top4top.io/p_3343qlttf1.png',
      github: 'https://github.com/yourusername/zombie-project',
      behance: 'https://www.behance.net/gallery/220063381/Zombie-project',
      description: 'A thrilling survival game developed in one week. Face hordes of zombies while managing resources and finding a way to escape.'
    },
    '/project-one': {
      title: '3D Modeling',
      image: 'https://l.top4top.io/p_3343mzg7w1.png',
      github: 'https://github.com/yourusername/nebula-drift',
      behance: 'https://www.behance.net/gallery/220151667/3D-Model',
      description: 'Some of the remarkable projects I have designed using powerful 3D modeling software like Blender and Maya showcase my passion and creativity in this field. I always strive to turn ideas into realistic and stunning models by paying close attention to the finest details, whether in modeling, lighting, or texturing. Every project I work on presents a new challenge and an opportunity to enhance my skills and explore new possibilities. My use of advanced tools like Blender and Maya allows me to create imaginative worlds and captivating visual scenes that tell inspiring stories.'
    },
    '/project-two': {
      title: 'Other Games',
      image: 'https://d.top4top.io/p_3343opu0i1.png',
      github: 'https://github.com/yourusername/echo-warriors',
      behance: 'https://www.behance.net/gallery/220154543/Other-games',
      description: 'These are some of the games I have developed, each crafted within a maximum time frame of one week. Despite the tight deadlines, my focus has always been on delivering an enjoyable and engaging experience for the players. I consistently push the boundaries of creativity, experimenting with unique gameplay mechanics and captivating storylines to keep players immersed. Each project challenges me to think outside the box, optimizing gameplay elements and refining user experiences. My dedication to crafting fun and memorable games drives me to innovate continuously, ensuring that every game not only entertains but also leaves a lasting impression on the players.'
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
              
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-tactical-gray p-6 rounded-sm border-l-4 border-tactical-red">
              <h3 className="text-xl font-military text-white mb-3">My Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-tactical-red font-military">1: Saif Ibn Battuta</h4>
                  <p className="text-gray-400"></p>
                </div>
                <div>
                  <h4 className="text-tactical-red font-military">2: Mama Quack</h4>
                  <p className="text-gray-400"></p>
                </div>
                <div>
                  <h4 className="text-tactical-red font-military">3: Zombie Project</h4>
                  <p className="text-gray-400"></p>
                </div>
              </div>
            </div>

            <div className="bg-tactical-gray p-6 rounded-sm border-l-4 border-tactical-red">
              <h3 className="text-xl font-military text-white mb-3">Technologies Used</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Unity Game Engine</li>
                <li>• C# Programming</li>
                <li>• Maya | Blender - 3D Modeling</li>
                <li>• Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}