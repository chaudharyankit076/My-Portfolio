"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 overflow-hidden">
      {/* Circuit pattern background */}

      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden" aria-hidden= "true">
        <svg
          className="absolute insect-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 10 10 M 0 10 L 20 10"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-primary"
              />
              <circle cx="10" cy="10" r="1.5" className="fill-primary" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#circuit)" />
        </svg>
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto w-full transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-0 lg:gap-25">
          
          {/* Left Side - Image Elements */}
          <div className="flex-1 w-full max-w-sm lg:max-w-sm relative mt-10 lg:mt-0">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 z-0"></div>
            
            {/* The actual image container */}
            <div className="relative z-10 aspect-square overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl bg-muted">
              {/* Replace '/placeholder-user.jpg' with your actual image path like '/my-photo.jpg' */}
              <Image 
                src="/pic4.jpg" 
                alt="Ankit Ku Chaudhary" 
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 w-full">
           {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance"> */}
<h1 className="text-[2.5rem] md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance break-words">
              Er. Ankit
              <br />
              <span className="text-primary">Chaudhary</span>
            </h1>

            <p className="text-primary font-mono text-sm tracking-wider text-left mb-6">
              ELECTRONICS, COMMUNICATION & INFORMATION ENGINEER
            </p>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              I design and build network infrastructure and systems. With expertise in{" "}
              <span className="text-foreground font-medium">Cisco networking</span>,{" "}
              <span className="text-foreground font-medium">TCP/IP protocols</span>, and{" "}
              <span className="text-foreground font-medium">software development</span>.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="mailto:chaudharyankit076@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/chaudharyankit076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/chaudharyankit076/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-20"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono tracking-wider">SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
