import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';
import { Server, Cloud, Database, Shield, Clock, Globe, MapPin, Eye } from 'lucide-react';

export default function DataStoragePage() {
  return (
    <PageLayout
      title="Data Storage & Retention"
      description="Where your digital data is stored and how long it's kept"
      previousPage={{
        title: "Consequences",
        href: "/learn/consequences"
      }}
      nextPage={{
        title: "How to Manage",
        href: "/manage/how-to-manage"
      }}
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506399441630-774ef431470f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc3RvcmFnZSUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODg4MjA5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Data storage servers and technology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p>
            Understanding where your data is stored, who has access to it, and how long it's retained 
            is crucial for managing your digital privacy. Your information travels through complex 
            networks and resides in various locations worldwide.
          </p>
        </div>

        {/* Types of Data Storage */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Types of Data Storage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Server className="h-5 w-5 text-blue-600" />
                  <span>Company Servers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  Direct storage on company-owned servers and databases.
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• User profiles and account data</li>
                  <li>• Transaction histories</li>
                  <li>• Communication logs</li>
                  <li>• Behavioral analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cloud className="h-5 w-5 text-green-600" />
                  <span>Cloud Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  Third-party cloud infrastructure providers.
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• AWS, Google Cloud, Azure</li>
                  <li>• Distributed global storage</li>
                  <li>• Backup and redundancy</li>
                  <li>• Scalable infrastructure</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  <span>Data Brokers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  Companies that collect and sell personal data.
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Aggregated profiles</li>
                  <li>• Marketing databases</li>
                  <li>• Credit reporting agencies</li>
                  <li>• Public records compilation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Data Retention Periods */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Data Retention Periods</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span>Retention by Platform Type</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Social Media Platforms</span>
                      <Badge variant="outline">Indefinite</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Most retain data even after account deletion
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Search Engines</span>
                      <Badge variant="outline">9-18 months</Badge>
                    </div>
                    <Progress value={60} className="h-2" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Search history and IP associations
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Email Providers</span>
                      <Badge variant="outline">2+ years</Badge>
                    </div>
                    <Progress value={80} className="h-2" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Email content and metadata
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">E-commerce Sites</span>
                      <Badge variant="outline">7-10 years</Badge>
                    </div>
                    <Progress value={90} className="h-2" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Transaction records for legal compliance
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Banking & Financial</span>
                      <Badge variant="outline">5-7 years</Badge>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Legal requirement for financial records
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Data Centers */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Global Data Distribution</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <span>Where Your Data Lives</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Major Data Center Regions</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-3 w-3 text-blue-500" />
                      <span>North America (US, Canada)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-3 w-3 text-green-500" />
                      <span>Europe (Ireland, Germany, Netherlands)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-3 w-3 text-purple-500" />
                      <span>Asia-Pacific (Singapore, Japan, Australia)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-3 w-3 text-orange-500" />
                      <span>South America (Brazil, Chile)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Data Replication</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Multiple copies across regions</li>
                    <li>• Backup and disaster recovery</li>
                    <li>• Performance optimization</li>
                    <li>• Legal jurisdiction compliance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Access & Sharing */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Who Has Access to Your Data</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-red-600" />
                  <span>Internal Access</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Company employees (limited roles)</li>
                  <li>• System administrators</li>
                  <li>• Customer support teams</li>
                  <li>• Data analysts and researchers</li>
                  <li>• Security and compliance teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>External Sharing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Government agencies (legal requests)</li>
                  <li>• Law enforcement (warrants)</li>
                  <li>• Third-party service providers</li>
                  <li>• Advertising partners</li>
                  <li>• Data brokers and aggregators</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal Frameworks */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Legal Frameworks & Regulations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">GDPR (Europe)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Right to be forgotten</li>
                  <li>• Data portability</li>
                  <li>• Consent requirements</li>
                  <li>• Breach notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">CCPA (California)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Right to know</li>
                  <li>• Right to delete</li>
                  <li>• Right to opt-out</li>
                  <li>• Non-discrimination</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Other Regions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• PIPEDA (Canada)</li>
                  <li>• LGPD (Brazil)</li>
                  <li>• PDPA (Singapore)</li>
                  <li>• Various national laws</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Data Lifecycle */}
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Data Lifecycle Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold">Collection</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Data gathered through interactions</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold">Storage</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Saved in databases and servers globally</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold">Processing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Analyzed for insights and patterns</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-semibold">Sharing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Shared with partners or sold</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                <div>
                  <h4 className="font-semibold">Retention/Deletion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Kept for specific periods or deleted</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}