import React from "react";
import { Shield, Play, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main content section */}
          <div className="text-center lg:text-left">
            {/* Animated logo with pulse effect */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative">
                <Shield className="h-16 w-16 text-blue-600 animate-pulse" />
                <div className="absolute inset-0 h-16 w-16 text-blue-400 animate-ping opacity-75">
                  <Shield className="h-16 w-16" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Take Control of Your{" "}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Footprint
              </span>
            </h1>

            <p className="text-lg text-blue-600 dark:text-blue-400 mb-2 font-medium">
              Your digital life, protected & future-ready.
            </p>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Learn how your online activities create lasting
              digital traces and discover practical tools to
              protect your privacy, reputation, and future
              opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <a href="/learn/what-is-digital-footprint">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="/tools">
                  <Play className="mr-2 h-5 w-5" />
                  Try Our Tools
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">
                  70%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Employers check social media
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">
                  50K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Active users protected
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">
                  1M+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Digital risks detected
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* HERO IMAGE FIX: Commented out Unsplash source kyunki kuch schools me ye network band hota h for  safety idk why */}
              {/* Original Unsplash image: https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJpdmFjeSUyMHNlY3VyaXR5JTIwc2hpZWxkfGVufDF8fHx8MTc1ODg4MDcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral */}
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJpdmFjeSUyMHNlY3VyaXR5JTIwc2hpZWxkfGVufDF8fHx8MTc1ODg4MDcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital privacy and security concept"
                className="w-full h-auto rounded-2xl shadow-2xl"
                width={600}
                height={400}
              /> */}

              {/* NEW: CSS-based placeholder that works on all networks */}
              <div className="w-full aspect-[3/2] rounded-2xl shadow-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
                <div className="relative z-10 text-center text-white p-8">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    <path d="M12 7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V9c0-1.1-.9-2-2-2z" />
                  </svg>
                  <h3 className="text-xl font-semibold opacity-90">
                    Digital Privacy & Security
                  </h3>
                  <p className="text-sm opacity-75 mt-2">
                    Protecting Your Digital Footprint
                  </p>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full opacity-10 animate-pulse"></div>
      </div>
    </section>
  );
}
