"use client";

import { useInView } from "@/hooks/use-in-view";
import {
  Network,
  Server,
  Code2,
  Database,
  Cpu,
  Radio,
  Shield,
  Wifi,
} from "lucide-react";

const skillCategories = [
  {
    title: "Networking",
    icon: Network,
    skills: [
      { name: "Cisco Systems", level: 90 },
      { name: "TCP/IP", level: 95 },
      { name: "Computer Networks", level: 85 },
      { name: "Network Security", level: 80 },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "SQL/MySQL", level: 75 },
      { name: "Shell Scripting", level: 70 },
    ],
  },
  {
    title: "Electronics",
    icon: Cpu,
    skills: [
      { name: "Circuit Design", level: 85 },
      { name: "Embedded Systems", level: 80 },
      { name: "PCB Design", level: 75 },
      { name: "Signal Processing", level: 78 },
    ],
  },
  {
    title: "Telecom",
    icon: Radio,
    skills: [
      { name: "Communication Systems", level: 88 },
      { name: "Wireless Networks", level: 82 },
      { name: "RF Engineering", level: 75 },
      { name: "Antenna Design", level: 70 },
    ],
  },
];

const technologies = [
  { name: "Cisco IOS", icon: Server },
  { name: "Wireshark", icon: Network },
  { name: "MySQL", icon: Database },
  { name: "Linux", icon: Shield },
  { name: "GNS3", icon: Wifi },
  { name: "Packet Tracer", icon: Network },
];

export function SkillsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24 px-6 lg:px-16 bg-card">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="border border-border p-6 bg-background transition-all duration-300 hover:border-primary"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary overflow-hidden">
                      <div
                        className={`h-full bg-primary transition-all duration-1000 ease-out ${
                          isInView ? "translate-x-0" : "-translate-x-full"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 border border-border bg-background hover:border-primary transition-colors"
              >
                <tech.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
