'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AI Astrologer agent',
    tagline: 'Ask about your horoscope, birth charts or zodian sign personality and more.',
    description: 'A full fledged ai astrologer agent as telegram userbot, With agentic memory.',
    role: 'Designed bot api, prompt engineering,chat agent, agentic memory and token embedding.',
    features: [
      'Birth chart generation from date, time, and location',
    'Daily horoscope predictions for all zodiac signs',
    'Personality analysis based on astrological principles',
    'Conversational memory for personalized interactions',
    'Real-time planetary position calculations',
    'Zodiac compatibility matching',
    'Multi-language support (Hindi, English)',
    ],
    impact: 'Enabled 24/7 accessible astrology consultations, reducing wait times from days to instant responses.',
    tech: ['Python', 'Langchain', 'OpenAI', 'DsPy', 'Mem0', 'telethon'],
    projectLink: 'https://t.me/astrologydev',
  },
  {
    title: 'Fire Detection System using CCTV',
    tagline: 'Automated fire monitoring and alerting system using CCTV cameras.',
    description: 'Live surveillance-based fire and smoke detection system with alert API',
    role: 'Built a custom trained yolo model and created a live alert api using the model and cctv cameras',
    features: [
      'Real-time fire and smoke detection from live CCTV streams',
      'Custom YOLO model with high accuracy (>90%) on fire detection',
      'Multi-camera support for comprehensive monitoring',
      'Instant alert API for integration with alarm systems',
      'Bounding box visualization with confidence scores',
      '24/7 automated surveillance without human monitoring',
    ],
    impact: 'Achieved 92% detection accuracy with <1s response time, enabling early fire detection before spread.',
    tech: ['Python', 'OpenCV', 'PyTorch', 'Yolo', 'FastAPI', 'Networking'],
    projectLink: 'https://github.com/Gaurav0369/Fire-detection-using-CCTV',
  },
  {
      title: 'Photorealistic Comfyui portfolio',
      tagline: 'Extremely surreal photorealistic content',
      description: 'Generated surreal photorealistic UGC using Flux.1 D, Qwen Image Edit, WAN2.2, Infinite Talk, and Vibe Voice through ComfyUI.',
      role: 'Built extreme cost-effective surreal generation pipeline using Flux.1 D, Qwen, WAN2.2, Infinite Talk, and Vibe Voice with custom LoRAs.',
      features: [
        'Extremely surreal generation using Flux.1 D and WAN2.2 models',
        'Advanced image editing with Qwen Image Edit for surreal transformations',
        'Infinite Talk for realistic lip-sync and audio-video synchronization',
        'Vibe Voice for natural voice generation in video content',
        'Custom LoRA fine-tuning for hyper-surreal brand aesthetics',
        'cost reduction and minute control through open-source model integration',
      ],
      impact: 'Achieved extreme cost reduction compared to manual content creation, influencer collabs and hiring creators.',
      tech: ['ComfyUI', 'Flux.1 D', 'Qwen Image Edit', 'WAN2.2', 'Infinite Talk', 'Vibe Voice', 'Custom LoRAs', 'prompt engineering'],
      projectLink: 'https://github.com/Gaurav0369/Comfyui-portfolio',
  },
  {
    title: 'Self hosted home serer',
    tagline: 'Free home cloud for everyone',
    description: 'Using old pc, hdd and open source softwares like trunas, nextcloud, immich, build a home server for all my personal files and photos',
    role: 'Designed and deployed home server stack with TrueNAS for OS, Nextcloud for file sync, and Immich for photo management.',
    features: [
      'TrueNAS Scale with ZFS for enterprise-grade storage management',
      'Nextcloud for self-hosted file sync and collaboration',
      'Immich for private photo backup with AI face recognition',
      'Automated backups and device synchronization',
      'Zero monthly subscription costs vs. cloud services',
      'Remote access to personal files and media library',
      'RAID configuration for data redundancy and protection',],
    impact: 'Eliminated $120+ annual cloud storage costs while maintaining full data ownership and privacy with enterprise-grade reliability.',
    tech: ['TrueNAS Scale', 'Nextcloud', 'Immich', 'ZFS', 'Docker', 'Linux', 'Self-Hosting', 'RAID'],
    projectLink: '',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Featured AI & GenAI Projects</h2>
          <p className="text-lg text-muted-foreground text-balance">Real-world projects in LLMs, Generative AI, and Machine Learning.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="bg-card/50 backdrop-blur border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-cyan-400 font-medium">{project.tagline}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Problem</p>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">My Role</p>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-cyan-400">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Impact</p>
                    <p className="text-sm text-purple-400 font-medium">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="bg-background/50 border-cyan-500/30 text-cyan-300 text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.projectLink && (
                  <div className="pt-4 border-t border-border">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="gap-2 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                      onClick={() => window.open(project.projectLink, '_blank')}
                    >
                      <ExternalLink size={16} />
                      Project Link
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
