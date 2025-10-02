import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Button } from '../components/ui/button';
import { Scale, Calendar, Mail } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Scale className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Please read these terms carefully before using DigitalGuard's services and resources.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Last updated: 28 September 2025</span>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>1. Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  By accessing and using DigitalGuard ("the website", "our service"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  DigitalGuard is an educational platform created by student developer Mayank Raj to promote digital footprint awareness and online privacy education.
                </p>
              </CardContent>
            </Card>

            {/* Use of the Website */}
            <Card>
              <CardHeader>
                <CardTitle>2. Use of the Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">2.1 Permitted Use</h4>
                <p>
                  You may use DigitalGuard for educational purposes, personal learning, and to improve your understanding of digital privacy and footprint management.
                </p>
                
                <h4 className="font-semibold">2.2 Prohibited Activities</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Using the website for any unlawful purpose or to solicit others to engage in unlawful activities</li>
                  <li>Attempting to gain unauthorized access to the website or its related systems</li>
                  <li>Reproducing, duplicating, copying, or reselling any part of the website without permission</li>
                  <li>Using the website to transmit viruses, malware, or other harmful computer code</li>
                  <li>Impersonating any person or entity or falsely representing your affiliation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Content and Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>3. Content and Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">3.1 Our Content</h4>
                <p>
                  All content on DigitalGuard, including text, graphics, logos, and educational materials, is the intellectual property of Mayank Raj or used under appropriate licenses.
                </p>
                
                <h4 className="font-semibold">3.2 Third-Party Content</h4>
                <p>
                  We provide links to external resources and third-party content for educational purposes. We do not control or endorse the content on external websites.
                </p>
                
                <h4 className="font-semibold">3.3 User-Generated Content</h4>
                <p>
                  Any content you submit through contact forms or resource submissions must be accurate, lawful, and not infringe on any third-party rights.
                </p>
              </CardContent>
            </Card>

            {/* Educational Purpose */}
            <Card>
              <CardHeader>
                <CardTitle>4. Educational Purpose & Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">4.1 Educational Nature</h4>
                <p>
                  DigitalGuard is created for educational purposes by a student developer. While we strive for accuracy, the content should not be considered professional legal or technical advice.
                </p>
                
                <h4 className="font-semibold">4.2 No Warranty</h4>
                <p>
                  The information on this website is provided "as is" without warranty of any kind. We do not guarantee the accuracy, completeness, or usefulness of any information.
                </p>
                
                <h4 className="font-semibold">4.3 Tool Limitations</h4>
                <p>
                  Our privacy tools and assessments are educational and should not be considered comprehensive security audits or professional evaluations.
                </p>
              </CardContent>
            </Card>

            {/* Privacy and Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle>5. Privacy and Data Collection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We are committed to protecting your privacy. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
                </p>
                <p>
                  As an educational platform focused on privacy awareness, we follow privacy-first principles and do not collect unnecessary personal information.
                </p>
              </CardContent>
            </Card>

            {/* Liability Limitations */}
            <Card>
              <CardHeader>
                <CardTitle>6. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  To the fullest extent permitted by law, DigitalGuard and its creator shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the website.
                </p>
                <p>
                  This includes but is not limited to damages for loss of data, business interruption, or any other commercial damages or losses.
                </p>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card>
              <CardHeader>
                <CardTitle>7. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
                </p>
                <p>
                  Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>8. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <a href="mailto:mayankrajpis2013@gmail.com" className="text-blue-600 hover:underline">
                    mayankrajpis2013@gmail.com
                  </a>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Created with ❤️ by Mayank Raj - Student Developer & Privacy Advocate
                </p>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <a href="/privacy-policy">
                  View Privacy Policy
                </a>
              </Button>
              <Button asChild>
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}