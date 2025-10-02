import React, { useState } from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Checkbox } from '../../components/ui/checkbox';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Calendar, Clock, CheckCircle, Target, Star, AlertCircle, Zap } from 'lucide-react';

export default function ActionStepsPage() {
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

  // Action steps data
  const actionSteps = {
    immediate: [
      { id: 'google-search', text: 'Google yourself and review results', time: '10 min' },
      { id: 'privacy-settings', text: 'Update privacy settings on main social media accounts', time: '30 min' },
      { id: 'strong-passwords', text: 'Change to strong, unique passwords on important accounts', time: '20 min' },
      { id: 'two-factor', text: 'Enable two-factor authentication on all critical accounts', time: '15 min' },
      { id: 'location-disable', text: 'Disable location sharing on social media apps', time: '10 min' }
    ],
    weekly: [
      { id: 'social-audit', text: 'Review and clean up social media posts from the past week', time: '15 min' },
      { id: 'google-alerts', text: 'Check Google Alerts for your name', time: '5 min' },
      { id: 'email-unsubscribe', text: 'Unsubscribe from 5 unwanted email lists', time: '10 min' },
      { id: 'app-permissions', text: 'Review app permissions on your mobile device', time: '10 min' },
      { id: 'browser-cleanup', text: 'Clear browser history and cookies', time: '5 min' }
    ],
    monthly: [
      { id: 'full-audit', text: 'Conduct full digital footprint audit', time: '60 min' },
      { id: 'password-review', text: 'Review and update passwords', time: '30 min' },
      { id: 'privacy-checkup', text: 'Complete privacy checkup on all platforms', time: '45 min' },
      { id: 'data-download', text: 'Download and review data from one major platform', time: '20 min' },
      { id: 'backup-important', text: 'Backup important data and photos', time: '30 min' }
    ],
    quarterly: [
      { id: 'security-audit', text: 'Complete comprehensive security audit', time: '90 min' },
      { id: 'account-cleanup', text: 'Delete unused accounts and subscriptions', time: '60 min' },
      { id: 'data-brokers', text: 'Submit removal requests to data brokers', time: '45 min' },
      { id: 'professional-review', text: 'Review professional online presence', time: '30 min' },
      { id: 'emergency-plan', text: 'Update digital emergency/recovery plan', time: '20 min' }
    ]
  };

  const getTotalItems = (category: string) => actionSteps[category as keyof typeof actionSteps]?.length || 0;
  const getCompletedItems = (category: string) => {
    return actionSteps[category as keyof typeof actionSteps]?.filter(item => 
      checkedItems.has(item.id)
    ).length || 0;
  };

  const getOverallProgress = () => {
    const totalItems = Object.values(actionSteps).flat().length;
    const completedItems = checkedItems.size;
    return (completedItems / totalItems) * 100;
  };

  return (
    <PageLayout
      title="Action Steps & Implementation"
      description="Your comprehensive action plan for digital footprint management"
      previousPage={{
        title: "Social Media Guide",
        href: "/manage/social-media-guide"
      }}
    >
      <div className="space-y-8">
        {/* Hero Image */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1553968464-754bb963ea49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBzdGVwcyUyMGNoZWNrbGlzdHxlbnwxfHx8fDE3NTg4ODIxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Action steps and checklist planning"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overall Progress */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Overall Progress</h3>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {checkedItems.size}/{Object.values(actionSteps).flat().length} completed
              </Badge>
            </div>
            <Progress value={getOverallProgress()} className="h-4 mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {getOverallProgress() < 25 && "Just getting started! Every step counts."}
              {getOverallProgress() >= 25 && getOverallProgress() < 50 && "Good progress! Keep building momentum."}
              {getOverallProgress() >= 50 && getOverallProgress() < 75 && "Excellent work! You're more than halfway there."}
              {getOverallProgress() >= 75 && getOverallProgress() < 100 && "Outstanding! You're almost done."}
              {getOverallProgress() === 100 && "🎉 Congratulations! You've completed all action steps!"}
            </p>
          </CardContent>
        </Card>

        {/* Quick Action Buttons */}
        <div className="grid md:grid-cols-4 gap-4">
          <Button 
            className="h-auto p-4 flex flex-col items-center space-y-2"
            variant="outline"
            onClick={() => window.open('https://www.google.com/search?q=' + encodeURIComponent('"your name"'), '_blank')}
          >
            <Target className="h-6 w-6" />
            <span className="text-sm">Google Yourself</span>
          </Button>
          
          <Button 
            className="h-auto p-4 flex flex-col items-center space-y-2"
            variant="outline"
            onClick={() => window.open('/tools', '_self')}
          >
            <Zap className="h-6 w-6" />
            <span className="text-sm">Use Our Tools</span>
          </Button>
          
          <Button 
            className="h-auto p-4 flex flex-col items-center space-y-2"
            variant="outline"
            onClick={() => window.open('https://myaccount.google.com/privacy', '_blank')}
          >
            <CheckCircle className="h-6 w-6" />
            <span className="text-sm">Google Privacy</span>
          </Button>
          
          <Button 
            className="h-auto p-4 flex flex-col items-center space-y-2"
            variant="outline"
            onClick={() => window.open('https://facebook.com/settings?tab=privacy', '_blank')}
          >
            <Star className="h-6 w-6" />
            <span className="text-sm">Facebook Settings</span>
          </Button>
        </div>

        {/* Action Steps Tabs */}
        <Tabs defaultValue="immediate" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="immediate" className="flex items-center space-x-1">
              <AlertCircle className="h-4 w-4" />
              <span>Immediate</span>
            </TabsTrigger>
            <TabsTrigger value="weekly" className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Weekly</span>
            </TabsTrigger>
            <TabsTrigger value="monthly" className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Monthly</span>
            </TabsTrigger>
            <TabsTrigger value="quarterly" className="flex items-center space-x-1">
              <Target className="h-4 w-4" />
              <span>Quarterly</span>
            </TabsTrigger>
          </TabsList>

          {/* Immediate Actions */}
          <TabsContent value="immediate" className="space-y-6">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <span>Immediate Actions (Do Today)</span>
                  </div>
                  <Badge variant="destructive">High Priority</Badge>
                </CardTitle>
                <div className="flex items-center space-x-4">
                  <Progress value={(getCompletedItems('immediate') / getTotalItems('immediate')) * 100} className="flex-1 h-2" />
                  <span className="text-sm font-medium">
                    {getCompletedItems('immediate')}/{getTotalItems('immediate')}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actionSteps.immediate.map((step) => (
                    <div key={step.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id={step.id}
                          checked={checkedItems.has(step.id)}
                          onCheckedChange={() => toggleCheck(step.id)}
                        />
                        <label htmlFor={step.id} className="cursor-pointer flex-1">
                          {step.text}
                        </label>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {step.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Weekly Actions */}
          <TabsContent value="weekly" className="space-y-6">
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-yellow-600" />
                    <span>Weekly Maintenance</span>
                  </div>
                  <Badge variant="secondary">Regular Habit</Badge>
                </CardTitle>
                <div className="flex items-center space-x-4">
                  <Progress value={(getCompletedItems('weekly') / getTotalItems('weekly')) * 100} className="flex-1 h-2" />
                  <span className="text-sm font-medium">
                    {getCompletedItems('weekly')}/{getTotalItems('weekly')}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actionSteps.weekly.map((step) => (
                    <div key={step.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id={step.id}
                          checked={checkedItems.has(step.id)}
                          onCheckedChange={() => toggleCheck(step.id)}
                        />
                        <label htmlFor={step.id} className="cursor-pointer flex-1">
                          {step.text}
                        </label>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {step.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monthly Actions */}
          <TabsContent value="monthly" className="space-y-6">
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Monthly Deep Clean</span>
                  </div>
                  <Badge variant="outline">Comprehensive</Badge>
                </CardTitle>
                <div className="flex items-center space-x-4">
                  <Progress value={(getCompletedItems('monthly') / getTotalItems('monthly')) * 100} className="flex-1 h-2" />
                  <span className="text-sm font-medium">
                    {getCompletedItems('monthly')}/{getTotalItems('monthly')}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actionSteps.monthly.map((step) => (
                    <div key={step.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id={step.id}
                          checked={checkedItems.has(step.id)}
                          onCheckedChange={() => toggleCheck(step.id)}
                        />
                        <label htmlFor={step.id} className="cursor-pointer flex-1">
                          {step.text}
                        </label>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {step.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quarterly Actions */}
          <TabsContent value="quarterly" className="space-y-6">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-green-600" />
                    <span>Quarterly Review</span>
                  </div>
                  <Badge variant="secondary">Strategic</Badge>
                </CardTitle>
                <div className="flex items-center space-x-4">
                  <Progress value={(getCompletedItems('quarterly') / getTotalItems('quarterly')) * 100} className="flex-1 h-2" />
                  <span className="text-sm font-medium">
                    {getCompletedItems('quarterly')}/{getTotalItems('quarterly')}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actionSteps.quarterly.map((step) => (
                    <div key={step.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id={step.id}
                          checked={checkedItems.has(step.id)}
                          onCheckedChange={() => toggleCheck(step.id)}
                        />
                        <label htmlFor={step.id} className="cursor-pointer flex-1">
                          {step.text}
                        </label>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {step.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Habit Building Guide */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Building Digital Privacy Habits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Habit Building Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Start small:</strong> Begin with 5-minute daily actions
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Set reminders:</strong> Use calendar alerts for regular tasks
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Bundle habits:</strong> Combine with existing routines
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Track progress:</strong> Use this checklist regularly
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Stay consistent:</strong> Small actions done regularly beat sporadic efforts
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Suggested Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-2 bg-red-50 dark:bg-red-950 rounded">
                    <strong>Sunday:</strong> Weekly social media cleanup (15 min)
                  </div>
                  <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                    <strong>Wednesday:</strong> Check Google Alerts and app permissions (10 min)
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                    <strong>First of Month:</strong> Monthly comprehensive audit (60 min)
                  </div>
                  <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded">
                    <strong>Start of Quarter:</strong> Strategic review and planning (90 min)
                  </div>
                  <div className="p-2 bg-yellow-50 dark:bg-yellow-950 rounded">
                    <strong>Daily:</strong> Think before posting/sharing (ongoing)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Action Plan */}
        <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-700 dark:text-red-300">
              <AlertCircle className="h-5 w-5" />
              <span>Emergency Action Plan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              If you discover compromised accounts or inappropriate content about you online:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Immediate Steps (First Hour)</h4>
                <ol className="space-y-1 text-sm">
                  <li>1. Change passwords on affected accounts</li>
                  <li>2. Enable 2FA if not already active</li>
                  <li>3. Check for unauthorized access</li>
                  <li>4. Document the issue with screenshots</li>
                  <li>5. Contact platform support if needed</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Follow-up Actions (First Week)</h4>
                <ol className="space-y-1 text-sm">
                  <li>1. Monitor accounts for unusual activity</li>
                  <li>2. Submit content removal requests</li>
                  <li>3. Contact data brokers for removal</li>
                  <li>4. Review and tighten all privacy settings</li>
                  <li>5. Inform trusted contacts if necessary</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Metrics */}
        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Measuring Your Success</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Week 1</div>
                <p className="text-sm">Complete immediate actions and see initial improvements</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Month 1</div>
                <p className="text-sm">Establish routines and notice significant reduction in digital exposure</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Month 3</div>
                <p className="text-sm">Achieve comprehensive digital privacy management</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}