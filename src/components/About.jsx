import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              About Me
            </h2>
            <p className="mt-4 text-gray-600">
              I’m a developer focused on minimalist, accessible interfaces. I
              enjoy turning complex ideas into simple, useful products. My
              toolbox includes React, Tailwind, and modern web tooling.
            </p>
            <div className="mt-6 flex gap-3">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                React
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                Tailwind
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                UX-First
              </span>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6">
              <p className="text-sm leading-relaxed text-gray-700">
                I believe great design is about clarity. I keep layouts compact,
                typography clean, and interactions smooth. My process is
                iterative and collaborative, focused on delivering value fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
