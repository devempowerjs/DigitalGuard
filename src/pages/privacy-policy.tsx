import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Shield, Eye, Database, Lock, AlertTriangle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Clock className="h-3 w-3 mr-1" />
                Last Updated: 28 September 2025
              </Badge>
              <Badge variant="outline" className="text-sm">
                Version 1.0
              </Badge>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-blue-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  DigitalGuard ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or use our services.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-blue-900 dark:text-blue-100 text-sm">
                    <strong>Important:</strong> DigitalGuard is an educational website created by 
                    a school student. We are committed to maintaining the highest standards of 
                    privacy and data protection.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-green-600" />
                  Information We Collect
                </CardTitle>
                <CardDescription>
                  Here's what information we may collect and how:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Information You Provide Directly</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Contact information when you reach out to us via email</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Feedback and suggestions you submit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Resource submissions and educational content</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Browser type and version</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Device information (screen size, OS)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Pages visited and time spent on site</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Referral sources</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <p className="text-yellow-900 dark:text-yellow-100 text-sm">
                    <AlertTriangle className="h-4 w-4 inline mr-2" />
                    We do NOT collect sensitive personal information, passwords, or 
                    financial data through our website.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-purple-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Respond to your inquiries and provide support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Improve our website content and user experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Analyze website usage and performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Curate and review educational resources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Comply with legal obligations</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
                </p>
                <p>We may share information only in these limited circumstances:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>With your explicit consent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>To comply with legal requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>To protect our rights and safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>In case of emergency to protect user safety</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We implement appropriate technical and organizational security measures 
                  to protect your information against unauthorized access, alteration, 
                  disclosure, or destruction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      Technical Measures
                    </h4>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>• HTTPS encryption</li>
                      <li>• Secure hosting</li>
                      <li>• Regular security updates</li>
                      <li>• Access controls</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Organizational Measures
                    </h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Privacy by design</li>
                      <li>• Data minimization</li>
                      <li>• Regular policy reviews</li>
                      <li>• Incident response plan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>You have the following rights regarding your personal information:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span><strong>Access:</strong> Request information about your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span><strong>Correction:</strong> Update inaccurate information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span><strong>Deletion:</strong> Request removal of your data</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span><strong>Portability:</strong> Receive your data in a usable format</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span><strong>Objection:</strong> Opt out of certain processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span><strong>Complaint:</strong> File complaints with authorities</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  To exercise these rights, contact us at mayankrajpis2013@gmail.com
                </p>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We use cookies and similar technologies to enhance your browsing experience 
                  and analyze website performance.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Types of Cookies We Use:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Essential:</strong> Required for basic website functionality</li>
                    <li>• <strong>Analytics:</strong> Help us understand how visitors use our site</li>
                    <li>• <strong>Preferences:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>
                <p className="text-sm">
                  You can control cookies through your browser settings. Note that disabling 
                  cookies may affect website functionality.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, 
                  please contact us:
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Mayank Raj - DigitalGuard Creator
                  </p>
                  <p className="text-blue-800 dark:text-blue-200">
                    📧 mayankrajpis2013@gmail.com<br />
                    🔗 github.com/devempowerjs
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any changes by posting the new Privacy Policy on this page and updating the 
                  "Last Updated" date.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}