import React, { useState } from 'react';
import { Phone, Mail, Copy, Check, ArrowRight } from 'lucide-react';
import { ContactInfo } from '../types';

interface ContactCardProps {
  contact: ContactInfo;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link click if clicking copy
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto px-4">
      {/* Phone Card */}
      <a 
        href={`tel:${contact.phone.replace(/\s/g, '')}`}
        className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7 text-blue-600" />
            </div>
            <div className="bg-gray-50 rounded-full p-2 group-hover:bg-white transition-colors">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-2">Call / WhatsApp</h3>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
              {contact.phone}
            </p>
            
            <button 
              onClick={(e) => handleCopy(contact.phone, 'phone', e)}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              {copied === 'phone' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied === 'phone' ? 'Copied to clipboard' : 'Copy Number'}
            </button>
          </div>
        </div>
      </a>

      {/* Email Card */}
      <a 
        href={`mailto:${contact.email}`}
        className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-between">
           <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-purple-600" />
            </div>
            <div className="bg-gray-50 rounded-full p-2 group-hover:bg-white transition-colors">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
            </div>
          </div>

          <div>
            <h3 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-2">Email Inquiry</h3>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 break-all group-hover:text-purple-700 transition-colors">
              {contact.email}
            </p>
            
            <button 
               onClick={(e) => handleCopy(contact.email, 'email', e)}
               className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors"
            >
              {copied === 'email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied === 'email' ? 'Copied to clipboard' : 'Copy Email'}
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactCard;