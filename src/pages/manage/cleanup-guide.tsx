import React, { useState } from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Checkbox } from '../../components/ui/checkbox';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { Trash2, Clock, AlertCircle, CheckCircle, Search, Settings, Link as LinkIcon } from 'lucide-react';

export default function CleanupGuidePage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  
  const toggleCheck = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const totalItems = 24; // Total number of checkable items
  const completedItems = checkedItems.size;
  const progressPercentage = (completedItems / totalItems) * 100;

  return (
    <PageLayout
      title="Digital Cleanup Guide"
      description="Step-by-step guide to clean up and minimize your digital footprint"
      previousPage={{
        title: "How to Manage",
        href: "/manage/how-to-manage"
      }}
      nextPage={{
        title: "Social Media Guide",
        href: "/manage/social-media-guide"
      }}
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559526324-593bc073d938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGRpZ2l0YWwlMjBkYXRhfGVufDF8fHx8MTc1ODg4MjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital data cleaning and organization"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Progress Tracker */}
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Cleanup Progress</h3>
              <Badge variant="outline">{completedItems}/{totalItems} completed</Badge>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Track your progress as you complete each cleanup task
            </p>
          </CardContent>
        </Card>

        {/* Cleanup Phases */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Cleanup Phases</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Phase 1: Emergency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Immediate actions to reduce exposure and prevent damage
                </p>
                <Badge variant="destructive" className="mt-2">High Priority</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Phase 2: Systematic</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Thorough review and cleanup of all accounts and platforms
                </p>
                <Badge variant="outline" className="mt-2">Medium Priority</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Phase 3: Maintenance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ongoing monitoring and regular cleanup routines
                </p>
                <Badge variant="secondary" className="mt-2">Ongoing</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Cleanup Checklist */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Detailed Cleanup Checklist</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {/* Phase 1: Emergency Actions */}
            <AccordionItem value="phase1">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span>Phase 1: Emergency Actions (Do First)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Immediate Content Removal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          'Delete inappropriate or embarrassing social media posts',
                          'Remove photos with sensitive location data or personal information',
                          'Unlink or delete accounts with concerning content',
                          'Remove personal details from public profiles',
                          'Delete old forum posts or comments that could be damaging'
                        ].map((item, index) => (
                          <div key={`emergency-${index}`} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`emergency-${index}`}
                              checked={checkedItems.has(`emergency-${index}`)}
                              onCheckedChange={() => toggleCheck(`emergency-${index}`)}
                            />
                            <label htmlFor={`emergency-${index}`} className="text-sm cursor-pointer">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Security Measures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          'Change passwords on compromised accounts',
                          'Enable two-factor authentication on all important accounts',
                          'Review and revoke suspicious app permissions',
                          'Check for unauthorized account access'
                        ].map((item, index) => (
                          <div key={`security-${index}`} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`security-${index}`}
                              checked={checkedItems.has(`security-${index}`)}
                              onCheckedChange={() => toggleCheck(`security-${index}`)}
                            />
                            <label htmlFor={`security-${index}`} className="text-sm cursor-pointer">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Phase 2: Systematic Cleanup */}
            <AccordionItem value="phase2">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-yellow-600" />
                  <span>Phase 2: Systematic Account Cleanup</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Social Media Platforms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          'Review and clean up Facebook timeline, photos, and posts',
                          'Delete old tweets and clean Twitter/X history',
                          'Remove Instagram posts with personal information',
                          'Clean up LinkedIn activity and connections',
                          'Review and delete TikTok videos and comments'
                        ].map((item, index) => (
                          <div key={`social-${index}`} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`social-${index}`}
                              checked={checkedItems.has(`social-${index}`)}
                              onCheckedChange={() => toggleCheck(`social-${index}`)}
                            />
                            <label htmlFor={`social-${index}`} className="text-sm cursor-pointer">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Search Engines & Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          'Clear Google search and location history',
                          'Delete YouTube watch and search history',
                          'Clean browser history and stored data',
                          'Remove stored passwords from browsers',
                          'Clear download history and cached files'
                        ].map((item, index) => (
                          <div key={`search-${index}`} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`search-${index}`}
                              checked={checkedItems.has(`search-${index}`)}
                              onCheckedChange={() => toggleCheck(`search-${index}`)}
                            />
                            <label htmlFor={`search-${index}`} className="text-sm cursor-pointer">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Email & Communication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          'Unsubscribe from unwanted mailing lists',
                          'Delete old email accounts and forward important emails',
                          'Clean up contact lists and remove old entries',
                          'Review and delete old messaging app conversations'
                        ].map((item, index) => (
                          <div key={`email-${index}`} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`email-${index}`}
                              checked={checkedItems.has(`email-${index}`)}
                              onCheckedChange={() => toggleCheck(`email-${index}`)}
                            />
                            <label htmlFor={`email-${index}`} className="text-sm cursor-pointer">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Phase 3: Deep Cleanup */}
            <AccordionItem value="phase3">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center space-x-2">
                  <Trash2 className="h-5 w-5 text-green-600" />
                  <span>Phase 3: Deep Cleanup & Data Removal</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Data Broker Removal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          'Submit removal requests to major data brokers',
                          'Contact people search websites for data removal',
                          'Request removal from marketing databases',
                          'Follow up on removal requests after 30 days'
                        ].map((item, index) => (
                          <div key={`broker-${index}`} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`broker-${index}`}
                              checked={checkedItems.has(`broker-${index}`)}
                              onCheckedChange={() => toggleCheck(`broker-${index}`)}
                            />
                            <label htmlFor={`broker-${index}`} className="text-sm cursor-pointer">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Account Deletion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          'Delete unused social media accounts',
                          'Close old email accounts after data backup',
                          'Remove profiles from dating and networking sites',
                          'Cancel unused subscriptions and services'
                        ].map((item, index) => (
                          <div key={`deletion-${index}`} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`deletion-${index}`}
                              checked={checkedItems.has(`deletion-${index}`)}
                              onCheckedChange={() => toggleCheck(`deletion-${index}`)}
                            />
                            <label htmlFor={`deletion-${index}`} className="text-sm cursor-pointer">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Platform-Specific Cleanup Instructions */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Platform-Specific Cleanup Instructions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Facebook/Meta Cleanup</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-sm">
                  <li>1. Go to Settings & Privacy → Activity Log</li>
                  <li>2. Filter by category (posts, photos, etc.)</li>
                  <li>3. Bulk delete or change privacy settings</li>
                  <li>4. Review tagged photos and remove tags</li>
                  <li>5. Clean up friend list and connections</li>
                  <li>6. Check and revoke app permissions</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Google Account Cleanup</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-sm">
                  <li>1. Visit myactivity.google.com</li>
                  <li>2. Delete search and YouTube history</li>
                  <li>3. Manage location history settings</li>
                  <li>4. Review connected apps and services</li>
                  <li>5. Clean up Google Photos and Drive</li>
                  <li>6. Update ad personalization settings</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Twitter/X Cleanup</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-sm">
                  <li>1. Download your Twitter archive</li>
                  <li>2. Use third-party tools to bulk delete tweets</li>
                  <li>3. Review and unfollow inactive accounts</li>
                  <li>4. Clean up likes and retweets</li>
                  <li>5. Remove personal information from bio</li>
                  <li>6. Check privacy and safety settings</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LinkedIn Cleanup</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-sm">
                  <li>1. Review profile information and posts</li>
                  <li>2. Clean up activity and article shares</li>
                  <li>3. Manage connection requests and endorsements</li>
                  <li>4. Update privacy settings and visibility</li>
                  <li>5. Review skills and recommendations</li>
                  <li>6. Check messaging and notification settings</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline and Estimates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>Cleanup Timeline & Effort Estimates</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">2-4 hours</div>
                <h4 className="font-semibold">Phase 1: Emergency</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Critical actions to reduce immediate risks
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">8-12 hours</div>
                <h4 className="font-semibold">Phase 2: Systematic</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Thorough cleanup spread over 2-3 weeks
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">2-3 months</div>
                <h4 className="font-semibold">Phase 3: Deep Cleanup</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Data removal requests and follow-ups
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Pro Tips for Effective Cleanup</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Before You Start</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Backup important data and photos</li>
                  <li>• Document your current accounts</li>
                  <li>• Set aside dedicated time blocks</li>
                  <li>• Prepare alternative contact methods</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">During Cleanup</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Take screenshots of important settings</li>
                  <li>• Keep a log of deletion requests</li>
                  <li>• Work systematically, one platform at a time</li>
                  <li>• Don't rush - quality over speed</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}