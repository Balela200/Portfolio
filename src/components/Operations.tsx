import React from 'react';
import { Link } from 'react-router-dom';

export default function Operations() {
  const operations = [
    {
      title: 'SAIF IBN BATTUTA',
      description: 'RPG game developed with CAT NIP team. A 3-week project bringing dreams to reality.',
      image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?auto=format&fit=crop&q=80',
      link: '/saif-ibn-battuta'
    },
    {
      title: 'Mama Quack',
      description: 'Level design with cheerful and vibrant environment, featuring low-poly style and carefully crafted maps.',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80',
      link: '/mama-quack'
    },
    {
      title: 'Erthna',
      description: 'AR project celebrating Saudi heritage with AI integration. Responsible for programming and UI design.',
      image: 'https://images.unsplash.com/photo-1584968153986-3f5fe523b044?auto=format&fit=crop&q=80',
      link: '/erthna'
    },
    {
      title: 'Zombie Project',
      description: 'Solo-developed game completed in one week, featuring unique gameplay mechanics and innovative design.',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80',
      link: '/zombie-project'
    },
    {
      title: 'NEBULA DRIFT',
      description: 'VR space exploration game with realistic physics and stunning visuals. Navigate through asteroid fields and discover ancient artifacts.',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80',
      link: '/project-one'
    },
    {
      title: 'ECHO WARRIORS',
      description: 'Multiplayer rhythm-combat game where music affects gameplay mechanics. Features procedurally generated levels and dynamic combat.',
      image: 'https://images.unsplash.com/photo-1514533212735-5df27d970db9?auto=format&fit=crop&q=80',
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