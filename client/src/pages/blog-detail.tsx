import { useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { getBlogById, getAllBlogs } from "@/data/blogs";
import NotFound from "@/pages/not-found";

export default function BlogDetail() {
  const [match, params] = useRoute("/blog/:id");
  const blog = params?.id ? getBlogById(params.id) : null;
  const allBlogs = getAllBlogs();
  
  if (!blog) {
    return <NotFound />;
  }

  // Get related blogs (excluding current blog)
  const relatedBlogs = allBlogs
    .filter(b => b.id !== blog.id)
    .slice(0, 3);

  return (
    <div>
      <SEOHead
        title={`${blog.title} | ModernBlog`}
        description={blog.excerpt}
        keywords={blog.tags.join(", ")}
        image={blog.image}
        url={`https://modernblog.replit.app/blog/${blog.id}`}
        type="article"
        author={blog.author}
        publishedTime={blog.publishedTime}
        modifiedTime={blog.modifiedTime}
        section={blog.category}
        tags={blog.tags}
      />

      <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Blog Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <Badge className={blog.categoryColor}>{blog.category}</Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-300 text-sm">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-80 sm:h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Blog Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Author Bio */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{blog.author}</h4>
              <p className="text-gray-600 dark:text-gray-300">{blog.authorBio}</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedBlogs.length > 0 && (
        <section className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`}>
                  <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={relatedBlog.image} 
                        alt={relatedBlog.title} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className={`mb-3 ${relatedBlog.categoryColor}`}>
                        {relatedBlog.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {relatedBlog.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-4">
                          <span>{relatedBlog.author}</span>
                          <span>•</span>
                          <span>{relatedBlog.date}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}