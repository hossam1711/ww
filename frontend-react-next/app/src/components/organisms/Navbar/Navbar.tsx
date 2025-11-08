'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {   Home,   Folder,   ClipboardList,  Database,  PlayCircle,  Calendar,  Mail,  Menu,  X } from 'lucide-react';

import Logo from '../../molecules/Logo/Logo';
import NavLink from '../../molecules/NavLink/NavLink';
import Button from '../../atoms/Button/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/services', icon: Folder, label: 'Services' },
    { href: '/how-it-works', icon: ClipboardList, label: 'How It Works' },
    { href: '/technology', icon: Database, label: 'Technology' },
    { href: '/videos', icon: PlayCircle, label: 'Videos' },
    { href: '/events', icon: Calendar, label: 'Events' },
    { href: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 relative"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Glassmorphism Background */}
      <motion.div
        className="absolute inset-0 backdrop-blur-xl bg-white/80 border-b border-white/20"
        animate={{
          backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
          backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.8)",
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink href={item.href} icon={item.icon}>
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop Buttons */}
          <motion.div 
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="outline">Login</Button>
            <Button variant="solid">Get Started</Button>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800 relative z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Background Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
                style={{ top: '0', left: '0', right: '0', bottom: '0', zIndex: 40 }}
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl lg:hidden"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                style={{ zIndex: 50 }}
              >
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 50, opacity: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                          <div className="transform hover:translate-x-[-4px] transition-transform duration-200">
                            <NavLink href={item.href} icon={item.icon}>
                              {item.label}
                            </NavLink>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Footer Buttons */}
                  <motion.div 
                    className="p-6 border-t border-gray-200 space-y-3"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Button variant="outline" className="w-full">Login</Button>
                    <Button variant="solid" className="w-full">Get Started</Button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      
      {/* Underline */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#a07916] via-[#E4B441] to-[#a07916] shadow-[0_0_10px_#E4B44180]" />
    </motion.nav>
  );
}