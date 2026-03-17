"use client";

import { useInView } from "@/hooks/use-in-view";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2024 — Present",
    title: "Network Engineer",
    company: "Tech Solutions Ltd.",
    description:
      "Design and implement network infrastructure for enterprise clients. Configure and maintain Cisco routers, switches, and firewalls. Monitor network performance and troubleshoot connectivity issues.",
    skills: ["Cisco IOS", "TCP/IP", "VLAN", "Firewall"],
  },
  {
    period: "2023 — 2024",
    title: "Junior Network Administrator",
    company: "NetCom Services",
    description:
      "Assisted in managing network operations and maintenance. Configured network devices and implemented security protocols. Documented network architecture and maintained inventory.",
    skills: ["Networking", "Linux", "Documentation", "Security"],
  },
  {
    period: "2022 — 2023",
    title: "IT Intern",
    company: "Digital Innovations",
    description:
      "Provided technical support and assisted with network troubleshooting. Gained hands-on experience with Cisco Packet Tracer and GNS3. Participated in infrastructure upgrade projects.",
    skills: ["Python", "Packet Tracer", "Technical Support", "MySQL"],
  },
];

export function ExperienceSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-24 px-6 lg:px-16">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 group"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              <div className="border-l-2 border-border pl-6 pb-8 group-last:pb-0 group-hover:border-primary transition-colors">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  {exp.title}
                  <span className="text-primary">·</span>
                  <span className="text-primary font-normal">{exp.company}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
