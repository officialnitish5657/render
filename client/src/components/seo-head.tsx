import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export default function SEOHead({
  title = "ModernBlog - Quality Articles, Fresh Ideas, and Vibrant Community",
  description = "Discover insightful articles, creative stories, and thought-provoking content that inspires and informs. Join our community of readers and writers exploring technology, design, development, and business insights.",
  keywords = "blog, articles, technology, web development, design, programming, business insights, modern web, community, quality content",
  image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630",
  url = "https://modernblog.replit.app/",
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper function to update meta tags
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('[name=')) {
          element.setAttribute('name', selector.slice(6, -2));
        } else if (selector.startsWith('[property=')) {
          element.setAttribute('property', selector.slice(10, -2));
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update primary meta tags
    updateMetaTag('[name="description"]', description);
    updateMetaTag('[name="keywords"]', keywords);
    
    // Update Open Graph tags
    updateMetaTag('[property="og:title"]', title);
    updateMetaTag('[property="og:description"]', description);
    updateMetaTag('[property="og:image"]', image);
    updateMetaTag('[property="og:url"]', url);
    updateMetaTag('[property="og:type"]', type);
    
    // Update Twitter tags
    updateMetaTag('[property="twitter:title"]', title);
    updateMetaTag('[property="twitter:description"]', description);
    updateMetaTag('[property="twitter:image"]', image);
    updateMetaTag('[property="twitter:url"]', url);
    
    // Article-specific meta tags
    if (type === 'article') {
      if (author) updateMetaTag('[property="article:author"]', author);
      if (publishedTime) updateMetaTag('[property="article:published_time"]', publishedTime);
      if (modifiedTime) updateMetaTag('[property="article:modified_time"]', modifiedTime);
      if (section) updateMetaTag('[property="article:section"]', section);
      
      // Add article tags
      tags.forEach((tag, index) => {
        updateMetaTag(`[property="article:tag"][content="${tag}"]`, tag);
      });
    }

    // Update canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', url);

    // Add structured data for articles
    if (type === 'article') {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image,
        "url": url,
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "author": {
          "@type": "Person",
          "name": author || "ModernBlog Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ModernBlog",
          "logo": {
            "@type": "ImageObject",
            "url": "https://modernblog.replit.app/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        }
      };

      let scriptElement = document.querySelector('script[type="application/ld+json"]#article-schema');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('id', 'article-schema');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags]);

  return null; // This component doesn't render anything
}