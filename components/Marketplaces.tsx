import React from 'react';
import { ExternalLink, Globe, ShoppingBag } from 'lucide-react';

const Marketplaces: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="text-center mb-8">
        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Verified Marketplace Listings</span>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {/* Sedo */}
        <a 
          href="https://sedo.com/search/?keyword=dubaiwatches.ae" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-start">
            <span className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">Sedo</span>
            <span className="text-xs text-gray-500 font-medium mt-1">Accepting offer submissions. </span>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors" />
        </a>

        {/* Spaceship */}
        <a 
          href="https://www.spaceship.com/domain-search/?query=dubaiwatches.ae&tab=domains" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-start">
            <span className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">Spaceship</span>
            <span className="text-xs text-gray-500 font-medium mt-1">Accepting offer submissions. </span>
          </div>
          <Globe className="w-5 h-5 text-gray-300 group-hover:text-purple-600 transition-colors" />
        </a>

        {/* Afternic */}
        <div className="flex items-center justify-between p-6 bg-gray-50 border border-gray-200 rounded-2xl opacity-90">
          <div className="flex flex-col items-start">
            <span className="font-bold text-gray-700 text-lg">Afternic</span>
            <span className="text-xs text-gray-400 font-medium mt-1">Submit your offer via email, the final acquisition handled securely through Afternic. </span>
          </div>
          <ShoppingBag className="w-5 h-5 text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Marketplaces;