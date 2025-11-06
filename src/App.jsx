import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="font-inter text-gray-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold text-orange-600">Portfolio</a>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#about" className="hover:text-orange-700">About</a>
            <a href="#projects" className="hover:text-orange-700">Projects</a>
            <a href="#contact" className="hover:text-orange-700">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-orange-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-orange-700 md:text-sm"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Main Sections */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Your Name</p>
          <a href="#home" className="text-orange-600">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
