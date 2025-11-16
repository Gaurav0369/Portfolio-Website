'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Senior AI/ML Engineer',
    company: 'Gangakoshi agritech',
    period: '2023 - Present',
    description: 'Training and deployment of ML models and gen ai solutions for Agriculture at enterprise grade',
    highlights: [
      'Analyzed soil and weather datasets to develop actionable insights for agricultural planning.',
      'Built predictive models in Python for fertilizer and seed recommendations based on environmental data.',
      'Designed and deployed computer vision models to detect crop diseases from field images.',
      'Developed and integrated a LLM-powered chatbot to answer farming queries dynamically.',
      'Created backend services and REST APIs for real-time model interaction and data flow.',
    ],
  },
]

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Maharishi Institute of Information Technology, Noida',
    year: '2020',
    focus: 'Machine Learning, Artificial Intelligence',
  },
  {
    degree: 'Data science AI/ML specilization',
    school: 'Upgrad',
    year: '2024',
    focus: 'Data science, ML, Deep Learning, NLP, Computer Vision',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Experience & Education</h2>
        </div>

        <div className="space-y-12">
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400">Professional Experience</h3>
            {experiences.map((exp, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shrink-0">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-purple-400 shrink-0">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-400">Education</h3>
            {education.map((edu, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-purple-500/20 hover:border-purple-500/40 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription>{edu.school}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-400 shrink-0">
                      {edu.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Focus: {edu.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
