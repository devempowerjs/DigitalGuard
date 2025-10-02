import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

export function Footer() {
  // Learn section ke links
  const learnLinks = [
    { name: 'What is Digital Footprint', href: '/learn/what-is-digital-footprint' },
    { name: 'How It\'s Formed', href: '/learn/how-its-formed' },
    { name: 'Consequences', href: '/learn/consequences' },
    { name: 'Data Storage', href: '/learn/data-storage' },
    { name: 'How to Manage', href: '/manage/how-to-manage' },
    { name: 'Cleanup Guide', href: '/manage/cleanup-guide' },
    { name: 'Social Media Guide', href: '/manage/social-media-guide' },
    { name: 'Action Steps', href: '/manage/action-steps' },
  ];

  // Legal section ke links
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
  ];

  // Main section ke links
  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Tools', href: '/tools' },
    { name: 'Resources', href: '/resources' },
  ];

  // External resources
  const externalResources = [
    { name: 'StopBullying.gov', href: 'https://www.stopbullying.gov/', external: true },
    { name: 'Privacy Rights', href: 'https://privacyrights.org/', external: true },
    { name: 'Common Sense Media', href: 'https://www.commonsensemedia.org/', external: true },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      {/* Google CSR Funding Notice - future ke liye placeholder */}
      {/* <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-center text-sm text-blue-700 dark:text-blue-300">
            🌟 Ye project proudly supported hai Google CSR funding se digital literacy initiatives ke liye
          </p>
        </div>
      </div> */}

      {/* Ad Placeholder - book promotion ke liye */}
      {/* <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
              📚 Featured Partner
            </p>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              "Digital Privacy for Everyone" - New Book Release
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Advanced techniques sikhiye apna digital footprint protect karne ke liye. Available now!
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                DigitalGuard
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Empowering digital literacy and privacy awareness for teens, professionals, and everyone in between.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">External Resources</h4>
              <ul className="space-y-1">
                {externalResources.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learn Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Learn</h3>
            <ul className="space-y-2">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Main</h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2025 DigitalGuard. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-conditions" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  Terms & Conditions
                </a>
                <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Mayank Raj
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}