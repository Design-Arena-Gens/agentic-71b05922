'use client';

import React, { useState } from 'react';

interface VideoAnalyzerProps {
  onBack: () => void;
}

interface Clip {
  id: string;
  startTime: number;
  endTime: number;
  description: string;
  virality: number;
  captions: string[];
}

export default function VideoAnalyzer({ onBack }: VideoAnalyzerProps) {
  const [videoUrl, setVideoUrl] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [clips, setClips] = useState<Clip[]>([]);
  const [error, setError] = useState('');
  const [selectedPreset, setSelectedPreset] = useState('tiktok');

  const presets = [
    { id: 'tiktok', name: 'TikTok', aspect: '9:16', icon: '📱' },
    { id: 'youtube', name: 'YouTube Shorts', aspect: '9:16', icon: '▶️' },
    { id: 'instagram', name: 'Instagram Reels', aspect: '9:16', icon: '📷' },
    { id: 'square', name: 'Square', aspect: '1:1', icon: '⬜' },
  ];

  const analyzeVideo = async () => {
    if (!videoUrl.trim()) {
      setError('Please enter a video URL');
      return;
    }

    setAnalyzing(true);
    setError('');
    setClips([]);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoUrl,
          preset: selectedPreset
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze video');
      }

      const data = await response.json();
      setClips(data.clips);
    } catch (err) {
      setError('Failed to analyze video. Please check the URL and try again.');
      console.error(err);
    } finally {
      setAnalyzing(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        onClick={onBack}
        className="text-white hover:text-purple-300 transition-colors mb-8 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </button>

      <div className="glass-effect rounded-3xl p-8 md:p-12 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          AI Video Clip Generator
        </h2>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-3">
            Choose Platform Preset
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setSelectedPreset(preset.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedPreset === preset.id
                    ? 'border-purple-500 bg-purple-500 bg-opacity-20'
                    : 'border-white border-opacity-20 hover:border-opacity-40'
                }`}
              >
                <div className="text-3xl mb-2">{preset.icon}</div>
                <div className="text-white font-semibold text-sm">{preset.name}</div>
                <div className="text-gray-400 text-xs">{preset.aspect}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-3">
            Video URL (YouTube, Vimeo, or direct link)
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="flex-1 px-4 py-3 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              disabled={analyzing}
            />
            <button
              onClick={analyzeVideo}
              disabled={analyzing}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {analyzing ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-200 px-4 py-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        {analyzing && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
            <p className="text-white text-lg">AI is analyzing your video...</p>
            <p className="text-gray-400 mt-2">Finding the best viral moments</p>
          </div>
        )}
      </div>

      {clips.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4">
            Found {clips.length} Viral-Worthy Clips
          </h3>

          {clips.map((clip, index) => (
            <div
              key={clip.id}
              className="glass-effect rounded-2xl p-6 hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Clip {index + 1}
                    </span>
                    <span className="text-gray-300">
                      {formatTime(clip.startTime)} - {formatTime(clip.endTime)}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">🔥</span>
                      <span className="text-white font-semibold">{clip.virality}%</span>
                    </div>
                  </div>
                  <p className="text-white mb-3">{clip.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {clip.captions.slice(0, 3).map((caption, i) => (
                      <span
                        key={i}
                        className="bg-white bg-opacity-10 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        💬 {caption}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    Download Clip
                  </button>
                  <button className="bg-white bg-opacity-10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-20 transition-all duration-300 whitespace-nowrap">
                    Customize
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
