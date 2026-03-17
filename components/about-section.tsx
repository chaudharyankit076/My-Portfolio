"use client";

import { useInView } from "@/hooks/use-in-view";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 px-6 lg:px-16">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an{" "}
              <span className="text-foreground font-medium">
                Electronics and Communication Engineer
              </span>{" "}
              with a strong foundation in networking technologies and software
              development. My journey in engineering has equipped me with a unique
              blend of hardware understanding and software proficiency.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I specialize in building robust network infrastructures,
              working with{" "}
              <span className="text-foreground font-medium">Cisco systems</span>,
              and developing applications using Python, C/C++, and database
              management with MySQL.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am passionate about bridging the gap between telecommunications
              hardware and modern software solutions, creating efficient systems
              that solve real-world problems.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-border p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="text-muted-foreground">
                    Bachelor&apos;s in Electronics, Communication and Information
                    Engineering
                  </p>
                  <p className="text-sm text-primary">
                    Purwanchal Campus, Dharan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground">Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Age</h3>
                  <p className="text-muted-foreground">24 years old</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
