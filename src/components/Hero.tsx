import React from 'react';
import { Gamepad2, Mail, Linkedin, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-tactical-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Gamepad2 className="w-16 h-16 mx-auto mb-8 text-tactical-red" />
            <h1 className="text-5xl md:text-7xl font-military mb-4">
              MOHANAD KHALIFA
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              Game Developer | Game Programmer C# | Unity | XR Developer
            </p>
            <div className="flex justify-center items-center gap-6 text-gray-400">
              <a href="https://www.linkedin.com/in/mohanad-khalifa-85a90a318/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 hover:text-tactical-red transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Riyadh, Saudi Arabia
              </span>
            </div>
          </div>

          <div className="bg-tactical-gray p-8 rounded-sm border-l-4 border-tactical-red mb-12">
            <p className="text-gray-300 leading-relaxed">
              With two years of experience in game development, I am passionate about creating enjoyable and innovative games. 
              My expertise lies in level design and programming, with programming being my core strength in game development. 
              Additionally, I have experience in 3D design using Maya and Blender, as well as creating user interfaces (UI) for games. 
              I leverage these skills to enhance the quality of games and contribute to the development of future projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-military text-tactical-red mb-6">Experience</h2>
              <div className="space-y-6">
                <div className="bg-tactical-gray p-6 rounded-sm">
                  <h3 className="text-xl font-military text-white">CatNip Studio</h3>
                  <p className="text-gray-400">Game Programmer</p>
                  <p className="text-sm text-gray-500">07/2024 - 11/2024</p>
                </div>
                <div className="bg-tactical-gray p-6 rounded-sm">
                  <h3 className="text-xl font-military text-white">Duck Studios</h3>
                  <p className="text-gray-400">Game Programmer</p>
                  <p className="text-sm text-gray-500">09/2024 - 10/2024</p>
                </div>
                <div className="bg-tactical-gray p-6 rounded-sm">
                  <h3 className="text-xl font-military text-white">Tuwaiq Academy</h3>
                  <p className="text-gray-400">Game Developer, Unity Developer</p>
                  <p className="text-sm text-gray-500">04/2024 - 07/2024</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-military text-tactical-red mb-6">Education & Certifications</h2>
              <div className="space-y-6">
                <div className="bg-tactical-gray p-6 rounded-sm">
                  <h3 className="text-xl font-military text-white">King Saud University</h3>
                  <p className="text-gray-400">Intermediate diploma Degree</p>
                  <p className="text-gray-400">Programming and databases</p>
                  <p className="text-sm text-gray-500">01/2020 - 03/2023</p>
                </div>
                <div className="bg-tactical-gray p-6 rounded-sm">
                  <h3 className="text-xl font-military text-white">Unity Certified Associate</h3>
                  <p className="text-gray-400">Programmer</p>
                </div>
                <div className="bg-tactical-gray p-6 rounded-sm">
                  <h3 className="text-xl font-military text-white">Career Ready Badge</h3>
                  <p className="text-gray-400">Misk Skills</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-military text-tactical-red mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {[
                'Unity', 'C#', 'Virtual Reality Development', '3D Modeling', 'XR Developer',
                'Metaverse', 'Maya', 'UI/UX Design', 'Game Mechanics', 'Game Optimization',
                'Git', 'OOP', 'MySQL', 'Video Game Design', 'Mobile Games', 'Teamwork'
              ].map((skill, index) => (
                <span key={index} className="bg-tactical-gray px-4 py-2 rounded-sm text-gray-300 font-military">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}