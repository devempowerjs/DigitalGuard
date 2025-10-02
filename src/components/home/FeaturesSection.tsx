import React from 'react';
import { 
  GraduationCap, 
  Shield, 
  Users, 
  Search, 
  Lock, 
  BarChart, 
  BookOpen, 
  Settings,
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { AdPlaceholder } from '../AdPlaceholder';

export function FeaturesSection() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Educational Content',
      description: 'Comprehensive guides on digital footprints, privacy, and online safety for all ages.',
      href: '/learn/what-is-digital-footprint',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      icon: Settings,
      title: 'Interactive Tools',
      description: 'Hands-on tools to assess and manage your digital presence effectively.',
      href: '/tools',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Learn advanced techniques to protect your personal information online.',
      href: '/manage/how-to-manage',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      icon: Users,
      title: 'For Everyone',
      description: 'Tailored content for teens, professionals, parents, and educators.',
      href: '/learn/consequences',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    },
  ];

  const tools = [
    {
      icon: Search,
      title: 'Google Yourself Challenge',
      description: 'Discover what information about you is publicly available online.',
      href: '/tools#google-yourself',
    },
    {
      icon: Lock,
      title: 'Privacy Checkup',
      description: 'Assess your privacy settings across social media platforms.',
      href: '/tools#privacy-checkup',
    },
    {
      icon: BarChart,
      title: 'Digital Footprint Quiz',
      description: 'Test your knowledge and get personalized recommendations.',
      href: '/tools#quiz',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Stay Safe Online
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From understanding digital footprints to implementing privacy best practices, 
            we provide comprehensive resources for digital literacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  {feature.description}
                </CardDescription>
                <Button asChild variant="ghost" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">
                  <a href={feature.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Tools Preview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Try Our Interactive Tools
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get hands-on experience with our suite of digital privacy tools designed to help you take control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Card key={tool.title} className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    {tool.description}
                  </CardDescription>
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <a href={tool.href}>
                      Try Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline" className="bg-white/50 dark:bg-gray-800/50">
              <a href="/tools">
                View All Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Sponsored Content */}
        <div className="mt-16 flex justify-center">
          <AdPlaceholder type="banner" />
        </div>
      </div>
    </section>
  );
}