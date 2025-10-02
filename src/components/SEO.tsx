import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = 'DigitalGuard - Digital Footprint Awareness & Privacy Protection',
  description = 'Learn about digital footprints, protect your online privacy, and take control of your digital presence with our comprehensive tools and resources.',
  keywords = 'digital footprint, digital guard, digitalguard, digital footprint awareness, online privacy, internet safety, cyberbullying prevention, digital citizenship, privacy protection, online reputation management, social media privacy, data protection, digital literacy, cyber safety, teen internet safety, kids online safety, digital security, privacy education, cybersecurity awareness, digital wellness, online safety education, internet privacy guide, digital privacy tools, social media safety, password security, digital identity protection, online privacy settings, privacy management, cyber awareness, digital safety tips, internet safety for students, online safety for children, digital footprint management, social media privacy settings, digital hygiene, online privacy for teens, internet safety tips, cyberbullying awareness, digital citizenship education, privacy rights education, data security awareness, online safety tools, digital privacy guide, internet safety resources, cyber safety education, digital reputation management, online identity protection, privacy protection guide, digital footprint consequences, social media education, internet safety for parents, digital privacy awareness, cybersecurity for teens, online privacy protection, digital safety education, privacy education resources, internet privacy protection, digital footprint cleanup, online safety awareness, cyber safety tips, digital privacy rights, internet safety guide, privacy awareness education, digital security education, online privacy tools, cybersecurity education, digital wellness education, internet safety for families, privacy security education, digital footprint tracking, online privacy education, cyber awareness education, digital safety tools, internet safety awareness, online safety guide, digital privacy for kids, cyberbullying education, internet safety curriculum, digital citizenship curriculum, online safety curriculum, privacy education curriculum, cybersecurity curriculum, digital literacy curriculum, internet safety program, digital citizenship program, online safety program, privacy education program, cybersecurity program, digital literacy program, student internet safety, teen digital safety, child online protection, kids cyber safety, adolescent digital literacy, youth privacy education, student cybersecurity, teen online protection, child digital citizenship, kids internet literacy, student digital wellness, teen cyber awareness, child online safety, youth digital security, student privacy protection, teen internet literacy, child cyber awareness, kids digital education, student online safety, teen digital education, child privacy education, youth cybersecurity, student cyber safety, teen digital literacy, child internet education, kids online protection, student digital citizenship, teen privacy awareness, child cyber education, youth internet safety, student cyberbullying prevention, teen digital protection, child online literacy, kids cyber education, student internet protection, teen online education, child digital safety, youth privacy protection, social media risks, online predators, identity theft prevention, phishing awareness, malware protection, secure passwords, two factor authentication, vpn education, tor browser, encrypted messaging, secure browsing, privacy browsers, data breaches, personal information protection, location privacy, photo metadata, digital surveillance, government surveillance, corporate data collection, data brokers, tracking pixels, third party cookies, fingerprinting, device tracking, behavioral profiling, targeted advertising, data mining, artificial intelligence privacy, facial recognition, biometric data, smart device privacy, iot security, cloud storage privacy, email privacy, messaging app security, video call privacy, online banking security, ecommerce safety, dating app safety, gaming privacy, educational technology privacy, workplace privacy, healthcare data privacy, financial privacy, legal privacy, digital rights, data ownership, consent management, privacy policies, terms of service, gdpr compliance, ccpa compliance, privacy laws, data protection laws, consumer privacy rights, student data privacy, ferpa compliance, coppa compliance, children privacy protection, teen privacy rights, digital divide, technology addiction, screen time management, digital detox, mindful technology use, healthy digital habits, digital minimalism, tech life balance, online harassment, hate speech, trolling, doxxing, revenge porn, sextortion, catfishing, grooming, radical content, misinformation, disinformation, fake news, echo chambers, filter bubbles, polarization, extremism, conspiracy theories, fact checking, media literacy, critical thinking, source verification, news literacy, information literacy, digital forensics, incident response, privacy breach response, data recovery, account security, password managers, security questions, backup codes, recovery keys, device encryption, secure messaging apps, privacy tools, anonymity tools, anti tracking tools, ad blockers, privacy extensions, secure email, encrypted storage, secure file sharing, digital estate planning, online legacy, digital inheritance, post mortem privacy, mayank raj developer, student developer, privacy advocate, digital rights activist, teen tech entrepreneur, young privacy expert, student privacy researcher, digital footprint consultant, privacy education advocate, cybersecurity student, digital literacy educator, teen privacy mentor, young cybersecurity expert, student tech innovator, privacy awareness advocate, digital citizenship educator, online safety educator, cyberbullying prevention advocate, internet safety researcher, digital wellness educator, privacy protection specialist, cybersecurity education advocate, digital literacy specialist, online privacy consultant, teen digital mentor, student cybersecurity researcher, privacy education specialist, digital footprint analyst, online safety specialist, cyber awareness educator, digital privacy consultant, internet safety educator, privacy rights advocate, digital security educator, cybersecurity awareness specialist, online privacy educator, digital safety consultant, internet privacy specialist, privacy education consultant, cyber safety specialist, digital literacy consultant, online safety consultant, internet safety specialist, privacy awareness specialist, digital citizenship specialist, cybersecurity education specialist, digital wellness specialist, online privacy protection specialist, internet safety protection specialist, privacy education protection specialist',
  image = '/og-image.png',
  url = 'https://digitalguard.app'
}: SEOProps) {
  React.useEffect(() => {
    // Document title update karte hain
    document.title = title;

    // Meta tags update karne ka function
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags set karte hain
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', 'Mayank Raj');
    updateMeta('robots', 'index, follow');
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags for social media
    updateProperty('og:title', title);
    updateProperty('og:description', description);
    updateProperty('og:image', image);
    updateProperty('og:url', url);
    updateProperty('og:type', 'website');
    updateProperty('og:site_name', 'DigitalGuard');

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Theme color set karte hain
    updateMeta('theme-color', '#2563eb');
    updateMeta('msapplication-TileColor', '#2563eb');

    // Canonical link add karte hain
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Structured data add karte hain SEO ke liye
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "DigitalGuard",
      "description": description,
      "url": url,
      "logo": `${url}/logo.png`,
      "founder": {
        "@type": "Person",
        "name": "Mayank Raj",
        "jobTitle": "Student Developer & Privacy Advocate",
        "email": "mayankrajpis2013@gmail.com",
        "url": "https://github.com/devempowerjs"
      },
      "educationalLevel": "Beginner to Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": ["Students", "Teens", "Parents", "Educators", "Professionals"]
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://github.com/devempowerjs"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free digital privacy education and tools"
      }
    };

    let structuredScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredScript) {
      structuredScript = document.createElement('script');
      structuredScript.type = 'application/ld+json';
      document.head.appendChild(structuredScript);
    }
    structuredScript.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, image, url]);

  return null;
}