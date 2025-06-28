import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleLetsTalkClick = () => {
    scrollToSection('contact');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        
        <main>
          <Hero onScrollToSection={scrollToSection} />
          <About />
          <Projects />
          <Skills />
          <Blog />
          <Contact />
        </main>
        
        <FloatingCTA onLetsTalkClick={handleLetsTalkClick} />
        
        {/* Footer */}
        <motion.footer 
          className="bg-white dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-800/50 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <motion.div
                className="flex items-center justify-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CG</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ChampGok
                </span>
              </motion.div>
              
              <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} ChampGok. Crafted with passion and precision.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                Built with React, TypeScript, Tailwind CSS, and Framer Motion
              </p>
              
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-purple-600 dark:text-purple-400 font-medium">
                  "Fueled by code and curiosity" ✨
                </span>
              </motion.div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;