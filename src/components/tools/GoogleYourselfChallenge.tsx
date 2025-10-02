'use client';

import React, { useState } from 'react';
import { Search, CheckCircle, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Progress } from '../ui/progress';

interface UserInfo {
  fullName: string;
  location: string;
  school: string;
  employer: string;
}

interface SearchResult {
  type: string;
  query: string;
  url: string;
  description: string;
}

export function GoogleYourselfChallenge() {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: '',
    location: '',
    school: '',
    employer: '',
  });
  const [checkedFindings, setCheckedFindings] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const searchVariations: SearchResult[] = [
    {
      type: 'Exact Name',
      query: `"${userInfo.fullName}"`,
      url: `https://www.google.com/search?q="${encodeURIComponent(userInfo.fullName)}"`,
      description: 'Search for your exact name in quotes',
    },
    {
      type: 'Name + Location',
      query: `"${userInfo.fullName}" ${userInfo.location}`,
      url: `https://www.google.com/search?q="${encodeURIComponent(userInfo.fullName)}"+${encodeURIComponent(userInfo.location)}`,
      description: 'Search with your location',
    },
    {
      type: 'Name + School',
      query: `"${userInfo.fullName}" ${userInfo.school}`,
      url: `https://www.google.com/search?q="${encodeURIComponent(userInfo.fullName)}"+${encodeURIComponent(userInfo.school)}`,
      description: 'Search with your school or university',
    },
    {
      type: 'Name + Employer',
      query: `"${userInfo.fullName}" ${userInfo.employer}`,
      url: `https://www.google.com/search?q="${encodeURIComponent(userInfo.fullName)}"+${encodeURIComponent(userInfo.employer)}`,
      description: 'Search with your workplace',
    },
    {
      type: 'Image Search',
      query: `"${userInfo.fullName}"`,
      url: `https://www.google.com/search?tbm=isch&q="${encodeURIComponent(userInfo.fullName)}"`,
      description: 'Search for images of yourself',
    },
  ];

  const assessmentItems = [
    'Social media profiles (Facebook, Instagram, Twitter, LinkedIn)',
    'Photos of yourself',
    'News articles or mentions',
    'School or work-related content',
    'Address or phone number',
    'Family members\' information',
    'Old usernames or handles',
    'Forum posts or comments',
    'Dating profiles',
    'Professional achievements or awards',
    'Personal blog or website',
    'Court records or legal documents',
  ];

  const handleUserInfoChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleFindingToggle = (item: string) => {
    setCheckedFindings(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const calculateRiskLevel = () => {
    const highRiskItems = [
      'Address or phone number',
      'Family members\' information',
      'Court records or legal documents',
      'Dating profiles',
    ];
    
    const highRiskCount = checkedFindings.filter(item => 
      highRiskItems.includes(item)
    ).length;
    
    const totalFindings = checkedFindings.length;
    
    if (highRiskCount > 0 || totalFindings > 8) return 'High';
    if (totalFindings > 4) return 'Medium';
    return 'Low';
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getRecommendations = () => {
    const riskLevel = calculateRiskLevel();
    const recommendations = {
      High: [
        'Immediately review and update privacy settings on all social media accounts',
        'Consider removing or making private any posts containing personal information',
        'Contact websites to request removal of sensitive information',
        'Set up Google Alerts for your name to monitor future mentions',
      ],
      Medium: [
        'Review your social media privacy settings',
        'Be more selective about what you share publicly',
        'Consider using privacy-focused search engines',
        'Regularly monitor your online presence',
      ],
      Low: [
        'Maintain current privacy practices',
        'Continue to be mindful of what you share online',
        'Regularly check your digital footprint',
        'Stay informed about privacy best practices',
      ],
    };
    return recommendations[riskLevel as keyof typeof recommendations] || [];
  };

  React.useEffect(() => {
    setProgress((step - 1) * 33.33);
  }, [step]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2 mb-4">
          <Search className="h-6 w-6 text-blue-600" />
          <CardTitle className="text-2xl">Google Yourself Challenge</CardTitle>
        </div>
        <CardDescription>
          Discover what information about you is publicly available online through a systematic search process.
        </CardDescription>
        <Progress value={progress} className="mt-4" />
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Step 1: Enter Your Information</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Provide some basic information to generate personalized search queries. This information stays private in your browser.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={userInfo.fullName}
                  onChange={(e) => handleUserInfoChange('fullName', e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={userInfo.location}
                  onChange={(e) => handleUserInfoChange('location', e.target.value)}
                  placeholder="New York, NY"
                />
              </div>
              <div>
                <Label htmlFor="school">School/University</Label>
                <Input
                  id="school"
                  value={userInfo.school}
                  onChange={(e) => handleUserInfoChange('school', e.target.value)}
                  placeholder="Harvard University"
                />
              </div>
              <div>
                <Label htmlFor="employer">Current Employer</Label>
                <Input
                  id="employer"
                  value={userInfo.employer}
                  onChange={(e) => handleUserInfoChange('employer', e.target.value)}
                  placeholder="Google Inc."
                />
              </div>
            </div>

            <Button 
              onClick={() => setStep(2)} 
              disabled={!userInfo.fullName}
              className="w-full sm:w-auto"
            >
              Continue to Search Variations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Step 2: Search Variations */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Step 2: Search Variations</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Click on each search link below to search for yourself on Google. Open each link in a new tab and note what you find.
            </p>

            <div className="space-y-4">
              {searchVariations.map((search, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium">{search.type}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{search.description}</p>
                    <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1 block">
                      {search.query}
                    </code>
                  </div>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    disabled={!userInfo.fullName}
                  >
                    <a 
                      href={search.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Search
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={() => setStep(3)}>
                Continue to Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Assessment */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Step 3: Assessment</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Based on your searches, check all the types of information you found about yourself online.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {assessmentItems.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox
                    id={item}
                    checked={checkedFindings.includes(item)}
                    onCheckedChange={() => handleFindingToggle(item)}
                  />
                  <Label htmlFor={item} className="text-sm cursor-pointer">
                    {item}
                  </Label>
                </div>
              ))}
            </div>

            {checkedFindings.length > 0 && (
              <div className="mt-8 p-6 border rounded-lg bg-gray-50 dark:bg-gray-800">
                <h4 className="font-semibold mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Your Digital Footprint Assessment
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <span className="font-medium">Risk Level: </span>
                    <span className={`font-semibold ${getRiskColor(calculateRiskLevel())}`}>
                      {calculateRiskLevel()}
                    </span>
                  </div>
                  
                  <div>
                    <span className="font-medium">Findings: </span>
                    <span>{checkedFindings.length} out of {assessmentItems.length} items found</span>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Recommendations:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {getRecommendations().map((rec, index) => (
                        <li key={index}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={() => setStep(1)} variant="outline">
                Start Over
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}