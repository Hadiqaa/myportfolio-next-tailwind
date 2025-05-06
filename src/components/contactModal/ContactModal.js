"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would normally send the form data to a server
    console.log('Form submitted:', formState);
    // Show success message and reset form
    alert('Thanks for reaching out! I\'ll get back to you soon 💫');
    setFormState({ name: '', email: '', message: '' });
    onClose();
  };

  useEffect(() => {
    if (!modalRef.current) return;
    
    // Animation timeline
    const tl = gsap.timeline({ paused: true });
    
    // Initial state
    gsap.set(modalRef.current, { autoAlpha: 0 });
    gsap.set(contentRef.current, { y: 50, scale: 0.8, rotation: -5 });
    
    // Animation sequence
    tl.to(modalRef.current, { 
      autoAlpha: 1, 
      duration: 0.3,
      ease: "power2.inOut" 
    })
    .to(contentRef.current, { 
      y: 0, 
      scale: 1, 
      rotation: 0,
      duration: 0.5, 
      ease: "elastic.out(1, 0.5)" 
    })
    .from(".modal-item", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "back.out(1.7)"
    });
    
    // Play or reverse the animation based on isOpen state
    if (isOpen) {
      tl.play();
      // Add floating animation to the form
      gsap.to(formRef.current, {
        y: "-8px",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    } else {
      tl.reverse();
    }
    
    return () => {
      tl.kill();
    };
  }, [isOpen]);

  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };
  
  // Handle close button click with stopPropagation
  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        ref={contentRef}
        className="bg-custom-beige w-full max-w-lg mx-4 rounded-3xl overflow-hidden shadow-2xl relative"
      >
        {/* Close button */}
        <button 
          onClick={handleCloseClick}
          className="absolute top-4 right-4 text-custom-maroon hover:text-black transition-colors z-10 modal-item bg-white/50 p-1 rounded-full hover:bg-white/80 transform hover:rotate-90 transition-all duration-300"
        >
          <IoClose size={28} />
        </button>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-custom-yellow rounded-full -translate-x-16 -translate-y-16 opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-custom-maroon rounded-full translate-x-12 translate-y-12 opacity-60"></div>
        
        <div className="p-8 relative z-10">
          <h2 className="text-4xl font-AbrilFatface text-custom-maroon mb-6 modal-item">Get in Touch!</h2>
          
          {/* Contact form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 modal-item">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-NATS text-custom-green">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl bg-white/70 border-2 border-custom-yellow focus:outline-none focus:border-custom-maroon transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-NATS text-custom-green">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl bg-white/70 border-2 border-custom-yellow focus:outline-none focus:border-custom-maroon transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-NATS text-custom-green">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 rounded-xl bg-white/70 border-2 border-custom-yellow focus:outline-none focus:border-custom-maroon transition-colors resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-custom-green text-custom-beige text-xl font-NATS rounded-xl hover:bg-custom-maroon transition-colors duration-300 transform hover:scale-105"
            >
              Send Message ✨
            </button>
          </form>
          
          {/* Social links */}
          <div className="mt-6 flex justify-center space-x-6 modal-item">
            <a href="mailto:hadiqa@example.com" className="text-custom-green hover:text-custom-maroon transition-colors transform hover:scale-110">
              <FaEnvelope size={24} />
            </a>
            <a href="https://www.linkedin.com/in/hadiqaa" target="_blank" rel="noopener noreferrer" className="text-custom-green hover:text-custom-maroon transition-colors transform hover:scale-110">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/hadiqaa" target="_blank" rel="noopener noreferrer" className="text-custom-green hover:text-custom-maroon transition-colors transform hover:scale-110">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
