import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SaifPage() {
  return (
    <main className="pt-20">
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1596996753909-8d87f51d0e0e?auto=format&fit=crop&q=80"
          alt="SAIF Ibn Battuta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-tactical-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl md:text-7xl font-military text-white text-center">
            SAIF IBN BATTUTA
          </h1>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername/saif-ibn-battuta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tactical-red hover:bg-red-700 text-white font-military px-6 py-3 rounded-sm transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.behance.net/gallery/219364341/SAIF-Ibn-Battuta"
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
            <h2 className="text-3xl font-military text-white mb-6">Mission Overview</h2>
            <p className="text-gray-300 mb-4">
              SAIF Ibn Battuta represents our elite tactical training program, named after the legendary explorer and tactical genius. This program combines centuries-old wisdom with modern combat techniques.
            </p>
            <p className="text-gray-300 mb-4">
              Our comprehensive training methodology focuses on developing advanced tactical awareness, strategic decision-making, and combat proficiency in diverse operational environments.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Advanced combat tactics and strategies</li>
              <li>Urban warfare and close-quarters battle training</li>
              <li>Survival and adaptation techniques</li>
              <li>Strategic mission planning and execution</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-tactical-gray p-6 rounded-sm border-l-4 border-tactical-red">
              <h3 className="text-xl font-military text-white mb-3">Training Phases</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-tactical-red font-military">Phase 1: Foundation</h4>
                  <p className="text-gray-400">Basic combat principles and physical conditioning</p>
                </div>
                <div>
                  <h4 className="text-tactical-red font-military">Phase 2: Advanced Tactics</h4>
                  <p className="text-gray-400">Specialized combat techniques and tactical operations</p>
                </div>
                <div>
                  <h4 className="text-tactical-red font-military">Phase 3: Elite Operations</h4>
                  <p className="text-gray-400">Advanced mission planning and execution</p>
                </div>
              </div>
            </div>

            <div className="bg-tactical-gray p-6 rounded-sm border-l-4 border-tactical-red">
              <h3 className="text-xl font-military text-white mb-3">Requirements</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Minimum 2 years of military experience</li>
                <li>• Superior physical fitness standards</li>
                <li>• Security clearance level: Top Secret</li>
                <li>• Psychological evaluation clearance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}