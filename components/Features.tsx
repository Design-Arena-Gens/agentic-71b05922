import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Our AI watches your video like a dedicated fan, identifying viral-worthy moments automatically'
    },
    {
      icon: '✂️',
      title: 'Smart Clip Detection',
      description: 'Automatically finds the most engaging segments from your long-form content'
    },
    {
      icon: '💬',
      title: 'Auto Captions',
      description: 'Generates accurate captions and text hooks to keep viewers engaged'
    },
    {
      icon: '🎨',
      title: 'Custom Styling',
      description: 'Choose from presets for sizing, backgrounds, and fonts optimized for each platform'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get your clips ready in minutes, not hours of manual editing'
    },
    {
      icon: '📱',
      title: 'Multi-Platform',
      description: 'Optimized for TikTok, YouTube Shorts, Instagram Reels, and more'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Everything You Need to Go Viral
        </h2>
        <p className="text-xl text-gray-300">
          Professional video editing, powered by AI, completely free
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 glass-effect rounded-3xl p-12">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Upload or Paste Link</h4>
              <p className="text-gray-300">Drop your video URL or upload a file from your device</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-bold text-white mb-2">AI Analyzes Content</h4>
              <p className="text-gray-300">Our AI identifies the best moments and creates clips</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Download & Share</h4>
              <p className="text-gray-300">Get your finished clips ready to post on any platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
