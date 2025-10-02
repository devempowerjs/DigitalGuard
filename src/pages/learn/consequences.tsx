import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Briefcase, Heart, Shield, Eye, AlertTriangle, DollarSign } from 'lucide-react';

export default function ConsequencesPage() {
  return (
    <PageLayout
      title="Consequences of Digital Footprints"
      description="Understanding the real-world impact of your digital presence"
      previousPage={{
        title: "How It's Formed",
        href: "/learn/how-its-formed"
      }}
      nextPage={{
        title: "Data Storage",
        href: "/learn/data-storage"
      }}
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zZXF1ZW5jZXMlMjBwcml2YWN5JTIwb25saW5lfGVufDF8fHx8MTc1ODg4MjA5NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Privacy and consequences visualization"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Introduction */}
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Your digital footprint can have far-reaching consequences across multiple areas of your life. 
            Understanding these impacts helps you make informed decisions about your online behavior.
          </AlertDescription>
        </Alert>

        {/* Career Impact */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Career & Professional Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-700 dark:text-red-300">
                  <Briefcase className="h-5 w-5" />
                  <span>Negative Consequences</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <div>
                      <strong>Job Rejection:</strong> 70% of employers check social media before hiring
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <div>
                      <strong>Career Limitations:</strong> Inappropriate content can limit advancement
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <div>
                      <strong>Professional Reputation:</strong> Past posts can damage credibility
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <div>
                      <strong>Termination:</strong> Employees fired for social media content
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                  <Briefcase className="h-5 w-5" />
                  <span>Positive Opportunities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Professional Branding:</strong> Showcase expertise and achievements
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Networking:</strong> Connect with industry professionals
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Job Opportunities:</strong> Recruiters find candidates through profiles
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Thought Leadership:</strong> Share insights and build authority
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Relationships */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Personal Relationships</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-pink-600" />
                <span>Impact on Personal Life</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Relationship Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Past relationships visible to new partners</li>
                    <li>• Family disagreements over public posts</li>
                    <li>• Misunderstandings from social media activity</li>
                    <li>• Privacy invasion from data brokers</li>
                    <li>• Embarrassing content shared by others</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Social Benefits</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Staying connected with distant friends</li>
                    <li>• Sharing life milestones and celebrations</li>
                    <li>• Finding communities with shared interests</li>
                    <li>• Maintaining professional relationships</li>
                    <li>• Building support networks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Impact */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Financial Consequences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-yellow-600" />
                  <span>Insurance Rates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Insurance companies may adjust rates based on social media activity, 
                  location data, and lifestyle indicators found in your digital footprint.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span>Credit Scoring</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Alternative credit scoring may consider digital behavior, 
                  social connections, and online financial activity.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-red-600" />
                  <span>Identity Theft</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Exposed personal information can lead to financial fraud, 
                  unauthorized accounts, and significant monetary losses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Privacy & Security */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Privacy & Security Risks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Data Vulnerability</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Data breaches exposing personal information</li>
                  <li>• Unauthorized access to accounts</li>
                  <li>• Location tracking and stalking risks</li>
                  <li>• Phishing and social engineering attacks</li>
                  <li>• Malware and malicious downloads</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-purple-600" />
                  <span>Surveillance & Tracking</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Government surveillance programs</li>
                  <li>• Corporate data collection and profiling</li>
                  <li>• Behavioral targeting and manipulation</li>
                  <li>• Cross-platform tracking</li>
                  <li>• Predictive analytics and scoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Real World Examples */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Real-World Impact Examples</h2>
          <div className="space-y-4">
            <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Case Study: College Admissions</h4>
                <p className="text-sm">
                  A student lost admission to their dream university when admissions officers 
                  found inappropriate social media content during their background check.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Case Study: Job Termination</h4>
                <p className="text-sm">
                  An employee was terminated after posting negative comments about their 
                  workplace on social media, violating company social media policies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Case Study: Identity Theft</h4>
                <p className="text-sm">
                  A person's vacation photos with location data enabled criminals to 
                  know when their home was empty, leading to a targeted burglary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Protection Strategies Preview */}
        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Minimize Negative Consequences</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li>• Regular privacy settings review</li>
                <li>• Think before posting</li>
                <li>• Use strong, unique passwords</li>
                <li>• Limit personal information sharing</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>• Monitor your digital footprint</li>
                <li>• Clean up old accounts</li>
                <li>• Be cautious with location sharing</li>
                <li>• Educate yourself on platform policies</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}