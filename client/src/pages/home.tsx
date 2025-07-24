import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Lightbulb, Users } from "lucide-react";
import SEOHead from "@/components/seo-head";

export default function Home() {
  return (
    <div>
      <SEOHead
        title="ModernBlog - Quality Articles, Fresh Ideas, and Vibrant Community"
        description="Discover insightful articles, creative stories, and thought-provoking content that inspires and informs. Join our community of readers and writers exploring technology, design, development, and business insights."
        keywords="blog, articles, technology, web development, design, programming, business insights, modern web, community, quality content, tech blog, development blog"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630"
        url="https://modernblog.replit.app/"
        type="website"
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
            alt="Modern cityscape at sunset" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to <span className="text-blue-600">ModernBlog</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Discover insightful articles, creative stories, and thought-provoking content that inspires and informs. Join our community of readers and writers.
            </p>
            <div className="mt-10">
              <Link href="/blog">
                <Button 
                  size="lg" 
                  className="inline-flex items-center px-8 py-3 text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                >
                  Explore Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose ModernBlog?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform offers a unique blend of quality content, user-friendly design, and engaging community features.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Quality Content</h3>
              <p className="mt-2 text-gray-600">Carefully curated articles by expert writers and thought leaders in various fields.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Fresh Ideas</h3>
              <p className="mt-2 text-gray-600">Stay ahead with innovative perspectives and cutting-edge insights.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Community</h3>
              <p className="mt-2 text-gray-600">Join a vibrant community of readers and writers sharing knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
            alt="Creative workspace with laptop and coffee" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Start Reading?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into our collection of engaging articles and join thousands of readers who trust ModernBlog for quality content.
          </p>
          <div className="mt-8">
            <Link href="/blog">
              <Button 
                size="lg" 
                variant="outline"
                className="inline-flex items-center px-8 py-3 text-base font-medium border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
              >
                View Latest Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
