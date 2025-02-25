import React from 'react';
import { Link } from 'react-router-dom';

export default function Operations() {
  const operations = [
    {
      title: 'SAIF IBN BATTUTA',
      description: 'RPG game developed with CAT NIP team. A 3-week project bringing dreams to reality.',
      image: 'https://a.top4top.io/p_3343m50s31.png',
      link: '/saif-ibn-battuta'
    },
    {
      title: 'Mama Quack',
      description: 'Level design with cheerful and vibrant environment, featuring low-poly style and carefully crafted maps.',
      image: 'https://b.top4top.io/p_3343x7ott1.png',
      link: '/mama-quack'
    },
    {
      title: 'UI Shooting Game',
      description: 'This design was part of my training to improve my skills in UI design for electronic games.',
      image: 'https://h.top4top.io/p_3343iyull1.png',
      link: '/erthna'
    },
    {
      title: 'Zombie Project',
      description: 'Solo-developed game completed in one week, featuring unique gameplay mechanics and innovative design.',
      image: 'https://j.top4top.io/p_3343qlttf1.png',
      link: '/zombie-project'
    },
    {
      title: '3D Modeling',
      description: 'Some of the remarkable projects I have designed using powerful 3D modeling software like Blender and Maya showcase my passion and creativity in this field.',
      image: 'https://l.top4top.io/p_3343mzg7w1.png',
      link: '/project-one'
    },
    {
      title: 'Other Games',
      description: 'These are some of the games I have developed, each crafted within a maximum time frame of one week.',
      image: 'https://d.top4top.io/p_3343opu0i1.png',
      link: '/project-two'
    }
  ];

  return (
    <section id="operations" className="py-24 bg-tactical-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-military text-white text-center mb-16">
          PROJECTS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operations.map((op, index) => (
            <Link
              key={index}
              to={op.link}
              className="group bg-tactical-black rounded-sm border-l-4 border-tactical-red hover:transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={op.image}
                  alt={op.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-tactical-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-military text-white mb-3 group-hover:text-tactical-red transition-colors">
                  {op.title}
                </h3>
                <p className="text-gray-400">
                  {op.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}