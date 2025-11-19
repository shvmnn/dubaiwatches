import React from 'react';
import Hero from './components/Hero';
import ContactCard from './components/ContactCard';
import AiPitch from './components/AiPitch';
import Marketplaces from './components/Marketplaces';
import Footer from './components/Footer';
import { ContactInfo } from './types';

const contactInfo: ContactInfo = {
  phone: "+39 334 829 7425",
  email: "shivamineo@gmail.com"
};

const DOMAIN_NAME = "dubaiwatches.ae";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden flex flex-col font-sans">
      
      <main className="flex-grow flex flex-col items-center relative z-10 pb-20">
        
        {/* Hero Section */}
        <Hero domainName={DOMAIN_NAME} />

        {/* Call To Action Text */}
        <section className="text-center mb-12 px-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Secure This Digital Asset
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            A rare opportunity to own a category-defining domain in the luxury capital of the world. Perfect for established brands or visionary investors.
          </p>
        </section>

        {/* Contact Options */}
        <section className="w-full mb-16">
          <ContactCard contact={contactInfo} />
        </section>

        {/* Marketplaces */}
        <section className="w-full mb-24">
          <Marketplaces />
        </section>

        {/* Future Roadmap / Threat of Development */}
        <section className="w-full max-w-4xl mx-auto px-6">
          <div className="relative bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 p-8 rounded-r-xl shadow-sm">
             <p className="text-gray-600 text-lg md:text-xl font-medium italic leading-relaxed text-center md:text-left">
              "If an acquisition does not take place, we will proceed with building a Dubai-based luxury watch platform on this domain."
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;