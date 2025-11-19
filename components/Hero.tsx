import React from 'react';
import { BadgeCheck } from 'lucide-react';

interface HeroProps {
  domainName: string;
}

const Hero: React.FC<HeroProps> = ({ domainName }) => {
  return (
    <div className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
      {/* Abstract Background Blobs */}
      <div className="blob bg-blue-400 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="blob bg-purple-400 w-[500px] h-[500px] rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-30"></div>
      <div className="blob bg-pink-300 w-64 h-64 rounded-full top-1/4 right-1/4 opacity-20 animate-float"></div>
      
      <div className="relative z-10 animate-slide-up max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <BadgeCheck className="w-4 h-4 text-indigo-600" />
          <span className="text-gray-600 text-xs font-bold uppercase tracking-wider">Verified Premium Domain</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="modern-gradient-text">{domainName}</span>
        </h1>

        <p className="text-gray-500 font-medium text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The definitive digital address for luxury horology in the UAE.
        </p>
      </div>
    </div>
  );
};

export default Hero;