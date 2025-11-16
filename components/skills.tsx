'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    title: 'Core AI / ML',
    description: 'ML Fundamentals & Deep Learning',
    skills: ['Supervised & Unsupervised Learning', 'Deep Learning (CNNs, RNNs, Transformers)', 'LLMs & Generative Models', 'Computer Vision', 'NLP'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'GenAI & LLM Tooling',
    description: 'Modern LLM Application Stack',
    skills: ['Prompt Engineering', 'Tool Calling & Agents','Ollama', 'LangChain', 'OpenAI / Anthropic / Hugging Face'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Engineering',
    description: 'Software Development & Deployment',
    skills: ['Python', 'FastAPI / Flask', 'REST APIs', 'Docker', 'Java', 'Git', 'Self hosting'],
    color: 'from-cyan-500 to-purple-500',
  },
  {
    title: 'Data & Infrastructure',
    description: 'Data Management & Cloud',
    skills: ['SQL', 'Vector DB','Networking', 'Linux', 'ETL Pipelines', 'Data Processing'],
    color: 'from-purple-500 to-pink-500',
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground text-balance">A comprehensive toolkit for building AI systems at scale.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="bg-card/50 backdrop-blur border-border/50 hover:border-cyan-500/30 transition-all">
              <CardHeader>
                <CardTitle className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-background/50 border-cyan-500/20 text-foreground hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
