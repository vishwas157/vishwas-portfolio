import React from 'react';
import { User, Sparkles } from 'lucide-react';

export default function WebGLFallback({ message }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-950/60 rounded-3xl border border-indigo-500/20 backdrop-blur-md relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10 pointer-events-none" />
      
      {/* 2D Stylized Avatar Placeholder */}
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 p-1 shadow-2xl shadow-indigo-500/20">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
            <User className="w-16 h-16 text-indigo-300" />
            <Sparkles className="w-6 h-6 text-cyan-400 absolute top-4 right-4 animate-pulse" />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 font-heading">
        Vishwas Suthar 3D Avatar
      </h3>
      
      <p className="text-sm text-slate-300 max-w-md mb-4 leading-relaxed">
        {message || "Interactive 3D model mode. When you add /public/models/character.glb, your custom 3D character will appear here with dynamic mouse tracking!"}
      </p>

      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
        3D Loader Ready
      </span>
    </div>
  );
}
