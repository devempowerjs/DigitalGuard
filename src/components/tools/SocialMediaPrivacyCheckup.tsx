'use client';

import React, { useState } from 'react';
import { Shield, Facebook, Instagram, Twitter, Linkedin, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface PrivacyItem {
  id: string;
  label: string;
  description: string;
  importance: 'high' | 'medium' | 'low';
  helpUrl?: string;
}

interface PlatformConfig {
  name: string;
  icon: React.ReactNode;
  color: string;
  items: PrivacyItem[];
}

export function SocialMediaPrivacyCheckup() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [currentTab, setCurrentTab] = useState('facebook');

  const platforms: Record<string, PlatformConfig> = {
    facebook: {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      color: 'text-blue-600',
      items: [
        {
          id: 'fb-posts-friends',
          label: 'Posts are visible to friends only',
          description: 'Ensure your posts are not public',
          importance: 'high',
          helpUrl: 'https://www.facebook.com/help/120939471321735'
        },
        {
          id: 'fb-profile-private',
          label: 'Profile information is restricted',
          description: 'Limit who can see your personal details',
          importance: 'high',
          helpUrl: 'https://www.facebook.com/help/325807937506242'
        },
        {
          id: 'fb-friend-requests',
          label: 'Friend requests limited to friends of friends',
          description: 'Reduce unsolicited friend requests',
          importance: 'medium'
        },
        {
          id: 'fb-timeline-review',
          label: 'Timeline review is enabled',
          description: 'Review posts before they appear on your timeline',
          importance: 'high'
        },
        {
          id: 'fb-face-recognition',
          label: 'Face recognition is turned off',
          description: 'Prevent automatic tagging in photos',
          importance: 'medium'
        },
        {
          id: 'fb-data-download',
          label: 'Reviewed your Facebook data',
          description: 'Know what data Facebook has about you',
          importance: 'low'
        },
        {
          id: 'fb-apps-review',
          label: 'Reviewed connected apps and websites',
          description: 'Remove unnecessary app permissions',
          importance: 'medium'
        },
        {
          id: 'fb-search-privacy',
          label: 'Limited search engine indexing',
          description: 'Prevent your profile from appearing in search engines',
          importance: 'high'
        }
      ]
    },
    instagram: {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      color: 'text-pink-600',
      items: [
        {
          id: 'ig-private-account',
          label: 'Account is set to private',
          description: 'Only approved followers can see your content',
          importance: 'high'
        },
        {
          id: 'ig-story-sharing',
          label: 'Story sharing to Facebook is disabled',
          description: 'Keep your Instagram stories separate from Facebook',
          importance: 'medium'
        },
        {
          id: 'ig-activity-status',
          label: 'Activity status is hidden',
          description: 'Hide when you were last active',
          importance: 'low'
        },
        {
          id: 'ig-comment-controls',
          label: 'Comment controls are configured',
          description: 'Filter inappropriate comments automatically',
          importance: 'medium'
        },
        {
          id: 'ig-message-requests',
          label: 'Message requests from strangers are limited',
          description: 'Control who can send you direct messages',
          importance: 'medium'
        },
        {
          id: 'ig-tagged-posts',
          label: 'Tagged post approval is enabled',
          description: 'Review posts before you appear tagged in them',
          importance: 'high'
        },
        {
          id: 'ig-location-history',
          label: 'Location history is turned off',
          description: 'Prevent Instagram from tracking your location',
          importance: 'medium'
        }
      ]
    },
    twitter: {
      name: 'Twitter/X',
      icon: <Twitter className="h-5 w-5" />,
      color: 'text-blue-400',
      items: [
        {
          id: 'tw-protected-tweets',
          label: 'Tweets are protected (private)',
          description: 'Only approved followers can see your tweets',
          importance: 'high'
        },
        {
          id: 'tw-photo-tagging',
          label: 'Photo tagging restrictions are set',
          description: 'Control who can tag you in photos',
          importance: 'medium'
        },
        {
          id: 'tw-location-tweet',
          label: 'Location information in tweets is disabled',
          description: 'Don\'t share your location with tweets',
          importance: 'medium'
        },
        {
          id: 'tw-discoverability',
          label: 'Email/phone discoverability is disabled',
          description: 'Prevent people from finding you via email or phone',
          importance: 'high'
        },
        {
          id: 'tw-ad-personalization',
          label: 'Ad personalization is limited',
          description: 'Reduce targeted advertising based on your data',
          importance: 'low'
        },
        {
          id: 'tw-data-sharing',
          label: 'Data sharing with business partners is limited',
          description: 'Control how your data is shared',
          importance: 'medium'
        }
      ]
    },
    linkedin: {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'text-blue-700',
      items: [
        {
          id: 'li-profile-visibility',
          label: 'Profile visibility is controlled',
          description: 'Limit who can see your full profile',
          importance: 'medium'
        },
        {
          id: 'li-activity-broadcasts',
          label: 'Activity broadcasts are selective',
          description: 'Control when your network is notified of your activity',
          importance: 'medium'
        },
        {
          id: 'li-messaging-privacy',
          label: 'Messaging privacy is configured',
          description: 'Control who can send you messages',
          importance: 'medium'
        },
        {
          id: 'li-data-export',
          label: 'Reviewed your LinkedIn data',
          description: 'Know what professional data LinkedIn has',
          importance: 'low'
        },
        {
          id: 'li-ad-preferences',
          label: 'Advertising preferences are set',
          description: 'Control how your data is used for ads',
          importance: 'low'
        },
        {
          id: 'li-search-appearance',
          label: 'Search engine indexing is controlled',
          description: 'Manage how you appear in search results',
          importance: 'medium'
        }
      ]
    }
  };

  const handleItemToggle = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const calculatePlatformScore = (platform: PlatformConfig) => {
    const totalItems = platform.items.length;
    const checkedCount = platform.items.filter(item => checkedItems[item.id]).length;
    return Math.round((checkedCount / totalItems) * 100);
  };

  const calculateOverallScore = () => {
    const allItems = Object.values(platforms).flatMap(platform => platform.items);
    const totalItems = allItems.length;
    const checkedCount = allItems.filter(item => checkedItems[item.id]).length;
    return Math.round((checkedCount / totalItems) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-600';
    if (score >= 60) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  const getRecommendations = () => {
    const score = calculateOverallScore();
    if (score >= 80) {
      return [
        'Great job! Your privacy settings are well-configured.',
        'Continue to review these settings periodically as platforms update their policies.',
        'Consider helping friends and family improve their privacy settings.'
      ];
    } else if (score >= 60) {
      return [
        'Good start! Focus on the high-importance items you haven\'t completed yet.',
        'Review your privacy settings quarterly to stay protected.',
        'Consider enabling two-factor authentication on all accounts.'
      ];
    } else {
      return [
        'Your privacy needs attention. Start with high-importance items immediately.',
        'Consider making your accounts private while you improve your settings.',
        'Review our cleanup guides for step-by-step instructions.',
        'Set a monthly reminder to review and update your privacy settings.'
      ];
    }
  };

  const overallScore = calculateOverallScore();

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-6 w-6 text-blue-600" />
          <CardTitle className="text-2xl">Social Media Privacy Checkup</CardTitle>
        </div>
        <CardDescription>
          Review and improve your privacy settings across major social media platforms.
        </CardDescription>
        
        {/* Overall Score */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Overall Privacy Score:</span>
            <span className={`text-2xl font-bold ${getScoreColor(overallScore)}`}>
              {overallScore}%
            </span>
          </div>
          <Progress 
            value={overallScore} 
            className="h-3"
            style={{
              '--progress-foreground': getScoreBgColor(overallScore).replace('bg-', ''),
            } as React.CSSProperties}
          />
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {Object.values(platforms).reduce((sum, platform) => 
              sum + platform.items.filter(item => checkedItems[item.id]).length, 0
            )} of {Object.values(platforms).reduce((sum, platform) => sum + platform.items.length, 0)} privacy settings configured
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="grid w-full grid-cols-4">
            {Object.entries(platforms).map(([key, platform]) => (
              <TabsTrigger key={key} value={key} className="flex items-center space-x-1">
                {platform.icon}
                <span className="hidden sm:inline">{platform.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(platforms).map(([key, platform]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              {/* Platform Score */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className={platform.color}>
                    {platform.icon}
                  </div>
                  <span className="font-medium">{platform.name} Privacy Score:</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xl font-bold ${getScoreColor(calculatePlatformScore(platform))}`}>
                    {calculatePlatformScore(platform)}%
                  </span>
                  <Button 
                    asChild 
                    size="sm" 
                    variant="outline"
                    className="ml-2"
                  >
                    <a 
                      href={`https://${platform.name.toLowerCase()}.com/settings/privacy`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Settings
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Privacy Items */}
              <div className="space-y-3">
                {platform.items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Checkbox
                      id={item.id}
                      checked={checkedItems[item.id] || false}
                      onCheckedChange={() => handleItemToggle(item.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <label 
                          htmlFor={item.id} 
                          className="font-medium cursor-pointer"
                        >
                          {item.label}
                        </label>
                        {item.importance === 'high' && (
                          <AlertCircle className="h-4 w-4 text-red-500" />
                        )}
                        {item.importance === 'medium' && (
                          <AlertCircle className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {item.description}
                      </p>
                      {item.helpUrl && (
                        <a 
                          href={item.helpUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline flex items-center mt-1"
                        >
                          Help Guide
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Recommendations */}
        {Object.keys(checkedItems).length > 0 && (
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
              Personalized Recommendations
            </h4>
            <ul className="space-y-2">
              {getRecommendations().map((recommendation, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Legend */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h5 className="font-medium mb-2">Importance Levels:</h5>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center space-x-1">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <span>High Priority - Address immediately</span>
            </div>
            <div className="flex items-center space-x-1">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <span>Medium Priority - Address when convenient</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-4 w-4 border-2 border-gray-400 rounded"></div>
              <span>Low Priority - Nice to have</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}