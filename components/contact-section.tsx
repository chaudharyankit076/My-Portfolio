"use client";

import { useInView } from "@/hooks/use-in-view";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-24 px-6 lg:px-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          I&apos;m currently looking for new opportunities in network engineering
          and telecommunications. Whether you have a project in mind or just want
          to connect, feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="border border-border p-6 hover:border-primary transition-colors">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Email</h3>
            <a
              href="mailto:chaudharyankit076@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              chaudharyankit076@gmail.com
            </a>
          </div>

          <div className="border border-border p-6 hover:border-primary transition-colors">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Phone</h3>
            <a
              href="tel:+977-9824849899"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              +977-9824849899
            </a>
          </div>

          <div className="border border-border p-6 hover:border-primary transition-colors">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">Kathmandu, Nepal</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:chaudharyankit076@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <a
            href="https://github.com/chaudharyankit076/"
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
    </section>
  );
}
