import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 bg-gray-50 border-t border-gray-100">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>Secure Transaction via Escrow</span>
        </div>
        <p className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Dubai Watches. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;