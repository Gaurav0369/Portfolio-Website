"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const roles = ["LLM Apps", "Agentic AI", "ML Pipelines", "GenAI Prototypes"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const target = roles[currentRole];
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        if (prev.length < target.length) {
          return target.slice(0, prev.length + 1);
        } else {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          return "";
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, [currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            Gaurav Chauhan
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-400 font-semibold">
            AI Engineer | Generative AI & Machine Learning
          </p>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          I design and build intelligent systems using large language models,
          generative AI, and end-to-end ML pipelines. I turn business ideas into
          working AI products.
        </p>

        <div className="flex flex-wrap justify-center gap-2 py-4">
          <Badge
            variant="outline"
            className="bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
          >
            LLMs
          </Badge>
          <Badge
            variant="outline"
            className="bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
          >
            Agentic AI
          </Badge>
          <Badge
            variant="outline"
            className="bg-purple-500/10 border-purple-500/30 text-purple-400"
          >
            Prompt Engineering
          </Badge>
          <Badge
            variant="outline"
            className="bg-purple-500/10 border-purple-500/30 text-purple-400"
          >
            ML pipelines
          </Badge>
          <Badge
            variant="outline"
            className="bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
          >
            Gen AI Prototypes
          </Badge>
        </div>

        <div className="inline-block text-lg font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-6 py-3 min-h-12 flex items-center">
          {displayText}
          <span className="animate-pulse">_</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
          >
            <a
             target="_black"
             href="https://drive.google.com/file/d/1NbtcZdg1g4WOz6fjm4csGyriw43e_pPP/view">
            Download Resume </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
          target="_black"
            href="https://github.com/Gaurav0369"
            className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
          target="_black"
            href="https://www.linkedin.com/in/gauravch0369/"
            className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
          target="_black"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gauravchauhan2261@gmail.com"
            className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
