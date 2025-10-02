import React from 'react';
import { Layout } from '../components/layout/Layout';
import { 
  Settings, 
  Search, 
  Shield, 
  Brain, 
  Lock, 
  ExternalLink,
  Star,
  Download,
  Users,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { GoogleYourselfChallenge } from '../components/tools/GoogleYourselfChallenge';
import { SocialMediaPrivacyCheckup } from '../components/tools/SocialMediaPrivacyCheckup';
import { DigitalFootprintQuiz } from '../components/tools/DigitalFootprintQuiz';
import { PasswordStrengthChecker } from '../components/tools/PasswordStrengthChecker';

export default function ToolsPage() {
  const browserExtensionFeatures = {
    basic: [
      'Core tracking protection',
      'Basic privacy notifications',
      'Limited educational tips',
      'Weekly reports',
    ],
    premium: [
      'Advanced monitoring across all platforms',
      'Detailed privacy insights and analytics',
      'Personalized guidance and recommendations',
      'Real-time risk alerts',
      'Priority customer support',
      'Custom privacy score tracking',
    ],
  };

  const externalTools = [
    {
      category: 'Search & Monitoring',
      tools: [
        {
          name: 'Google Alerts',
          description: 'Monitor mentions of your name across the web',
          url: 'https://www.google.com/alerts',
          icon: Search,
        },
        {
          name: 'Have I Been Pwned',
          description: 'Check if your email has been compromised in data breaches',
          url: 'https://haveibeenpwned.com/',
          icon: Shield,
        },
        {
          name: 'Pipl',
          description: 'Search for your personal information across the internet',
          url: 'https://pipl.com/',
          icon: Search,
        },
      ],
    },
    {
      category: 'Cleanup Tools',
      tools: [
        {
          name: 'TweetDelete',
          description: 'Bulk delete your old tweets and Twitter history',
          url: 'https://tweetdelete.net/',
          icon: Settings,
        },
        {
          name: 'Social Book Post Manager',
          description: 'Manage and delete Facebook posts in bulk',
          url: 'https://www.socialbookpostmanager.com/',
          icon: Settings,
        },
        {
          name: 'Google Takeout',
          description: 'Download and review all your Google data',
          url: 'https://takeout.google.com/',
          icon: Download,
        },
      ],
    },
    {
      category: 'Privacy Tools',
      tools: [
        {
          name: 'Google Privacy Checkup',
          description: 'Review and adjust your Google privacy settings',
          url: 'https://myaccount.google.com/privacycheckup',
          icon: Shield,
        },
        {
          name: 'Facebook Privacy Checkup',
          description: 'Review your Facebook privacy and security settings',
          url: 'https://www.facebook.com/privacy/checkup/',
          icon: Shield,
        },
        {
          name: 'DeleteMe',
          description: 'Professional service to remove your data from data brokers',
          url: 'https://joindeleteme.com/',
          icon: Shield,
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Settings className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Digital Privacy Tools
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Take control of your digital footprint with our comprehensive suite of interactive tools 
              designed to help you understand, monitor, and protect your online presence.
            </p>
          </div>
        </section>

        {/* Featured Tool - Browser Extension */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">DigitalGuard Browser Extension</CardTitle>
                <CardDescription className="text-lg">
                  Real-time protection and monitoring for your digital footprint across all websites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Basic Plan */}
                  <Card className="relative">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">Basic</CardTitle>
                          <CardDescription>Perfect for getting started</CardDescription>
                        </div>
                        <Badge variant="secondary">Free</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {browserExtensionFeatures.basic.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant="outline">
                        Install Free Extension
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Premium Plan */}
                  <Card className="relative border-blue-600 dark:border-blue-400">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white">Recommended</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">Premium</CardTitle>
                          <CardDescription>Advanced protection and insights</CardDescription>
                        </div>
                        <Badge className="bg-blue-600 text-white">$4.99/month</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {browserExtensionFeatures.premium.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Upgrade to Premium
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Extension Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold text-blue-600">50,000+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Star className="h-8 w-8 text-yellow-500 mb-2" />
                    <div className="text-2xl font-bold text-yellow-600">4.8/5</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">User Rating</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-2xl font-bold text-green-600">1M+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Risks Detected</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Interactive Privacy Tools
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Use our interactive tools to assess, understand, and improve your digital privacy
              </p>
            </div>

            <div className="space-y-16">
              {/* Google Yourself Challenge */}
              <div id="google-yourself">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Search className="h-6 w-6 mr-2 text-blue-600" />
                  Google Yourself Challenge
                </h3>
                <GoogleYourselfChallenge />
              </div>

              <Separator />

              {/* Privacy Checkup */}
              <div id="privacy-checkup">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-blue-600" />
                  Social Media Privacy Checkup
                </h3>
                <SocialMediaPrivacyCheckup />
              </div>

              <Separator />

              {/* Digital Footprint Quiz */}
              <div id="quiz">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-blue-600" />
                  Digital Footprint Knowledge Quiz
                </h3>
                <DigitalFootprintQuiz />
              </div>

              <Separator />

              {/* Password Strength Checker */}
              <div id="password-checker">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-blue-600" />
                  Password Strength Checker
                </h3>
                <PasswordStrengthChecker />
              </div>
            </div>
          </div>
        </section>

        {/* External Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Recommended External Tools
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Additional tools and services to help you maintain your digital privacy
              </p>
            </div>

            <div className="space-y-12">
              {externalTools.map((category) => (
                <div key={category.category}>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.tools.map((tool) => (
                      <Card key={tool.name} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <tool.icon className="h-5 w-5 text-blue-600" />
                            <CardTitle className="text-lg">{tool.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-4">
                            {tool.description}
                          </CardDescription>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <a 
                              href={tool.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              Visit Tool
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our comprehensive guides to learn more about digital footprints and privacy protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="/learn/what-is-digital-footprint">
                  Start Learning
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