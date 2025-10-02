import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { CheckCircle, Settings, Shield, Eye, Smartphone, Globe, Users, Lock } from 'lucide-react';

export default function HowToManagePage() {
  return (
    <PageLayout
      title="How to Manage Your Digital Footprint"
      description="Strategic approaches to taking control of your online presence"
      previousPage={{
        title: "Data Storage",
        href: "/learn/data-storage"
      }}
      nextPage={{
        title: "Cleanup Guide",
        href: "/manage/cleanup-guide"
      }}
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1599350686877-382a54114d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJpdmFjeSUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzU4ODgyMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital privacy management concept"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p>
            Managing your digital footprint is an ongoing process that requires strategic planning 
            and consistent action. This guide provides a comprehensive framework for taking control 
            of your online presence across all platforms and devices.
          </p>
        </div>

        {/* Management Strategy Tabs */}
        <Tabs defaultValue="assessment" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
            <TabsTrigger value="protection">Protection</TabsTrigger>
            <TabsTrigger value="cleanup">Cleanup</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="assessment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span>Digital Footprint Assessment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What to Review</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Social media profiles and posts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Google search results for your name</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Online accounts and registrations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Public records and directories</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Professional networking sites</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Assessment Tools</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Google yourself regularly</li>
                      <li>• Use privacy scanning tools</li>
                      <li>• Check data broker sites</li>
                      <li>• Review account activity logs</li>
                      <li>• Monitor credit reports</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="protection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Proactive Protection Strategies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Privacy Settings</span>
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Set profiles to private</li>
                      <li>• Limit friend/follower lists</li>
                      <li>• Disable location sharing</li>
                      <li>• Turn off ad tracking</li>
                      <li>• Limit data collection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <Lock className="h-4 w-4" />
                      <span>Account Security</span>
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Use strong passwords</li>
                      <li>• Enable 2FA everywhere</li>
                      <li>• Regular password updates</li>
                      <li>• Security key usage</li>
                      <li>• Login alert monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Sharing Practices</span>
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Think before posting</li>
                      <li>• Avoid oversharing</li>
                      <li>• Use pseudonyms</li>
                      <li>• Limit personal details</li>
                      <li>• Control photo tagging</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cleanup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-orange-600" />
                  <span>Digital Cleanup Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Phase 1: Immediate Actions</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quick wins to reduce exposure
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Delete inappropriate content</li>
                      <li>• Update privacy settings</li>
                      <li>• Remove personal information</li>
                      <li>• Unsubscribe from mailing lists</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Phase 2: Account Management</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Systematic account review
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Close unused accounts</li>
                      <li>• Update contact information</li>
                      <li>• Review connected apps</li>
                      <li>• Audit login permissions</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Phase 3: Data Removal</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Request data deletion
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Submit removal requests</li>
                      <li>• Contact data brokers</li>
                      <li>• Follow up on requests</li>
                      <li>• Document the process</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-purple-600" />
                  <span>Ongoing Monitoring</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Monitoring Schedule</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Google Alerts</span>
                        <Badge variant="outline">Weekly</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Privacy Settings Review</span>
                        <Badge variant="outline">Monthly</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Account Audit</span>
                        <Badge variant="outline">Quarterly</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Data Broker Check</span>
                        <Badge variant="outline">Bi-annually</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Monitoring Tools</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Google Alerts for your name</li>
                      <li>• Privacy monitoring services</li>
                      <li>• Credit monitoring</li>
                      <li>• Social media analytics</li>
                      <li>• Identity theft protection</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Platform-Specific Strategies */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Platform-Specific Management</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Social Media Platforms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Facebook/Meta</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• Activity Log review</li>
                      <li>• Ad preferences management</li>
                      <li>• Off-Facebook activity control</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium">Twitter/X</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• Tweet history cleanup</li>
                      <li>• Data export and review</li>
                      <li>• Third-party app permissions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium">Instagram</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• Story highlights review</li>
                      <li>• Location tag removal</li>
                      <li>• Account privacy settings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span>Search Engines & Browsers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Google</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• Search history deletion</li>
                      <li>• Location history management</li>
                      <li>• Ad personalization control</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium">Browser Settings</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• Clear cookies and cache</li>
                      <li>• Disable tracking</li>
                      <li>• Private browsing mode</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium">Microsoft/Bing</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• Privacy dashboard review</li>
                      <li>• Search history clearing</li>
                      <li>• Cortana data management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                  <span>Mobile Devices</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">iOS Devices</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• App tracking transparency</li>
                      <li>• Location services review</li>
                      <li>• Siri data management</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium">Android Devices</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• Google account permissions</li>
                      <li>• App data access control</li>
                      <li>• Assistant privacy settings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <span>Professional Platforms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">LinkedIn</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• Profile visibility settings</li>
                      <li>• Activity broadcast control</li>
                      <li>• Data export and review</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium">GitHub</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li>• Repository privacy settings</li>
                      <li>• Commit history review</li>
                      <li>• Profile information audit</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Management Best Practices */}
        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Management Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Do's</h4>
                <ul className="space-y-1 text-sm">
                  <li>✓ Regular privacy setting reviews</li>
                  <li>✓ Use privacy-focused alternatives</li>
                  <li>✓ Monitor your online presence</li>
                  <li>✓ Keep software updated</li>
                  <li>✓ Use strong authentication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Don'ts</h4>
                <ul className="space-y-1 text-sm">
                  <li>✗ Ignore privacy settings</li>
                  <li>✗ Over-share personal information</li>
                  <li>✗ Use same password everywhere</li>
                  <li>✗ Click suspicious links</li>
                  <li>✗ Neglect regular audits</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}