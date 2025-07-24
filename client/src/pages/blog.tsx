import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Clock, ChevronRight } from "lucide-react";
import SEOHead from "@/components/seo-head";

export default function Blog() {
  const relatedArticles = [
    {
      id: 1,
      title: "Understanding Data Visualization in Modern Web Apps",
      excerpt: "Learn how to effectively present complex data through interactive visualizations that engage users and drive insights.",
      author: "Alex Chen",
      date: "March 10, 2024",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380",
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      title: "Design Systems That Scale: Building for the Future",
      excerpt: "Explore best practices for creating design systems that can grow with your product and maintain consistency across teams.",
      author: "Maya Patel",
      date: "March 8, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380",
      categoryColor: "bg-purple-100 text-purple-800"
    },
    {
      id: 3,
      title: "Web Security Best Practices for 2024",
      excerpt: "Stay ahead of security threats with the latest best practices and tools for protecting web applications and user data.",
      author: "David Rodriguez",
      date: "March 5, 2024",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380",
      categoryColor: "bg-red-100 text-red-800"
    }
  ];

  return (
    <div>
      <SEOHead
        title="The Future of Web Development: Trends and Technologies to Watch | ModernBlog"
        description="Explore the latest trends in web development for 2024, from AI-powered development tools to modern frameworks and mobile-first approaches. Learn what developers need to know about the future of web technology."
        keywords="web development, AI development tools, React frameworks, mobile-first design, progressive web apps, WebAssembly, JavaScript trends, modern web technologies, software development"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630"
        url="https://modernblog.replit.app/blog"
        type="article"
        author="Sarah Johnson"
        publishedTime="2024-03-15T10:00:00.000Z"
        modifiedTime="2024-03-15T10:00:00.000Z"
        section="Technology"
        tags={["web development", "AI", "frameworks", "mobile-first", "technology trends"]}
      />
      <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <Badge className="bg-blue-100 text-blue-800">Technology</Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            The Future of Web Development: Trends and Technologies to Watch
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-gray-600 text-sm">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Sarah Johnson</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>8 min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
            alt="Modern developer workspace with multiple monitors" 
            className="w-full h-80 sm:h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            The web development landscape is evolving at an unprecedented pace. As we move through 2024, new technologies and methodologies are reshaping how we build and interact with digital experiences. From artificial intelligence integration to advanced frameworks, here's what developers need to know about the future.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Rise of AI-Powered Development</h2>
          
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
              alt="Team of developers collaborating in modern office" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Artificial Intelligence is no longer a distant concept in web development—it's here and transforming how we code. AI-powered tools are helping developers write better code faster, identify bugs before they become problems, and even generate entire components based on simple descriptions.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tools like GitHub Copilot, ChatGPT, and various AI code generators are becoming essential parts of the developer toolkit. These technologies don't replace developers; instead, they augment human creativity and problem-solving capabilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Framework Evolution and Performance</h2>
          
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
              alt="Computer screen showing modern web development code" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Modern JavaScript frameworks continue to evolve with a focus on performance and developer experience. React's concurrent features, Vue's Composition API, and the emergence of meta-frameworks like Next.js and Nuxt.js are setting new standards for what's possible in web development.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The trend toward server-side rendering (SSR) and static site generation (SSG) is driven by the need for better SEO, faster initial page loads, and improved user experience across all devices and network conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Mobile-First Future</h2>
          
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
              alt="Responsive web design displayed on multiple devices" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            With mobile traffic continuing to dominate web usage, the mobile-first approach is no longer optional—it's essential. Progressive Web Apps (PWAs) are bridging the gap between web and native applications, offering app-like experiences through web browsers.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Technologies like WebAssembly (WASM) are enabling near-native performance in web applications, while service workers provide offline functionality and background synchronization capabilities that were previously exclusive to native apps.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Preparing for What's Next</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            As we look toward the future, web developers need to stay adaptable and continue learning. The technologies that seem cutting-edge today will become standard practice tomorrow. Focus on understanding core principles rather than just specific tools, as this foundation will serve you well regardless of how the landscape evolves.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            The future of web development is bright, filled with opportunities to create more accessible, performant, and user-friendly experiences. By staying curious and embracing change, developers can not only keep up with these trends but help shape the future of the web itself.
          </p>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">Sarah Johnson</h4>
                <p className="text-gray-600">Senior Full-Stack Developer and Tech Writer with 8+ years of experience in modern web technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <Card key={article.id} className="bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className={`mb-3 ${article.categoryColor}`}>
                    {article.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
