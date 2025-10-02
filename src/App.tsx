import React, { useState, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { SEO } from './components/SEO';
import { HeroSection } from './components/home/HeroSection';
import { FeaturesSection } from './components/home/FeaturesSection';
import { Button } from './components/ui/button';
import { Analytics } from "@vercel/analytics/react";

// Sare pages ka import kar rahe hain
import ToolsPage from './pages/tools';
import ResourcesPage from './pages/resources';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import PrivacyPolicyPage from './pages/privacy-policy';
import TermsConditionsPage from './pages/terms-conditions';

// Learn section ke pages
import WhatIsDigitalFootprintPage from './pages/learn/what-is-digital-footprint';
import HowItsFormedPage from './pages/learn/how-its-formed';
import ConsequencesPage from './pages/learn/consequences';
import DataStoragePage from './pages/learn/data-storage';

// Manage section ke pages
import HowToManagePage from './pages/manage/how-to-manage';
import CleanupGuidePage from './pages/manage/cleanup-guide';
import SocialMediaGuidePage from './pages/manage/social-media-guide';
import ActionStepsPage from './pages/manage/action-steps';

// Simple router component banaya hai
function Router() {
  const [currentPath, setCurrentPath] = useState(() => {
    // Initial path ko properly detect karte hain
    const path = window.location.pathname;
    return path === '' || path === '/' ? '/' : path;
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path === '' || path === '/' ? '/' : path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Link components ko override kar rahe hain SPA routing ke liye
  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href && target.href.startsWith(window.location.origin)) {
        const url = new URL(target.href);
        const newPath = url.pathname === '' || url.pathname === '/' ? '/' : url.pathname;
        if (newPath !== currentPath && !target.hasAttribute('target')) {
          e.preventDefault();
          setCurrentPath(newPath);
          window.history.pushState({}, '', newPath);
          // Navigation pe smoothly top par scroll karte hain
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [currentPath]);

  // Path change hone par top par scroll ensure karte hain
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  // Route components ka switch case
  switch (currentPath) {
    case '/tools':
      return (
        <>
          <SEO 
            title="Digital Privacy Tools - DigitalGuard"
            description="Interactive tools to assess, understand, and improve your digital privacy. Google Yourself Challenge, Privacy Checkup, Password Checker, and more."
            keywords="digital privacy tools, password checker, privacy checkup, google yourself, digital footprint assessment"
          />
          <ToolsPage />
        </>
      );
    case '/resources':
      return (
        <>
          <SEO 
            title="Educational Resources - DigitalGuard"
            description="Curated collection of videos, articles, infographics, and research about digital footprints and online privacy."
            keywords="digital privacy resources, educational videos, privacy articles, digital footprint research"
          />
          <ResourcesPage />
        </>
      );
    case '/learn/what-is-digital-footprint':
      return (
        <>
          <SEO 
            title="What is a Digital Footprint? - DigitalGuard"
            description="Learn about digital footprints, how they're created, and why they matter for your privacy, career, and personal life."
            keywords="what is digital footprint, digital trace, online privacy, internet safety"
          />
          <WhatIsDigitalFootprintPage />
        </>
      );
    case '/learn/how-its-formed':
      return (
        <>
          <SEO 
            title="How Digital Footprints Are Formed - DigitalGuard"
            description="Learn about the various ways your digital footprint is created through active and passive data collection across different platforms and devices."
            keywords="digital footprint formation, data collection, online tracking, passive digital footprint, active digital footprint"
          />
          <HowItsFormedPage />
        </>
      );
    case '/learn/consequences':
      return (
        <>
          <SEO 
            title="Consequences of Digital Footprints - DigitalGuard"
            description="Understand the real-world impact of your digital presence on career, relationships, finances, and personal security."
            keywords="digital footprint consequences, online reputation, career impact, privacy risks, digital consequences"
          />
          <ConsequencesPage />
        </>
      );
    case '/learn/data-storage':
      return (
        <>
          <SEO 
            title="Data Storage & Retention - DigitalGuard"
            description="Discover where your digital data is stored, how long it's retained, and who has access to your personal information."
            keywords="data storage, data retention, data centers, privacy laws, data brokers, information storage"
          />
          <DataStoragePage />
        </>
      );
    case '/manage/how-to-manage':
      return (
        <>
          <SEO 
            title="How to Manage Your Digital Footprint - DigitalGuard"
            description="Strategic approaches and best practices for taking control of your online presence and managing your digital privacy."
            keywords="digital footprint management, privacy settings, online privacy, digital privacy strategy"
          />
          <HowToManagePage />
        </>
      );
    case '/manage/cleanup-guide':
      return (
        <>
          <SEO 
            title="Digital Cleanup Guide - DigitalGuard"
            description="Step-by-step guide to clean up and minimize your digital footprint with actionable checklists and timelines."
            keywords="digital cleanup, privacy cleanup, account deletion, data removal, digital footprint reduction"
          />
          <CleanupGuidePage />
        </>
      );
    case '/manage/social-media-guide':
      return (
        <>
          <SEO 
            title="Social Media Privacy Guide - DigitalGuard"
            description="Platform-specific privacy settings and best practices for Facebook, Instagram, Twitter, LinkedIn, and TikTok."
            keywords="social media privacy, Facebook privacy settings, Instagram privacy, Twitter privacy, LinkedIn privacy, TikTok privacy"
          />
          <SocialMediaGuidePage />
        </>
      );
    case '/manage/action-steps':
      return (
        <>
          <SEO 
            title="Action Steps & Implementation - DigitalGuard"
            description="Your comprehensive action plan for digital footprint management with immediate, weekly, monthly, and quarterly tasks."
            keywords="digital privacy action plan, privacy implementation, digital footprint checklist, privacy habits"
          />
          <ActionStepsPage />
        </>
      );
    case '/about':
      return (
        <>
          <SEO 
            title="About DigitalGuard - Student-Led Digital Privacy Initiative"
            description="Learn about DigitalGuard's mission to educate people about digital footprints. Created by student developer Mayank Raj to make digital privacy accessible to everyone."
            keywords="about digitalguard, mayank raj, student developer, digital privacy education, digital footprint awareness, privacy advocate"
          />
          <AboutPage />
        </>
      );
    case '/contact':
      return (
        <>
          <SEO 
            title="Contact Us - DigitalGuard"
            description="Get in touch with DigitalGuard for questions, resource submissions, or collaboration. Contact student developer Mayank Raj directly."
            keywords="contact digitalguard, mayank raj contact, digital privacy help, resource submission, privacy questions"
          />
          <ContactPage />
        </>
      );
    case '/privacy-policy':
      return (
        <>
          <SEO 
            title="Privacy Policy - DigitalGuard"
            description="Learn how DigitalGuard protects your privacy. Our commitment to data protection and transparent privacy practices."
            keywords="digitalguard privacy policy, data protection, privacy practices, user privacy"
          />
          <PrivacyPolicyPage />
        </>
      );
    case '/terms-conditions':
      return (
        <>
          <SEO 
            title="Terms & Conditions - DigitalGuard"
            description="Terms and conditions for using DigitalGuard educational platform. Created by student developer for digital privacy education."
            keywords="digitalguard terms conditions, terms of service, educational platform terms, privacy education"
          />
          <TermsConditionsPage />
        </>
      );
    case '/':
      // Home page ka dedicated case
      return (
        <>
          <SEO />
          <Layout>
            <HeroSection />
            <FeaturesSection />
          </Layout>
        </>
      );
    default:
      // Unknown routes ke liye 404 handle karte hain
      return (
        <>
          <SEO 
            title="Page Not Found - DigitalGuard"
            description="The page you're looking for doesn't exist. Return to DigitalGuard homepage for digital privacy education."
            keywords="digitalguard 404, page not found, digital privacy education"
          />
          <Layout>
            <div className="min-h-screen flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="mb-8">
                  <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Page Not Found
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    The page you're looking for doesn't exist. It might have been moved or deleted.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <a href="/">Return Home</a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="/learn/what-is-digital-footprint">Start Learning</a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="/tools">Try Our Tools</a>
                  </Button>
                </div>
              </div>
            </div>
          </Layout>
        </>
      );
  }
}

export default function App() {
  return <Router />;
}
