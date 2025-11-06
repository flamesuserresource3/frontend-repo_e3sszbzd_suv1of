import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-white to-orange-50 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Contact</h2>
          <p className="mt-3 text-gray-600">
            Interested in collaborating? Send an email and I’ll get back to you.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            >
              hello@example.com
            </a>
            <a
              href="#"
              className="rounded-full border border-orange-300 bg-white px-5 py-2.5 text-sm font-medium text-orange-700 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="rounded-full border border-orange-300 bg-white px-5 py-2.5 text-sm font-medium text-orange-700 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
