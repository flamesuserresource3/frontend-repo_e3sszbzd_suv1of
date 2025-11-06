import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-white">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft top-to-bottom fade so text stays readable; overlay doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-orange-300 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
          Minimalist Portfolio
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 md:text-6xl">
          Hi, I’m <span className="text-orange-600">Your Name</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          Frontend developer crafting clean, responsive, and delightful web experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-orange-300 bg-white px-5 py-2.5 text-sm font-medium text-orange-700 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
