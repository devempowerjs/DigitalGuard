import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { 
  Footprints, 
  Eye, 
  Users, 
  Briefcase, 
  Heart, 
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function WhatIsDigitalFootprintPage() {
  const footprintTypes = [
    {
      type: 'Active Digital Footprint',
      icon: Eye,
      description: 'Information you intentionally share online',
      examples: [
        'Social media posts and comments',
        'Blog articles and forum discussions',
        'Online reviews and ratings',
        'Profile information and photos',
        'Emails and direct messages',
      ],
      color: 'blue',
    },
    {
      type: 'Passive Digital Footprint',
      icon: Globe,
      description: 'Data collected about you without your direct knowledge',
      examples: [
        'Website tracking cookies',
        'Location data from mobile apps',
        'Search engine query logs',
        'Online purchase history',
        'IP address and device information',
      ],
      color: 'purple',
    },
  ];

  const realWorldScenarios = [
    {
      title: 'Student Scenario',
      icon: Users,
      situation: 'High school student applies to college',
      discovery: 'Admissions officer finds controversial social media posts from 2 years ago',
      impact: 'Application rejected despite good grades',
      lesson: 'Past posts can affect future opportunities',
      severity: 'high',
    },
    {
      title: 'Professional Scenario',
      icon: Briefcase,
      situation: 'Marketing professional applies for dream job',
      discovery: 'HR finds photos from a weekend party showing unprofessional behavior',
      impact: 'Not selected for the position',
      lesson: 'Employers actively check social media profiles',
      severity: 'high',
    },
    {
      title: 'Personal Scenario',
      icon: Heart,
      situation: 'Person starts dating someone new',
      discovery: 'Date finds old relationship details and personal information online',
      impact: 'Relationship becomes awkward due to known private information',
      lesson: 'Personal information can affect relationships',
      severity: 'medium',
    },
  ];

  const quickFacts = [
    {
      stat: '70%',
      description: 'of employers check social media before hiring',
      source: 'CareerBuilder Survey 2021',
    },
    {
      stat: '2.5 billion',
      description: 'photos are uploaded to social media daily',
      source: 'Social Media Statistics 2024',
    },
    {
      stat: '90%',
      description: 'of all data ever created was made in the last 2 years',
      source: 'IBM Data Analytics Report',
    },
    {
      stat: '37%',
      description: 'of employers have rejected candidates based on social media',
      source: 'Harris Poll Survey',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Footprints className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What is a Digital Footprint?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Every click, like, share, and search creates a trail of data that forms your digital footprint. 
              Understanding this concept is the first step toward protecting your online privacy and reputation.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="#definition">
                Learn More
              </a>
            </Button>
          </div>
        </section>

        {/* Definition Section */}
        <section id="definition" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-blue-600" />
                  Definition & Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  A <strong>digital footprint</strong> is the trail of data you create while using the internet. 
                  It includes all the information that can be found about you online, whether you put it there 
                  intentionally or it was collected without your direct knowledge.
                </p>
                <p className="leading-relaxed">
                  Think of it like footprints in sand – every step leaves a mark. Similarly, every online 
                  action leaves a digital trace that can be tracked, stored, and potentially accessed by 
                  others for years to come.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>Important:</strong> Your digital footprint is permanent and can impact your 
                    personal life, education, career, and relationships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Types of Digital Footprints */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Types of Digital Footprints
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Understanding the difference between active and passive digital footprints
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {footprintTypes.map((type) => (
                <Card key={type.type} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${
                        type.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-purple-100 dark:bg-purple-900/30'
                      }`}>
                        <type.icon className={`h-6 w-6 ${
                          type.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{type.type}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Real-World Impact Stories
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                How digital footprints affect real people in different life situations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {realWorldScenarios.map((scenario) => (
                <Card key={scenario.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <scenario.icon className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-lg">{scenario.title}</CardTitle>
                      <Badge variant={scenario.severity === 'high' ? 'destructive' : 'secondary'}>
                        {scenario.severity === 'high' ? 'High Impact' : 'Medium Impact'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-1">
                        Situation:
                      </h5>
                      <p className="text-sm">{scenario.situation}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-1">
                        Discovery:
                      </h5>
                      <p className="text-sm">{scenario.discovery}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-1">
                        Impact:
                      </h5>
                      <p className="text-sm text-red-600 dark:text-red-400">{scenario.impact}</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-400">
                      <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200 mb-1">
                        Key Lesson:
                      </h5>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">{scenario.lesson}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 dark:bg-blue-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Digital Footprint Facts
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Eye-opening statistics about digital footprints and online privacy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickFacts.map((fact, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {fact.stat}
                    </div>
                    <p className="text-sm font-medium mb-2">
                      {fact.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      Source: {fact.source}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Digital Footprints Matter
              </h2>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                    Career & Professional Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Your digital footprint can significantly affect your professional life. Employers 
                    routinely check candidates' social media profiles, and what they find can influence 
                    hiring decisions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mt-0.5" />
                      <span className="text-sm">Professional content can enhance your reputation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span className="text-sm">Inappropriate content can cost you opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600" />
                    Privacy & Security Concerns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Your digital footprint contains personal information that can be used for identity 
                    theft, stalking, or other malicious purposes. Understanding what's out there is 
                    crucial for your safety.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span className="text-sm">Personal information can be used for fraud</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span className="text-sm">Location data can compromise physical safety</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-blue-600" />
                    Personal Relationships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Your digital footprint affects how others perceive you and can impact personal 
                    relationships. Friends, family, and romantic partners often look up information 
                    about each other online.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Take Control?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand what a digital footprint is, learn how to manage and protect yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="/learn/how-its-formed">
                  How It's Formed
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="/tools">
                  Try Our Tools
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="/manage/how-to-manage">
                  Management Guide
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}