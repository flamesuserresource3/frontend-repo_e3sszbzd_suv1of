import React from 'react';

const projects = [
  {
    title: 'Compact Dashboard',
    desc: 'A clean admin dashboard with focus on readability and speed.',
    link: '#',
  },
  {
    title: 'Landing Page',
    desc: 'Minimal marketing page with smooth interactions and clear CTAs.',
    link: '#',
  },
  {
    title: 'Design System',
    desc: 'Reusable components and tokens for consistent product UIs.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Projects</h2>
          <a href="#contact" className="text-sm font-medium text-orange-700 hover:text-orange-800">
            Let’s work together →
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group rounded-2xl border border-orange-200/70 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-white text-orange-600">
                <span className="text-sm font-semibold">{p.title}</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">{p.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-orange-700">
                View project →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
