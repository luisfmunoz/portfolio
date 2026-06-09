import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Achievements from '@/components/Achievements';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col">
      <Navigation />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-24 md:py-32 flex flex-col gap-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
