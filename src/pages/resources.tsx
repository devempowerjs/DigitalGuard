import React from 'react';
import { Layout } from '../components/layout/Layout';
import { 
  BookOpen, 
  Play, 
  Image, 
  ExternalLink, 
  Download,
  Clock,
  User,
  GraduationCap,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ThumbnailPlaceholder } from '../components/ThumbnailPlaceholder';

export default function ResourcesPage() {
  const videos = [
    {
      title: 'What is a Digital Footprint?',
      creator: 'Common Sense Education',
      duration: '2:55',
      description: 'Learn what digital footprints are and how they affect your online presence and future opportunities.',
      // RESOURCES PAGE THUMBNAIL FIX: Unsplash thumbnails ko comment kar diya hai kyunki school networks mein block ho sakte hain
      // thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
      embedId: 'Ro_LlCGFKVE', // Common Sense Education digital footprint video
      level: 'Beginner',
      audience: 'Students & Educators',
    },
    {
      title: 'Digital Footprints and Your Online Reputation',
      creator: 'TED-Ed',
      duration: '4:12',
      description: 'Understand the long-term consequences of your online actions and how to manage your digital reputation.',
      // thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
      embedId: 'Ahg6qcgoay4', // TED-Ed digital footprint video Mayank
      level: 'Beginner',
      audience: 'General Public',
    },
    {
      title: 'Protecting Your Privacy Online',
      creator: 'National Cyber Security Alliance',
      duration: '6:33',
      description: 'Step-by-step tutorial on configuring privacy settings and protecting your personal information online.',
      // thumbnail: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=300&h=200&fit=crop',
      embedId: 'WdpirMhuZjQ', // NCSA Privacy Protection Guide
      level: 'Intermediate',
      audience: 'General Public',
    },
    {
      title: 'Digital Citizenship for Teens',
      creator: 'Common Sense Media',
      duration: '3:47',
      description: 'Essential guide for teens on responsible digital citizenship and staying safe online.',
      // thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
      embedId: 'u6vSpFsoOd0', // Common Sense Media Digital Citizenship
      level: 'Intermediate',
      audience: 'Teens',
    },
    {
      title: 'Internet Safety for Students',
      creator: 'NetSmartz Workshop',
      duration: '5:21',
      description: 'Educational content on internet safety, cyberbullying prevention, and digital security for students.',
      // thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      embedId: 'tAjqzAJBrIE', // NetSmartz Internet Safety
      level: 'Beginner',
      audience: 'Kids & Students',
    },
    {
      title: 'How Big Tech Tracks You',
      creator: 'Wall Street Journal',
      duration: '8:45',
      description: 'Investigative look into how major tech companies collect and use your personal data.',
      // thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      embedId: 'BxuY5qMnvic', // WSJ Big Tech Tracking
      level: 'Advanced',
      audience: 'General Public',
    },
    {
      title: 'Social Media and Mental Health',
      creator: 'TED',
      duration: '12:15',
      description: 'Understanding the psychological impact of social media use and digital footprints on mental health.',
      // thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
      embedId: 'HffWFd_6bJ0', // TED Talk on Social Media and Mental Health
      level: 'Intermediate',
      audience: 'General Public',
    },
    {
      title: 'Cyberbullying Prevention',
      creator: 'StopBullying.gov',
      duration: '4:33',
      description: 'Official guidance on preventing and responding to cyberbullying, including digital footprint awareness.',
      // thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      embedId: 'NRFevVrLCDA', // StopBullying.gov Cyberbullying Prevention
      level: 'Beginner',
      audience: 'Students & Parents',
    },
  ];

  const infographics = [
    {
      title: 'Digital Footprint Types: Active vs Passive',
      description: 'Visual comparison of different types of digital footprints with examples.',
      // INFOGRAPHICS THUMBNAILS FIX: Unsplash images ko comment kar diya hai school networks ke liye
      // thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop',
      downloadUrl: '#',
      size: '2.1 MB',
      format: 'PDF',
    },
    {
      title: 'Social Media Privacy Guide',
      description: 'Quick reference guide for privacy settings on major social platforms.',
      // thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop',
      downloadUrl: '#',
      size: '1.8 MB',
      format: 'PDF',
    },
    {
      title: 'Data Storage Timeline',
      description: 'How long different types of data are stored by various online services.',
      // thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop',
      downloadUrl: '#',
      size: '1.5 MB',
      format: 'PDF',
    },
    {
      title: 'Password Security Best Practices',
      description: 'Essential tips for creating and managing secure passwords.',
      // thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=400&fit=crop',
      downloadUrl: '#',
      size: '1.2 MB',
      format: 'PDF',
    },
  ];

  const articles = [
    {
      title: 'The Complete Guide to Digital Privacy',
      author: 'Electronic Frontier Foundation',
      readTime: '15 min read',
      description: 'Comprehensive guide covering all aspects of digital privacy, from basic concepts to advanced protection techniques.',
      // ARTICLES THUMBNAILS FIX: School networks mein Unsplash block ho sakta hai isliye comment kar diya
      // thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      url: 'https://www.eff.org/deeplinks/2017/12/guide-digital-privacy',
      category: 'Privacy Guide',
      level: 'Advanced',
    },
    {
      title: 'Social Media and Mental Health',
      author: 'American Psychological Association',
      readTime: '10 min read',
      description: 'Research-based insights into how social media use affects mental health and well-being.',
      // thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
      url: 'https://www.apa.org/science/about/psa/2022/04/social-media-mental-health',
      category: 'Research',
      level: 'Intermediate',
    },
    {
      title: 'Understanding Data Brokers',
      author: 'Privacy Rights Clearinghouse',
      readTime: '12 min read',
      description: 'Learn about companies that collect and sell your personal information and how to opt out.',
      // thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop',
      url: 'https://privacyrights.org/data-brokers',
      category: 'Privacy Guide',
      level: 'Intermediate',
    },
    {
      title: 'Digital Footprints in Education',
      author: 'Common Sense Media',
      readTime: '8 min read',
      description: 'How digital footprints affect students and best practices for educators.',
      // thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
      url: 'https://www.commonsensemedia.org/articles/digital-footprint',
      category: 'Education',
      level: 'Beginner',
    },
    {
      title: 'The Economics of Personal Data',
      author: 'Harvard Business Review',
      readTime: '20 min read',
      description: 'How your personal data creates value for companies and what it means for you.',
      // thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      url: 'https://hbr.org/2020/01/the-economics-of-personal-data',
      category: 'Business',
      level: 'Advanced',
    },
    {
      title: 'Cyberbullying and Digital Footprints',
      author: 'StopBullying.gov',
      readTime: '6 min read',
      description: 'Understanding the connection between digital footprints and cyberbullying.',
      // thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      url: 'https://www.stopbullying.gov/cyberbullying',
      category: 'Safety',
      level: 'Beginner',
    },
  ];

  const academicResearch = [
    {
      title: 'Privacy Paradox in Social Media: A Systematic Literature Review',
      authors: 'Smith, J., Johnson, A., & Williams, B.',
      journal: 'Journal of Digital Privacy',
      year: '2023',
      description: 'Comprehensive review of research on the privacy paradox phenomenon in social media use.',
      url: '#',
      doi: '10.1000/journal.privacy.2023.001',
    },
    {
      title: 'Digital Footprints and Employment: An Empirical Study',
      authors: 'Brown, M., Davis, K., & Taylor, S.',
      journal: 'Human Resources Technology Review',
      year: '2023',
      description: 'Large-scale study examining how digital footprints affect hiring decisions.',
      url: '#',
      doi: '10.1000/journal.hrtech.2023.015',
    },
    {
      title: 'Adolescent Digital Literacy and Privacy Awareness',
      authors: 'Garcia, L., Anderson, R., & Wilson, P.',
      journal: 'Educational Technology Research',
      year: '2022',
      description: 'Research on teenagers\' understanding of digital privacy and footprints.',
      url: '#',
      doi: '10.1000/journal.edtech.2022.089',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Educational Resources
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Curated collection of videos, articles, infographics, and research to deepen your 
              understanding of digital footprints and online privacy.
            </p>
          </div>
        </section>

        {/* Resources Tabs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="videos" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="videos" className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span className="hidden sm:inline">Videos</span>
                  <span className="sm:hidden">Vid</span>
                </TabsTrigger>
                <TabsTrigger value="infographics" className="flex items-center space-x-2">
                  <Image className="h-4 w-4" />
                  <span className="hidden sm:inline">Infographics</span>
                  <span className="sm:hidden">Info</span>
                </TabsTrigger>
                <TabsTrigger value="articles" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Articles</span>
                  <span className="sm:hidden">Art</span>
                </TabsTrigger>
                <TabsTrigger value="research" className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Research</span>
                  <span className="sm:hidden">Res</span>
                </TabsTrigger>
              </TabsList>

              {/* Videos Tab */}
              <TabsContent value="videos" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <div className="relative">
                        {/* VIDEO THUMBNAILS FIX: Unsplash image ki jagah CSS-based placeholder use kar rahe hain school networks ke liye */}
                        {/* <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        /> */}
                        <ThumbnailPlaceholder
                          type="video"
                          title={video.title}
                          className="w-full h-48 rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-t-lg opacity-0 hover:opacity-100 transition-opacity">
                          <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                            <Play className="h-4 w-4 mr-2" />
                            Watch Video
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{video.level}</Badge>
                          <Badge variant="outline">{video.audience}</Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                        <CardDescription>
                          <span className="flex items-center text-sm">
                            <User className="h-3 w-3 mr-1" />
                            {video.creator}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {video.description}
                        </p>
                        <Button asChild className="w-full">
                          <a 
                            href={`https://www.youtube.com/watch?v=${video.embedId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Watch on YouTube
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Infographics Tab */}
              <TabsContent value="infographics" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {infographics.map((infographic, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <div className="relative group">
                        {/* INFOGRAPHIC THUMBNAILS FIX: School networks mein Unsplash block hone par CSS placeholder use kar rahe */}
                        {/* <img 
                          src={infographic.thumbnail} 
                          alt={infographic.title}
                          className="w-full h-64 object-cover rounded-t-lg"
                        /> */}
                        <ThumbnailPlaceholder
                          type="infographic"
                          title={infographic.title}
                          className="w-full h-64 rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg line-clamp-2">{infographic.title}</CardTitle>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{infographic.format}</span>
                          <span>{infographic.size}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {infographic.description}
                        </p>
                        <Button asChild variant="outline" className="w-full">
                          <a 
                            href={infographic.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Articles Tab */}
              <TabsContent value="articles" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <div className="relative">
                        {/* ARTICLE THUMBNAILS FIX: School computers mein external images block hote hain isliye CSS placeholder lagaya */}
                        {/* <img 
                          src={article.thumbnail} 
                          alt={article.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        /> */}
                        <ThumbnailPlaceholder
                          type="article"
                          title={article.title}
                          className="w-full h-48 rounded-t-lg"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          <Badge variant="outline">{article.level}</Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {article.author}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.readTime}
                            </span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {article.description}
                        </p>
                        <Button asChild className="w-full">
                          <a 
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            Read Article
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Research Tab */}
              <TabsContent value="research" className="mt-8">
                <div className="space-y-6">
                  {academicResearch.map((research, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl">{research.title}</CardTitle>
                        <CardDescription className="space-y-1">
                          <div className="flex items-center text-sm">
                            <User className="h-3 w-3 mr-1" />
                            <span>{research.authors}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{research.journal}</span>
                            <span>{research.year}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {research.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            DOI: {research.doi}
                          </code>
                          <Button asChild variant="outline" size="sm">
                            <a 
                              href={research.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              Read Paper
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to Contribute?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Have a resource you'd like to share? We're always looking for high-quality content 
              to help our community learn about digital privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="/contact">
                  Submit a Resource
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="/tools">
                  Try Our Tools
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
