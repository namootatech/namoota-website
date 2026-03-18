'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// Animated gradient text component
const GradientText = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-cyan-400 via-sky-500 to-orange-400 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

// Shine effect overlay for text
const ShineEffect = ({ children }) => {
  return (
    <span className="relative inline-block overflow-hidden">
      {children}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      />
    </span>
  );
};

// CTA Button with micro-interactions
const CTAButton = ({ href, children, variant = 'primary' }) => {
  const baseClasses =
    'relative px-6 py-3 font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 transform';
  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40',
    secondary:
      'bg-white/10 backdrop-blur-sm border-2 border-sky-400/50 text-sky-500 dark:text-sky-300 hover:bg-sky-500/10 hover:border-sky-400',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      <Link href={href} className={`${baseClasses} ${variants[variant]} block`}>
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

// Quick action links
const QuickLink = ({ href, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    <Link
      href={href}
      className="group relative px-4 py-2 text-center font-semibold text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors duration-300"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-orange-400 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  </motion.div>
);

const Hero = () => {
  const [init, setInit] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  }, [isDark]);

  // Particles configuration - tech/circuit style with SA-inspired warm accents
  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: isDark
            ? ['#06b6d4', '#0ea5e9', '#f97316', '#8b5cf6']
            : ['#0ea5e9', '#06b6d4', '#f97316', '#7c3aed'],
        },
        links: {
          color: isDark ? '#38bdf8' : '#0ea5e9',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 40,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: ['circle', 'triangle'],
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [isDark]
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950 transition-colors duration-500">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={particlesOptions}
        />
      )}

      {/* Gradient Orbs - Johannesburg sunset inspired */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/20 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/20 via-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-sky-400/5 via-purple-500/5 to-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Dark Mode Toggle */}
      <motion.button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-slate-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left lg:w-7/12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-900/50 border border-sky-200 dark:border-sky-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                </span>
                <span className="text-sm font-medium text-sky-700 dark:text-sky-300">
                  Proudly South African Digital Agency
                </span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="mb-4 font-semibold text-sky-500 dark:text-sky-400 md:text-lg xl:text-xl"
            >
              <ShineEffect>Your Digital Success Starts Here</ShineEffect>
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white leading-tight"
            >
              <span className="block">Build Smarter,</span>
              <span className="block">Grow Faster,</span>
              <GradientText>Win Bigger</GradientText>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0"
            >
              You have the vision; we bring it to life. Whether you need a
              stunning website, a powerful mobile app, or a winning digital
              marketing strategy, we make it easy for you to grow your business
              and reach new heights with technology built for your goals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <CTAButton href="/get-a-quote" variant="primary">
                Get a Free Quote
              </CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Let's Talk
              </CTAButton>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 border-t border-slate-200 dark:border-slate-700 pt-6">
                <QuickLink href="/get-a-website" delay={0.6}>
                  Get a Website
                </QuickLink>
                <span className="text-slate-300 dark:text-slate-600 hidden sm:block">
                  |
                </span>
                <QuickLink href="/build-an-app" delay={0.7}>
                  Build an App
                </QuickLink>
                <span className="text-slate-300 dark:text-slate-600 hidden sm:block">
                  |
                </span>
                <QuickLink href="/sell-online" delay={0.8}>
                  Sell Online
                </QuickLink>
                <span className="text-slate-300 dark:text-slate-600 hidden sm:block">
                  |
                </span>
                <QuickLink href="/advertise" delay={0.9}>
                  Advertise
                </QuickLink>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="lg:w-5/12 relative"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-2xl shadow-lg shadow-cyan-500/30"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full shadow-lg shadow-orange-500/30"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-lg shadow-lg shadow-purple-500/30"
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-sky-500/20 border border-sky-200/50 dark:border-sky-800/50">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-orange-500/20 z-10" />
                <img
                  src="/look2.jpg"
                  loading="lazy"
                  alt="Namoota Digital Agency - Building digital solutions in Johannesburg"
                  className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Stats Badge */}
              <motion.div
                className="absolute -bottom-6 left-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-slate-100 dark:border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">
                      100+
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Projects Delivered
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-sky-400/50 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-sky-500 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
