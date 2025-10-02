import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Mail, Github, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { AdPlaceholder } from '../components/AdPlaceholder';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:mayankrajpis2013@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <MessageSquare className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions, suggestions, or want to contribute? We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AdPlaceholder 
              title="Digital Privacy Books"
              description="Recommended reading for digital literacy"
              className="mb-4"
            />
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    I'm Mayank Raj, a school student passionate about digital privacy and helping others 
                    understand their digital footprints. Feel free to reach out for any questions, 
                    resource submissions, or collaboration ideas.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-blue-600">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg">
                        <Mail className="h-5 w-5 mr-3 text-blue-600" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">
                        mayankrajpis2013@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Best for detailed inquiries and resource submissions
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-600">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg">
                        <Github className="h-5 w-5 mr-3 text-purple-600" />
                        GitHub
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">
                        github.com/devempowerjs
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Check out my projects and contribute to DigitalGuard
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* What I Help With */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    What I Can Help With
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Digital Privacy Questions</Badge>
                    <Badge variant="secondary">Resource Submissions</Badge>
                    <Badge variant="secondary">Tool Feedback</Badge>
                    <Badge variant="secondary">Educational Content</Badge>
                    <Badge variant="secondary">Student Collaboration</Badge>
                    <Badge variant="secondary">Technical Support</Badge>
                  </div>
                </div>

                {/* Add Resource Section */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    📤 Add Resource
                  </h4>
                  <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                    Found a great video, article, or tool about digital privacy? I'd love to include it! 
                    Email me with:
                  </p>
                  <ul className="text-green-800 dark:text-green-200 text-sm space-y-1 ml-4">
                    <li>• Resource URL and description</li>
                    <li>• Why you think it's valuable</li>
                    <li>• Target audience (kids, teens, adults)</li>
                  </ul>
                </div>

                {/* Response Time */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    📚 Student Schedule
                  </h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    As a school student, I typically respond to emails within 24-48 hours. 
                    During exam periods, responses might take a bit longer.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What is this about?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell me more about your question or suggestion..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>

                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        This form will open your email client with the message pre-filled.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AdPlaceholder 
              title="Cybersecurity Tools"
              description="Essential tools for digital privacy protection"
              className="mb-4"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I submit educational resources?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Absolutely! I'm always looking for high-quality videos, articles, and 
                    infographics about digital privacy. Email me with your suggestions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is this website safe for students?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes! DigitalGuard is designed with student safety in mind. All content 
                    is educational and age-appropriate.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I use DigitalGuard for my school project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Of course! Feel free to reference DigitalGuard in your projects. 
                    I can also provide additional resources if needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How can I contribute to the project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Check out the GitHub repository for code contributions, or email me 
                    with content suggestions and feedback.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Ad Space */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AdPlaceholder 
              title="Online Safety Courses"
              description="Comprehensive digital citizenship education"
              className="mb-4"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}