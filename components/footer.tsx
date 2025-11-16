'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GC</span>
              </div>
              <span className="font-semibold">Gaurav Chauhan</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI Engineer specializing in Generative AI and Machine Learning.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Me</h4>
            <div className="flex gap-4">
              <a target="_blank"
            href="https://github.com/Gaurav0369" className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors">
                <Github size={18} />
              </a>
              <a target="_blank"
            href="https://www.linkedin.com/in/gauravch0369/" className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 transition-colors">
                <Linkedin size={18} />
              </a>
              <a target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gauravchauhan2261@gmail.com" className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Gaurav Chauhan. All rights reserved.</p>
          <p>Built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
