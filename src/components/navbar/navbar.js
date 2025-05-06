"use client";
import Link from 'next/link';
import { useState } from 'react';
import ContactModal from '../contactModal/ContactModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="bg-custom-green backdrop-filter  w-full fixed top-0 left-0 z-50 py-4 sm:py-2">
      <div className="px-[6em]  ">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
          <Link href="/" className="text-custom-beige text-4xl font-AbrilFatface ">
             Hadiqa Sumbal
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link href="#about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-NATS text-custom-beige">
                About Me
              </Link>
              <Link href="#resume" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-NATS text-custom-beige">
                Resume
              </Link>
              <Link href="/projects" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-NATS text-custom-beige">
                Projects
              </Link>
              <Link href="#work" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-NATS text-custom-beige">
                Work
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="bg-custom-yellow text-black hover:bg-yellow-600 px-4 py-2 rounded-2xl text-2xl font-NATS cursor-pointer"
              >
                Get in touch!
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
