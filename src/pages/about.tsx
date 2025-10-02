import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Github, Mail, BookOpen, Users, Shield, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { AdPlaceholder } from '../components/AdPlaceholder';
import mayankImage from 'figma:asset/82a1197822a058727b7ddc791b6f898abb14e930.png';
import brandLogo from 'figma:asset/d68b93c799417889bdf1243156e70a42d0dd3f23.png';

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img src={brandLogo} alt="DigitalGuard Logo" className="h-20 w-20" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About DigitalGuard
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Your digital life, protected & future-ready
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A student-led initiative to educate and empower people about digital privacy and footprint management.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Founder Section */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="relative">
                  <img 
                    src={mayankImage} 
                    alt="Mayank Raj - Founder of DigitalGuard"
                    className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
                    <span className="font-semibold">Founder & Creator</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Meet Mayank Raj
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Hi! I'm Mayank Raj, a passionate school student dedicated to making digital privacy 
                    education accessible to everyone. As a young person growing up in the digital age, 
                    I understand firsthand the challenges and risks we face online.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    After realizing how little awareness exists about digital footprints among my peers 
                    and even adults, I decided to create DigitalGuard as a comprehensive resource to 
                    help people understand, manage, and protect their digital presence.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="px-3 py-1">Student Developer</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Privacy Advocate</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Digital Educator</Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="default">
                    <a href="mailto:mayankrajpis2013@gmail.com" className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Me
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a 
                      href="https://github.com/devempowerjs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Ad Placeholder */}
          <AdPlaceholder 
            title="Educational Resources"
            description="Discover books and courses about digital privacy"
            className="my-8"
          />

          {/* Vision & Mission */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Vision & Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Target className="h-6 w-6 mr-3 text-blue-600" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    To create a world where every individual, especially young people, has the knowledge 
                    and tools to navigate the digital landscape safely and confidently. We envision a 
                    future where digital literacy is as fundamental as traditional literacy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Shield className="h-6 w-6 mr-3 text-purple-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    To provide comprehensive, accessible, and practical education about digital footprints 
                    and online privacy. We aim to empower users with actionable tools and knowledge to 
                    protect their digital identity and make informed decisions online.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What Makes DigitalGuard Special */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What Makes DigitalGuard Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle>Student Perspective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built by a student, for students and everyone else. Understanding real-world 
                    challenges young people face in the digital world.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <BookOpen className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle>Educational Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comprehensive learning resources including interactive tools, guides, 
                    and curated content from trusted sources.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Shield className="h-12 w-12 text-red-600" />
                  </div>
                  <CardTitle>Privacy First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    All tools and resources are designed with privacy in mind. No tracking, 
                    no data collection - just pure education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Ad Placeholder */}
          <AdPlaceholder 
            title="Digital Security Tools"
            description="Recommended privacy tools and software"
            className="my-8"
          />

          {/* Project Stats */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">
              Project Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Educational Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Learning Resources</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Privacy Focused</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Open</div>
                <div className="text-blue-100">Source Project</div>
              </div>
            </div>
          </section>

          {/* Development Story */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              The Development Story
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                  <p className="mb-4">
                    DigitalGuard started as a personal project when I noticed how many of my friends 
                    and classmates were unaware of the digital traces they leave online. From oversharing 
                    on social media to using weak passwords, I saw countless examples of poor digital hygiene.
                  </p>
                  <p className="mb-4">
                    What began as a simple awareness campaign evolved into a comprehensive platform. 
                    I spent months researching digital privacy, studying various tools and techniques, 
                    and learning web development to bring this vision to life.
                  </p>
                  <p className="mb-4">
                    The website is built with modern web technologies including React, TypeScript, and 
                    Tailwind CSS, ensuring it's fast, accessible, and works seamlessly across all devices. 
                    Every feature is designed with user privacy and education in mind.
                  </p>
                  <p>
                    This project represents my commitment to making digital education accessible to everyone, 
                    regardless of their technical background. It's proof that age is just a number when 
                    it comes to making a positive impact in the digital world.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Ad Placeholder */}
          <AdPlaceholder 
            title="Privacy Software Reviews"
            description="In-depth reviews of VPNs, password managers, and security tools"
            className="my-8"
          />

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Join the Digital Privacy Movement
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Help spread awareness about digital privacy and make the internet a safer place for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="/contact">
                      Get Involved
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/tools">
                      Try Our Tools
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Footer Attribution */}
          <section className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Made with ❤️ by <strong>Mayank Raj</strong> • Student Developer & Privacy Advocate
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              "Your digital life, protected & future-ready"
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}