'use client';

import React, { useState, useMemo } from 'react';
import { Eye, EyeOff, Shield, Check, X, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';

interface PasswordCriteria {
  label: string;
  test: (password: string) => boolean;
  weight: number;
}

export function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const criteria: PasswordCriteria[] = [
    {
      label: 'At least 8 characters long',
      test: (pwd) => pwd.length >= 8,
      weight: 20,
    },
    {
      label: 'Contains uppercase letters (A-Z)',
      test: (pwd) => /[A-Z]/.test(pwd),
      weight: 15,
    },
    {
      label: 'Contains lowercase letters (a-z)',
      test: (pwd) => /[a-z]/.test(pwd),
      weight: 15,
    },
    {
      label: 'Contains numbers (0-9)',
      test: (pwd) => /[0-9]/.test(pwd),
      weight: 15,
    },
    {
      label: 'Contains special characters (!@#$%^&*)',
      test: (pwd) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd),
      weight: 20,
    },
    {
      label: 'At least 12 characters (recommended)',
      test: (pwd) => pwd.length >= 12,
      weight: 10,
    },
    {
      label: 'No common words or patterns',
      test: (pwd) => {
        const commonWords = ['password', '123456', 'qwerty', 'admin', 'login'];
        const lowerPwd = pwd.toLowerCase();
        return !commonWords.some(word => lowerPwd.includes(word)) && 
               !/(.)\1{2,}/.test(pwd); // No repeated characters
      },
      weight: 5,
    },
  ];

  const passwordAnalysis = useMemo(() => {
    const passedCriteria = criteria.filter(criterion => criterion.test(password));
    const totalScore = passedCriteria.reduce((sum, criterion) => sum + criterion.weight, 0);
    
    let strength = 'Very Weak';
    let color = 'text-red-600';
    let bgColor = 'bg-red-600';
    
    if (totalScore >= 80) {
      strength = 'Very Strong';
      color = 'text-green-600';
      bgColor = 'bg-green-600';
    } else if (totalScore >= 60) {
      strength = 'Strong';
      color = 'text-blue-600';
      bgColor = 'bg-blue-600';
    } else if (totalScore >= 40) {
      strength = 'Medium';
      color = 'text-yellow-600';
      bgColor = 'bg-yellow-600';
    } else if (totalScore >= 20) {
      strength = 'Weak';
      color = 'text-orange-600';
      bgColor = 'bg-orange-600';
    }

    return {
      score: totalScore,
      strength,
      color,
      bgColor,
      passedCriteria: passedCriteria.length,
      totalCriteria: criteria.length,
    };
  }, [password]);

  const securityTips = [
    'Use a unique password for each account',
    'Consider using a password manager',
    'Enable two-factor authentication when available',
    'Avoid using personal information in passwords',
    'Update passwords regularly, especially for sensitive accounts',
    'Never share passwords or write them down in plain text',
  ];

  const generateStrongPassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const allChars = uppercase + lowercase + numbers + symbols;
    let result = '';
    
    // Ensure at least one character from each category
    result += uppercase[Math.floor(Math.random() * uppercase.length)];
    result += lowercase[Math.floor(Math.random() * lowercase.length)];
    result += numbers[Math.floor(Math.random() * numbers.length)];
    result += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Fill the rest randomly
    for (let i = 4; i < 16; i++) {
      result += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the result
    return result.split('').sort(() => 0.5 - Math.random()).join('');
  };

  const handleGeneratePassword = () => {
    setPassword(generateStrongPassword());
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-6 w-6 text-blue-600" />
          <CardTitle className="text-2xl">Password Strength Checker</CardTitle>
        </div>
        <CardDescription>
          Test your password strength and get recommendations for improvement.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Password Input */}
        <div className="space-y-2">
          <Label htmlFor="password">Enter Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password here..."
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Generate Password Button */}
        <Button onClick={handleGeneratePassword} variant="outline" className="w-full">
          Generate Strong Password
        </Button>

        {password && (
          <>
            {/* Strength Indicator */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Password Strength:</span>
                <span className={`font-semibold ${passwordAnalysis.color}`}>
                  {passwordAnalysis.strength}
                </span>
              </div>
              
              <Progress 
                value={passwordAnalysis.score} 
                className="h-3"
                style={{
                  '--progress-foreground': passwordAnalysis.bgColor.replace('bg-', ''),
                } as React.CSSProperties}
              />
              
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Score: {passwordAnalysis.score}/100 ({passwordAnalysis.passedCriteria}/{passwordAnalysis.totalCriteria} criteria met)
              </div>
            </div>

            {/* Criteria Checklist */}
            <div className="space-y-3">
              <h4 className="font-medium">Security Criteria</h4>
              <div className="space-y-2">
                {criteria.map((criterion, index) => {
                  const passed = criterion.test(password);
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      {passed ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-600" />
                      )}
                      <span className={`text-sm ${passed ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                        {criterion.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({criterion.weight} pts)
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Security Assessment */}
            {passwordAnalysis.score < 60 && (
              <div className="p-4 border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-yellow-800 dark:text-yellow-200">
                      Password Security Warning
                    </h5>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Your password could be stronger. Consider adding more complexity to better protect your accounts.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Security Tips */}
        <div className="space-y-3">
          <h4 className="font-medium">Password Security Tips</h4>
          <ul className="space-y-2">
            {securityTips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-600 dark:text-gray-400">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Information */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Privacy Note:</strong> Your password is analyzed locally in your browser and is never sent to our servers or stored anywhere.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}