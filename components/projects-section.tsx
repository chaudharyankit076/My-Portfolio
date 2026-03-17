"use client";

import { useInView } from "@/hooks/use-in-view";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Network Monitoring Dashboard",
    description:
      "A real-time network monitoring tool built with Python that tracks bandwidth usage, device status, and alerts for network anomalies using SNMP protocols.",
    tech: ["Python", "SNMP", "MySQL", "Flask"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "Cisco Network Automation",
    description:
      "Automated network configuration scripts for Cisco devices using Python and Netmiko library. Reduces manual configuration time by 70%.",
    tech: ["Python", "Netmiko", "Cisco IOS", "SSH"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "TCP/IP Packet Analyzer",
    description:
      "A packet analysis tool built in C++ that captures and decodes network packets, providing detailed information about TCP/IP communications.",
    tech: ["C++", "libpcap", "TCP/IP", "Linux"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "IoT Sensor Network",
    description:
      "Designed and implemented a wireless sensor network using ESP32 microcontrollers for environmental monitoring with real-time data visualization.",
    tech: ["Embedded C", "ESP32", "MQTT", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Database Management System",
    description:
      "A custom inventory management system with MySQL backend, featuring automated reporting and data analysis capabilities for network equipment tracking.",
    tech: ["Python", "MySQL", "Flask", "REST API"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "Signal Processing Toolkit",
    description:
      "MATLAB-based signal processing toolkit for analyzing and filtering communication signals, including FFT analysis and noise reduction algorithms.",
    tech: ["MATLAB", "DSP", "Signal Processing"],
    github: "https://github.com",
    live: null,
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-24 px-6 lg:px-16 bg-card">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group border border-border bg-background p-6 flex flex-col h-full hover:border-primary transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
