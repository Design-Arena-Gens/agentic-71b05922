'use client';

import { useState } from 'react';
import VideoAnalyzer from '@/components/VideoAnalyzer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

export default function Home() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-white font-bold text-xl">StoryHero Free</span>
            </div>
            <button
              onClick={() => setShowAnalyzer(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {!showAnalyzer ? (
        <>
          <Hero onGetStarted={() => setShowAnalyzer(true)} />
          <Features />
        </>
      ) : (
        <div className="pt-24 pb-12">
          <VideoAnalyzer onBack={() => setShowAnalyzer(false)} />
        </div>
      )}

      <footer className="bg-black bg-opacity-50 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            100% Free • No Sign Up Required • Unlimited Usage
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Powered by AI • Built for Creators
          </p>
        </div>
      </footer>
    </main>
  );
}
