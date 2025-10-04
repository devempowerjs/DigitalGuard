import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Badge } from '../../components/ui/badge';
import { Facebook, Twitter, Instagram, Linkedin, MessageSquare, Shield, Settings, Eye, Users } from 'lucide-react';

export default function SocialMediaGuidePage() {
  return (
    <PageLayout
      title="Social Media Privacy Guide"
      description="Platform-specific privacy settings and best practices for major social media platforms"
      previousPage={{
        title: "Cleanup Guide",
        href: "/manage/cleanup-guide"
      }}
      nextPage={{
        title: "Action Steps",
        href: "/manage/action-steps"
      }}
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          {/* SOCIAL MEDIA GUIDE PAGE IMAGE FIX: Commented out Unsplash source that may be blocked by school networks */}
          {/* Original Unsplash image: https://images.unsplash.com/photo-1667372283545-1261fb5c427a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hbmFnZW1lbnQlMjBwcml2YWN5fGVufDF8fHx8MTc1ODg4MjA5OXww&ixlib=rb-4.1.0&q=80&w=1080 */}
          {/* <ImageWithFallback
            src="https://images.unsplash.com/photo-1667372283545-1261fb5c427a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hbmFnZW1lbnQlMjBwcml2YWN5fGVufDF8fHx8MTc1ODg4MjA5OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Social media privacy and management"
            className="w-full h-full object-cover"
          /> */}
          
          {/* NEW: CSS-based social media privacy illustration */}
          <div className="w-full h-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic29jaWFsIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjMiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSIxMCIgcj0iMyIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjMwIiByPSIzIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NvY2lhbCkiLz48L3N2Zz4=')] opacity-20"></div>
            <div className="text-center text-white z-10 p-6">
              <div className="flex justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded"></div>
                </div>
                <div className="w-8 h-8 bg-white/30 rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold opacity-90">Social Media Privacy</h3>
              <p className="text-sm opacity-75 mt-2">Secure Your Social Platforms</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Social media platforms collect vast amounts of personal data. This guide helps you 
            understand and configure privacy settings to protect your information while still 
            enjoying social connections.
          </AlertDescription>
        </Alert>

        {/* Platform Selection Tabs */}
        <Tabs defaultValue="facebook" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="facebook" className="flex items-center space-x-1">
              <Facebook className="h-4 w-4" />
              <span className="hidden sm:inline">Facebook</span>
            </TabsTrigger>
            <TabsTrigger value="instagram" className="flex items-center space-x-1">
              <Instagram className="h-4 w-4" />
              <span className="hidden sm:inline">Instagram</span>
            </TabsTrigger>
            <TabsTrigger value="twitter" className="flex items-center space-x-1">
              <Twitter className="h-4 w-4" />
              <span className="hidden sm:inline">Twitter/X</span>
            </TabsTrigger>
            <TabsTrigger value="linkedin" className="flex items-center space-x-1">
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </TabsTrigger>
            <TabsTrigger value="tiktok" className="flex items-center space-x-1">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">TikTok</span>
            </TabsTrigger>
          </TabsList>

          {/* Facebook Guide */}
          <TabsContent value="facebook" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span>Facebook Privacy Settings</span>
                  <Badge variant="destructive">High Priority</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Essential Privacy Settings</span>
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-l-4 border-blue-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Profile & Tagging</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Who can see your future posts: Friends</li>
                            <li>• Who can see your friends list: Only me</li>
                            <li>• Who can tag you: Friends</li>
                            <li>• Review tags before posting: Enable</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-l-4 border-green-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Timeline & Tagging</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Who can post on your timeline: Friends</li>
                            <li>• Review posts before they appear: Enable</li>
                            <li>• Who can see what others post: Friends</li>
                            <li>• Face recognition: Disable</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Advanced Settings</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Off-Facebook Activity</span>
                        <Badge variant="outline">Clear & Disable</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Ad Preferences</span>
                        <Badge variant="outline">Limit Targeting</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Location Services</span>
                        <Badge variant="outline">Disable</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>People You May Know</span>
                        <Badge variant="outline">Disable</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">⚠️ Facebook Data Download</h5>
                    <p className="text-sm">
                      Download your Facebook data to see what information they have collected. 
                      Go to Settings → Your Facebook Information → Download Your Information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Instagram Guide */}
          <TabsContent value="instagram" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5 text-pink-600" />
                  <span>Instagram Privacy Settings</span>
                  <Badge variant="secondary">Medium Priority</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Account Privacy</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-l-4 border-pink-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Basic Settings</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Private Account: Enable</li>
                            <li>• Story sharing: Friends only</li>
                            <li>• Allow message requests: From followers</li>
                            <li>• Activity status: Disable</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-l-4 border-purple-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Content Control</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Photo tagging: Manual approval</li>
                            <li>• Story mentions: People you follow</li>
                            <li>• Comments: From followers</li>
                            <li>• Hide offensive comments: Enable</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Location & Data Settings</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Location Services</span>
                        <Badge variant="outline">Disable</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Photo Map</span>
                        <Badge variant="outline">Clear History</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Ad Targeting</span>
                        <Badge variant="outline">Limit</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Data Download</span>
                        <Badge variant="outline">Request Copy</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Twitter/X Guide */}
          <TabsContent value="twitter" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Twitter className="h-5 w-5 text-blue-400" />
                  <span>Twitter/X Privacy Settings</span>
                  <Badge variant="secondary">Medium Priority</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Privacy and Safety</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-l-4 border-blue-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Tweet Privacy</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Protect your Tweets: Consider enabling</li>
                            <li>• Photo tagging: Only people you follow</li>
                            <li>• Discoverability: Limit</li>
                            <li>• Read receipts: Disable</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-l-4 border-cyan-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Content Filtering</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Quality filter: Enable</li>
                            <li>• Hide sensitive content: Enable</li>
                            <li>• Mute words and phrases: Set up</li>
                            <li>• Block unwanted followers: Use liberally</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Data and Personalization</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Personalized Ads</span>
                        <Badge variant="outline">Disable</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Location Information</span>
                        <Badge variant="outline">Delete All</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Interests from Twitter</span>
                        <Badge variant="outline">Review & Remove</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Data Sharing with Partners</span>
                        <Badge variant="outline">Disable</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">💡 Twitter/X Pro Tip</h5>
                    <p className="text-sm">
                      Use third-party tools like TweetDelete to bulk delete old tweets. 
                      Remember that deleted tweets may still exist in search engine caches.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LinkedIn Guide */}
          <TabsContent value="linkedin" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Linkedin className="h-5 w-5 text-blue-700" />
                  <span>LinkedIn Privacy Settings</span>
                  <Badge variant="secondary">Professional Focus</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Profile Visibility</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-l-4 border-blue-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Public Profile</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Your profile's public visibility: Customize</li>
                            <li>• Who can see your connections: Only you</li>
                            <li>• Profile viewing options: Private mode</li>
                            <li>• Representing your organization: Control</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-l-4 border-green-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Activity Privacy</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Activity broadcasts: Selective sharing</li>
                            <li>• Mentions in the news: Review first</li>
                            <li>• Profile changes: Don't broadcast all</li>
                            <li>• Job search signal: Use carefully</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Professional Settings</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Salary Insights</span>
                        <Badge variant="outline">Opt Out</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Research Surveys</span>
                        <Badge variant="outline">Decline</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Partner Insights</span>
                        <Badge variant="outline">Disable</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Microsoft Integration</span>
                        <Badge variant="outline">Review</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TikTok Guide */}
          <TabsContent value="tiktok" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-black dark:text-white" />
                  <span>TikTok Privacy Settings</span>
                  <Badge variant="destructive">High Risk</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Alert>
                    <Eye className="h-4 w-4" />
                    <AlertDescription>
                      TikTok collects extensive data including biometric information. 
                      Consider if the entertainment value outweighs privacy concerns.
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold mb-3">Account Privacy</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-l-4 border-red-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Basic Privacy</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Private account: Strongly recommended</li>
                            <li>• Who can send direct messages: Friends</li>
                            <li>• Who can view your liked videos: Only me</li>
                            <li>• Comment filtering: Enable all filters</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-l-4 border-orange-500">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Data Collection</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Personalized ads: Disable</li>
                            <li>• Activity data sharing: Disable</li>
                            <li>• Analytics: Opt out</li>
                            <li>• Location services: Disable</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">🚨 TikTok Security Notice</h5>
                    <p className="text-sm">
                      TikTok's parent company is subject to Chinese data laws. Consider using 
                      alternative platforms if you're concerned about data sovereignty and privacy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* General Social Media Best Practices */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Universal Social Media Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>What TO Do</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Review privacy settings regularly (monthly)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Use strong, unique passwords with 2FA</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Think before posting - consider future implications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Limit personal information in profiles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Use privacy-focused alternative platforms when possible</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Regularly audit connected apps and permissions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-red-600" />
                  <span>What NOT To Do</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Share real-time location or travel plans</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Post photos of sensitive documents or information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Accept friend/connection requests from strangers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Use social media logins for other services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Ignore platform policy updates and changes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Overshare personal milestones and life events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Privacy-Focused Alternatives */}
        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle>Privacy-Focused Social Media Alternatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">General Social</h4>
                <ul className="space-y-1">
                  <li>• Mastodon (Twitter alternative)</li>
                  <li>• Signal (Messaging)</li>
                  <li>• Element (Discord alternative)</li>
                  <li>• Diaspora (Facebook alternative)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Professional</h4>
                <ul className="space-y-1">
                  <li>• AngelList (Startup community)</li>
                  <li>• Behance (Creative portfolios)</li>
                  <li>• GitHub (Developer community)</li>
                  <li>• Portfolio websites</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Media Sharing</h4>
                <ul className="space-y-1">
                  <li>• PeerTube (Video sharing)</li>
                  <li>• Pixelfed (Photo sharing)</li>
                  <li>• Brave Search Social</li>
                  <li>• Self-hosted blogs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
