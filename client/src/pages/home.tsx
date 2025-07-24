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

      {/* Featured Article Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
              Featured Article
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Don't miss our latest deep dive into AI productivity tools
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Link href="/blog/ai-tools-10x-faster">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600" 
                      alt="AI technology visualization" 
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        AI Technology
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      10 AI Tools That Will Make Your Life 10x Faster and Easier
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Discover the revolutionary AI tools that are transforming productivity across industries. From ChatGPT to automation platforms, learn how these tools can dramatically boost your efficiency.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <span>ModernBlog Team</span>
                      <span className="mx-2">•</span>
                      <span>March 15, 2024</span>
                      <span className="mx-2">•</span>
                      <span>12 min read</span>
                    </div>
                    <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      Read full article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-white dark:bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
            alt="Creative workspace with laptop and coffee" 
            className="w-full h-full object-cover opacity-5 dark:opacity-10"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Ready to Start Reading?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dive into our collection of engaging articles and join thousands of readers who trust ModernBlog for quality content.
          </p>
          <div className="mt-8">
            <Link href="/blog">
              <Button 
                size="lg" 
                variant="outline"
                className="inline-flex items-center px-8 py-3 text-base font-medium border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-colors duration-200"
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
