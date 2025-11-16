// 'use client'

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { useState } from 'react'
// import { Github, Linkedin, Mail, Send } from 'lucide-react'

// export function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setSubmitted(true)
//     setTimeout(() => setSubmitted(false), 3000)
//     setFormData({ name: '', email: '', message: '' })
//   }

//   return (
//     <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
//       <div className="max-w-4xl mx-auto">
//         <div className="mb-12 text-center space-y-4">
//           <h2 className="text-4xl sm:text-5xl font-bold text-balance">Let's Connect</h2>
//           <p className="text-lg text-muted-foreground text-balance">
//             Interested in collaborating or hiring me for your next AI project? I'm always open to discussing innovative ideas and exciting opportunities.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <Card className="bg-card/50 backdrop-blur border-cyan-500/20">
//             <CardHeader>
//               <CardTitle>Send a Message</CardTitle>
//               <CardDescription>I'll get back to you within 24 hours.</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <Input
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="bg-background/50 border-cyan-500/20 focus:border-cyan-500/50"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Input
//                     placeholder="Your Email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="bg-background/50 border-cyan-500/20 focus:border-cyan-500/50"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Textarea
//                     placeholder="Your Message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     className="bg-background/50 border-cyan-500/20 focus:border-cyan-500/50 resize-none"
//                     rows={4}
//                     required
//                   />
//                 </div>
//                 <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 gap-2">
//                   <Send size={16} />
//                   {submitted ? 'Message Sent!' : 'Send Message'}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             <Card className="bg-card/50 backdrop-blur border-purple-500/20">
//               <CardHeader>
//                 <CardTitle className="text-purple-400">Direct Contact</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <a href="mailto:arjun@example.com" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-purple-500/20 hover:bg-purple-500/10 transition-colors group">
//                   <Mail className="text-purple-400 group-hover:text-purple-300" />
//                   <div>
//                     <p className="text-sm font-semibold text-foreground">Email</p>
//                     <p className="text-sm text-muted-foreground">arjun@example.com</p>
//                   </div>
//                 </a>
//               </CardContent>
//             </Card>

//             <Card className="bg-card/50 backdrop-blur border-cyan-500/20">
//               <CardHeader>
//                 <CardTitle className="text-cyan-400">Connect With Me</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-cyan-500/20 hover:bg-cyan-500/10 transition-colors group">
//                   <Github className="text-cyan-400 group-hover:text-cyan-300" />
//                   <div>
//                     <p className="text-sm font-semibold text-foreground">GitHub</p>
//                     <p className="text-sm text-muted-foreground">github.com/arjunmehta</p>
//                   </div>
//                 </a>
//                 <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-cyan-500/20 hover:bg-cyan-500/10 transition-colors group">
//                   <Linkedin className="text-cyan-400 group-hover:text-cyan-300" />
//                   <div>
//                     <p className="text-sm font-semibold text-foreground">LinkedIn</p>
//                     <p className="text-sm text-muted-foreground">linkedin.com/in/arjunmehta</p>
//                   </div>
//                 </a>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
