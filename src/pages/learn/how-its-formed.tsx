import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Globe, Smartphone, Camera, CreditCard, MapPin, MessageSquare } from 'lucide-react';

export default function HowItsFormedPage() {
  return (
    <PageLayout
      title="How Digital Footprints Are Formed"
      description="Understanding the various ways your digital footprint is created every day"
      previousPage={{
        title: "What is Digital Footprint",
        href: "/learn/what-is-digital-footprint"
      }}
      nextPage={{
        title: "Consequences",
        href: "/learn/consequences"
      }}
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
           {/* LEARN PAGE IMAGE FIX: Commented out Unsplash source that may be blocked by school networks */} 
           Original Unsplash image: https://images.unsplash.com/photo-1666624833516-6d0e320c610d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZm9vdHByaW50JTIwZGF0YSUyMGZvcm1hdGlvbnxlbnwxfHx8fDE3NTg4ODIwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080 
            <ImageWithFallback
            src="https://images.unsplash.com/photo-1666624833516-6d0e320c610d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZm9vdHByaW50JTIwZGF0YSUyMGZvcm1hdGlvbnxlbnwxfHx8fDE3NTg4ODIwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital footprint formation visualisation"
            className="w-full h-full object-cover"
          /> 
          
          {/* NEW: CSS-based digital footprint formation illustration */}
          {/* <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZHJvcGxldHMiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZHJvcGxldHMpIi8+PC9zdmc+')] opacity-20"></div>
            <div className="text-center text-white z-10 p-6">
              <div className="flex justify-center space-x-4 mb-4">
                <div className="w-4 h-4 bg-white/40 rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-4 h-4 bg-white/80 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <h3 className="text-xl font-semibold opacity-90">Digital Footprint Formation</h3>
              <p className="text-sm opacity-75 mt-2">Every Click Creates a Digital Trace</p>
            </div>
          </div>
        </div> */}

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p>
            Every click, search, post, and digital interaction creates traces that form your digital footprint. 
            Understanding how these traces are created is the first step in managing your online presence effectively.
          </p>
        </div>

        {/* Active vs Passive Footprints */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <span>Active Digital Footprints</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Data you intentionally share online through your actions and choices.
              </p>
              <ul className="space-y-2">
                <li>• Social media posts and comments</li>
                <li>• Email communications</li>
                <li>• Online purchases</li>
                <li>• Website registrations</li>
                <li>• Blog posts and articles</li>
                <li>• Online reviews and ratings</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-green-600" />
                <span>Passive Digital Footprints</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Data collected about you without your direct input or knowledge.
              </p>
              <ul className="space-y-2">
                <li>• Website visit tracking</li>
                <li>• Location data from devices</li>
                <li>• Search engine queries</li>
                <li>• IP address logging</li>
                <li>• Cookies and tracking pixels</li>
                <li>• App usage analytics</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Main Sources */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Major Sources of Digital Footprints</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                  <span>Mobile Devices</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• App downloads and usage</li>
                  <li>• Location services</li>
                  <li>• Phone calls and texts</li>
                  <li>• Mobile browsing</li>
                  <li>• Push notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span>Web Browsing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Search queries</li>
                  <li>• Website visits</li>
                  <li>• Cookies and tracking</li>
                  <li>• Download history</li>
                  <li>• Form submissions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-green-600" />
                  <span>Financial Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Online purchases</li>
                  <li>• Banking transactions</li>
                  <li>• Payment app usage</li>
                  <li>• Subscription services</li>
                  <li>• Digital receipts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-red-600" />
                  <span>Social Media</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Posts and comments</li>
                  <li>• Likes and reactions</li>
                  <li>• Photo/video uploads</li>
                  <li>• Check-ins and tags</li>
                  <li>• Private messages</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <span>Location Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• GPS coordinates</li>
                  <li>• Wi-Fi connections</li>
                  <li>• Transportation apps</li>
                  <li>• Weather apps</li>
                  <li>• Navigation usage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-teal-600" />
                  <span>Media & Content</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Photo metadata</li>
                  <li>• Video uploads</li>
                  <li>• Streaming history</li>
                  <li>• Document sharing</li>
                  <li>• Cloud storage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Daily Footprint Formation Timeline</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">6:00 AM - Morning</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Phone unlocked, weather app checked, location tracked, news apps opened
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">9:00 AM - Work</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Email client active, web searches, document access, video calls
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">12:00 PM - Lunch</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Social media browsing, food delivery apps, location check-ins
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">6:00 PM - Evening</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Online shopping, streaming services, messaging apps, photo uploads
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">11:00 PM - Night</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Device usage tracked, sleep apps, final social media checks
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Takeaways */}
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Key Takeaways</h3>
            <ul className="space-y-2">
              <li>• Digital footprints are created both actively and passively</li>
              <li>• Every device and platform contributes to your footprint</li>
              <li>• Location data is one of the most revealing types of information</li>
              <li>• Your footprint grows continuously throughout the day</li>
              <li>• Understanding formation is essential for effective management</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
