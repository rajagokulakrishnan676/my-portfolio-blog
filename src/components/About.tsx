import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Zap, Heart, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable applications with modern technologies and best practices',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamlining workflows and eliminating repetitive tasks through intelligent automation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Data Analytics',
      description: 'Transforming raw data into actionable insights and compelling visualizations',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Creative solutions to complex challenges using technology and innovation',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet the <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Creator</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Animated Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    CG
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Gokulakrishnan</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Developer & Creator</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a passionate developer who thrives on turning complex problems into elegant solutions. 
                    With expertise spanning full-stack development, automation, cybersecurity, and data analytics, 
                    I create tools and systems that make a real difference.
                  </p>
                  
                  <motion.div 
                    className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Heart className="w-5 h-5" />
                    <span>"Fueled by code and curiosity"</span>
                  </motion.div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My journey in technology is driven by curiosity and the desire to build something meaningful. 
                    Whether it's crafting intuitive user interfaces, designing secure systems, or automating 
                    tedious processes, I approach every project with creativity and precision.
                  </p>
                </div>

                {/* Fun Fact */}
                <motion.div 
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-4 border border-purple-200/50 dark:border-purple-700/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <Coffee className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Coffee-powered coding sessions are my specialty! ☕
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300/50 dark:hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <highlight.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* What Drives Me Section */}
        <motion.div 
          className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 rounded-3xl p-8 border border-purple-200/30 dark:border-purple-700/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">What Drives Me</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Building solutions that solve real-world problems',
              'Continuous learning and staying ahead of technology trends',
              'Creating efficient, scalable, and maintainable code',
              'Collaborating with teams to deliver exceptional results'
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 pt-12 border-t border-gray-200/50 dark:border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '30+', label: 'Projects Completed' },
              { number: 'Fresher', label: 'Years Experience' },
              { number: '10+', label: 'Technologies Mastered' },
              { number: '100%', label: 'Real World Problems' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;