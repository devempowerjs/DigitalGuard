'use client';

import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'basic' | 'intermediate' | 'advanced';
}

interface QuizResult {
  score: number;
  percentage: number;
  level: string;
  recommendations: string[];
}

export function DigitalFootprintQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is a digital footprint?",
      options: [
        "Only the photos you post on social media",
        "The trail of data you leave behind when using the internet",
        "Your username on different websites",
        "Only the websites you visit"
      ],
      correctAnswer: 1,
      explanation: "A digital footprint is the trail of data you create while using the internet, including websites visited, emails sent, and information submitted online.",
      category: 'basic'
    },
    {
      id: 2,
      question: "Which type of digital footprint is created without your direct knowledge?",
      options: [
        "Active digital footprint",
        "Passive digital footprint",
        "Social digital footprint",
        "Professional digital footprint"
      ],
      correctAnswer: 1,
      explanation: "A passive digital footprint is created without your knowledge, such as when websites collect data about your browsing habits through cookies and tracking.",
      category: 'basic'
    },
    {
      id: 3,
      question: "What percentage of employers check candidates' social media profiles?",
      options: [
        "About 30%",
        "About 50%",
        "About 70%",
        "About 90%"
      ],
      correctAnswer: 2,
      explanation: "Research shows that approximately 70% of employers check job candidates' social media profiles as part of their screening process.",
      category: 'intermediate'
    },
    {
      id: 4,
      question: "How long can digital information potentially last online?",
      options: [
        "1-2 years",
        "5-10 years",
        "20-30 years",
        "Forever"
      ],
      correctAnswer: 3,
      explanation: "Digital information can potentially last forever due to backups, archives, and the way data is stored and replicated across the internet.",
      category: 'intermediate'
    },
    {
      id: 5,
      question: "Which of the following is NOT recommended for managing your digital footprint?",
      options: [
        "Regularly reviewing privacy settings",
        "Using the same password for all accounts",
        "Being selective about what you share",
        "Monitoring your online presence"
      ],
      correctAnswer: 1,
      explanation: "Using the same password for all accounts is a security risk. Each account should have a unique, strong password.",
      category: 'intermediate'
    },
    {
      id: 6,
      question: "What is 'data mining' in the context of digital footprints?",
      options: [
        "Deleting old data from your devices",
        "Creating backup copies of your data",
        "Analyzing large amounts of data to find patterns",
        "Encrypting your personal information"
      ],
      correctAnswer: 2,
      explanation: "Data mining involves analyzing large datasets to discover patterns, relationships, and insights about users' behaviors and preferences.",
      category: 'advanced'
    },
    {
      id: 7,
      question: "Which privacy setting provides the most protection on social media?",
      options: [
        "Public profile with private posts",
        "Private profile with public posts",
        "Private profile with private posts",
        "Public profile with no posts"
      ],
      correctAnswer: 2,
      explanation: "A private profile with private posts provides the most comprehensive protection by limiting who can see your profile and content.",
      category: 'intermediate'
    },
    {
      id: 8,
      question: "What is the 'right to be forgotten'?",
      options: [
        "The ability to delete your social media accounts",
        "A legal right to have personal data removed from search results",
        "The option to make your profile private",
        "A feature to hide your online activity"
      ],
      correctAnswer: 1,
      explanation: "The 'right to be forgotten' is a legal concept that allows individuals to request removal of personal data from search engine results under certain circumstances.",
      category: 'advanced'
    },
    {
      id: 9,
      question: "Which tool can help you monitor mentions of your name online?",
      options: [
        "Password manager",
        "VPN service",
        "Google Alerts",
        "Antivirus software"
      ],
      correctAnswer: 2,
      explanation: "Google Alerts can notify you whenever your name or other specified terms appear in new web content, helping you monitor your online presence.",
      category: 'intermediate'
    },
    {
      id: 10,
      question: "What should you do before posting something online?",
      options: [
        "Check if it's grammatically correct",
        "Consider if you'd be comfortable with anyone seeing it",
        "Make sure it gets lots of likes",
        "Post it on multiple platforms"
      ],
      correctAnswer: 1,
      explanation: "Before posting anything online, consider whether you'd be comfortable with anyone (including future employers, family, etc.) seeing that content.",
      category: 'basic'
    }
  ];

  const calculateResult = (): QuizResult => {
    const correctAnswers = selectedAnswers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    let level = 'Beginner';
    let recommendations = [
      'Start with our "What is Digital Footprint" guide',
      'Review basic privacy settings on your social media accounts',
      'Take the Google Yourself Challenge to see your current online presence'
    ];

    if (percentage >= 80) {
      level = 'Expert';
      recommendations = [
        'Consider helping others learn about digital privacy',
        'Stay updated with the latest privacy laws and regulations',
        'Explore advanced privacy tools and techniques'
      ];
    } else if (percentage >= 60) {
      level = 'Intermediate';
      recommendations = [
        'Learn about advanced privacy settings and tools',
        'Read about data protection laws in your region',
        'Try our Social Media Privacy Checkup tool'
      ];
    } else if (percentage >= 40) {
      level = 'Developing';
      recommendations = [
        'Review our comprehensive Digital Footprint guides',
        'Practice using privacy tools and settings',
        'Learn about the consequences of digital footprints'
      ];
    }

    return {
      score: correctAnswers,
      percentage,
      level,
      recommendations
    };
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
    setShowExplanation(false);
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];

  if (isCompleted) {
    const result = calculateResult();
    
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
          <CardDescription>
            Here's how you performed on the Digital Footprint Knowledge Quiz
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {result.score}/{questions.length}
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {result.percentage}% Correct
            </div>
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="font-semibold text-blue-700 dark:text-blue-300">
                Knowledge Level: {result.level}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Recommended Next Steps:</h4>
            <ul className="space-y-2">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                  <span className="text-sm">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Your Answers Review:</h4>
            <div className="max-h-60 overflow-y-auto space-y-2">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className="p-3 border rounded-lg">
                    <div className="flex items-start space-x-2">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-sm">{question.question}</p>
                        <p className={`text-xs mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          Your answer: {question.options[userAnswer]}
                        </p>
                        {!isCorrect && (
                          <p className="text-xs text-green-600 mt-1">
                            Correct: {question.options[question.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Button onClick={handleRestart} className="w-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Take Quiz Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="h-6 w-6 text-blue-600" />
          <CardTitle className="text-2xl">Digital Footprint Knowledge Quiz</CardTitle>
        </div>
        <CardDescription>
          Test your knowledge about digital footprints and online privacy
        </CardDescription>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs rounded-full ${
              currentQ.category === 'basic' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
              currentQ.category === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
              'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
            }`}>
              {currentQ.category.charAt(0).toUpperCase() + currentQ.category.slice(1)}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold">{currentQ.question}</h3>
          
          <RadioGroup 
            value={selectedAnswer?.toString()} 
            onValueChange={(value) => handleAnswerSelect(parseInt(value))}
          >
            {currentQ.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {selectedAnswer !== undefined && (
          <div className="space-y-3">
            <Button 
              onClick={toggleExplanation} 
              variant="outline" 
              size="sm"
              className="w-full"
            >
              {showExplanation ? 'Hide' : 'Show'} Explanation
            </Button>
            
            {showExplanation && (
              <div className={`p-4 rounded-lg border ${
                selectedAnswer === currentQ.correctAnswer 
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              }`}>
                <div className="flex items-start space-x-2">
                  {selectedAnswer === currentQ.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  )}
                  <div>
                    <p className={`font-medium ${
                      selectedAnswer === currentQ.correctAnswer 
                        ? 'text-green-800 dark:text-green-200' 
                        : 'text-red-800 dark:text-red-200'
                    }`}>
                      {selectedAnswer === currentQ.correctAnswer ? 'Correct!' : 'Incorrect'}
                    </p>
                    <p className={`text-sm mt-1 ${
                      selectedAnswer === currentQ.correctAnswer 
                        ? 'text-green-700 dark:text-green-300' 
                        : 'text-red-700 dark:text-red-300'
                    }`}>
                      {currentQ.explanation}
                    </p>
                    {selectedAnswer !== currentQ.correctAnswer && (
                      <p className="text-sm mt-2 font-medium text-green-700 dark:text-green-300">
                        Correct answer: {currentQ.options[currentQ.correctAnswer]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between">
          <Button 
            onClick={handlePrevious} 
            disabled={currentQuestion === 0}
            variant="outline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          <Button 
            onClick={handleNext} 
            disabled={selectedAnswer === undefined}
          >
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}