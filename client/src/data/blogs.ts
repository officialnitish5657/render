export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  image: string;
  tags: string[];
  publishedTime: string;
  modifiedTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-web-development",
    title: "The Future of Web Development: Trends and Technologies to Watch",
    excerpt: "Explore the latest trends in web development for 2024, from AI-powered development tools to modern frameworks and mobile-first approaches.",
    content: `
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        The web development landscape is evolving at an unprecedented pace. As we move through 2024, new technologies and methodologies are reshaping how we build and interact with digital experiences. From artificial intelligence integration to advanced frameworks, here's what developers need to know about the future.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">The Rise of AI-Powered Development</h2>
      
      <div class="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
          alt="Team of developers collaborating in modern office" 
          class="w-full h-64 object-cover rounded-lg mb-4"
        />
      </div>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Artificial Intelligence is no longer a distant concept in web development—it's here and transforming how we code. AI-powered tools are helping developers write better code faster, identify bugs before they become problems, and even generate entire components based on simple descriptions.
      </p>

      <p class="text-gray-700 leading-relaxed mb-6">
        Tools like GitHub Copilot, ChatGPT, and various AI code generators are becoming essential parts of the developer toolkit. These technologies don't replace developers; instead, they augment human creativity and problem-solving capabilities.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Framework Evolution and Performance</h2>
      
      <div class="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
          alt="Computer screen showing modern web development code" 
          class="w-full h-64 object-cover rounded-lg mb-4"
        />
      </div>

      <p class="text-gray-700 leading-relaxed mb-6">
        Modern JavaScript frameworks continue to evolve with a focus on performance and developer experience. React's concurrent features, Vue's Composition API, and the emergence of meta-frameworks like Next.js and Nuxt.js are setting new standards for what's possible in web development.
      </p>

      <p class="text-gray-700 leading-relaxed mb-6">
        The trend toward server-side rendering (SSR) and static site generation (SSG) is driven by the need for better SEO, faster initial page loads, and improved user experience across all devices and network conditions.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">The Mobile-First Future</h2>
      
      <div class="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
          alt="Responsive web design displayed on multiple devices" 
          class="w-full h-64 object-cover rounded-lg mb-4"
        />
      </div>

      <p class="text-gray-700 leading-relaxed mb-6">
        With mobile traffic continuing to dominate web usage, the mobile-first approach is no longer optional—it's essential. Progressive Web Apps (PWAs) are bridging the gap between web and native applications, offering app-like experiences through web browsers.
      </p>

      <p class="text-gray-700 leading-relaxed mb-6">
        Technologies like WebAssembly (WASM) are enabling near-native performance in web applications, while service workers provide offline functionality and background synchronization capabilities that were previously exclusive to native apps.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Preparing for What's Next</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        As we look toward the future, web developers need to stay adaptable and continue learning. The technologies that seem cutting-edge today will become standard practice tomorrow. Focus on understanding core principles rather than just specific tools, as this foundation will serve you well regardless of how the landscape evolves.
      </p>

      <p class="text-gray-700 leading-relaxed mb-8">
        The future of web development is bright, filled with opportunities to create more accessible, performant, and user-friendly experiences. By staying curious and embracing change, developers can not only keep up with these trends but help shape the future of the web itself.
      </p>
    `,
    author: "Sarah Johnson",
    authorBio: "Senior Full-Stack Developer and Tech Writer with 8+ years of experience in modern web technologies.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    categoryColor: "bg-blue-100 text-blue-800",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380",
    tags: ["web development", "AI", "frameworks", "mobile-first", "technology trends"],
    publishedTime: "2024-03-15T10:00:00.000Z",
    modifiedTime: "2024-03-15T10:00:00.000Z"
  },
  {
    id: "ai-tools-productivity",
    title: "10 AI Tools That Will Make Your Life 10x Faster and Easier",
    excerpt: "Discover the top AI tools that can revolutionize your productivity and workflow. From ChatGPT to automation platforms, learn how these powerful technologies can boost your efficiency.",
    content: `
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming how we work, create, and solve problems every day. Whether you're a developer, content creator, business owner, or just someone looking to optimize their daily workflow, these 10 AI tools can dramatically boost your productivity and make complex tasks incredibly simple.
      </p>

      <p class="text-gray-700 leading-relaxed mb-8">
        From writing and coding to design and automation, these AI-powered tools are revolutionizing industries and helping millions of people accomplish more in less time. Let's dive into the top 10 AI tools that can make your life significantly faster and easier.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">1. ChatGPT - The Ultimate AI Assistant</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Revolutionary conversational AI that can write, code, analyze, and solve problems across virtually any domain. Perfect for content creation, coding assistance, research, problem-solving, and learning.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">2. GitHub Copilot - AI-Powered Coding</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        AI-powered code completion tool that suggests entire lines and functions as you type. Essential for software development, code review, debugging, and learning new programming languages.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Midjourney - AI Image Generation</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Create stunning, professional-quality images and artwork from simple text descriptions. Perfect for marketing materials, social media content, concept art, and creative projects.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">The Future of AI in Productivity</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        We're only scratching the surface of what AI can do for productivity. As these tools continue to evolve, we can expect even more sophisticated capabilities, better integration between platforms, and increasingly personalized experiences that adapt to individual work styles.
      </p>

      <p class="text-gray-700 leading-relaxed mb-6">
        The key to success with AI tools isn't about replacing human creativity and intelligence—it's about augmenting our capabilities and freeing up time for higher-level thinking, strategy, and innovation. By embracing these tools today, you're positioning yourself at the forefront of the productivity revolution.
      </p>

      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-yellow-800 mb-2">
          Pro Tip
        </h3>
        <p class="text-yellow-700">
          Don't try to adopt all these tools at once. Start with 2-3 that address your biggest productivity challenges, master them, then gradually expand your AI toolkit as you become more comfortable with the technology.
        </p>
      </div>
    `,
    author: "ModernBlog Team",
    authorBio: "Our team of tech enthusiasts and productivity experts research and test the latest AI tools to help you stay ahead of the curve.",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "AI Technology",
    categoryColor: "bg-purple-100 text-purple-800",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380",
    tags: ["AI tools", "productivity", "automation", "technology", "artificial intelligence"],
    publishedTime: "2024-03-15T12:00:00.000Z",
    modifiedTime: "2024-03-15T12:00:00.000Z"
  },
  {
    id: "ai-tools",
    title: "10 AI Tools That Will Make Your Life 10x Faster and Easier",
    excerpt: "Discover the revolutionary AI tools that are transforming productivity across industries. From ChatGPT to automation platforms, learn how these tools can dramatically boost your efficiency.",
    content: `
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming how we work, create, and solve problems every day. Whether you're a developer, content creator, business owner, or just someone looking to optimize their daily workflow, these 10 AI tools can dramatically boost your productivity and make complex tasks incredibly simple.
      </p>

      <p class="text-gray-700 leading-relaxed mb-8">
        From writing and coding to design and automation, these AI-powered tools are revolutionizing industries and helping millions of people accomplish more in less time. Let's dive into the top 10 AI tools that can make your life significantly faster and easier.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <div class="flex items-center mb-4">
            <div class="p-3 bg-green-500 rounded-lg text-white mr-4">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">ChatGPT</h3>
              <p class="text-sm text-green-700">AI Assistant</p>
            </div>
          </div>
          <p class="text-gray-700 text-sm mb-3">Revolutionary conversational AI that can write, code, analyze, and solve problems across virtually any domain.</p>
          <p class="text-xs text-green-800 font-medium">✨ 10x faster content creation and research</p>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <div class="flex items-center mb-4">
            <div class="p-3 bg-blue-500 rounded-lg text-white mr-4">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">GitHub Copilot</h3>
              <p class="text-sm text-blue-700">Code Assistant</p>
            </div>
          </div>
          <p class="text-gray-700 text-sm mb-3">AI-powered code completion tool that suggests entire lines and functions as you type.</p>
          <p class="text-xs text-blue-800 font-medium">⚡ 3x faster coding with intelligent suggestions</p>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <div class="flex items-center mb-4">
            <div class="p-3 bg-purple-500 rounded-lg text-white mr-4">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">Midjourney</h3>
              <p class="text-sm text-purple-700">Image Generation</p>
            </div>
          </div>
          <p class="text-gray-700 text-sm mb-3">Create stunning, professional-quality images and artwork from simple text descriptions.</p>
          <p class="text-xs text-purple-800 font-medium">🎨 100x faster than traditional design workflows</p>
        </div>

        <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="p-3 bg-gray-500 rounded-lg text-white mr-4">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">Notion AI</h3>
              <p class="text-sm text-gray-700">Productivity</p>
            </div>
          </div>
          <p class="text-gray-700 text-sm mb-3">Intelligent writing assistant built into Notion that helps with content creation, summarization, and organization.</p>
          <p class="text-xs text-gray-800 font-medium">📝 5x faster documentation and planning</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">More Powerful AI Tools</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Beyond these core tools, the AI ecosystem includes specialized solutions for transcription (Otter.ai), writing assistance (Grammarly), automation (Zapier), content creation (Jasper AI), video editing (Runway ML), and database management (Airtable AI).
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Get Started</h2>
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
        <h3 class="text-lg font-semibold text-blue-800 mb-2">
          Pro Tip for Beginners
        </h3>
        <p class="text-blue-700">
          Start with ChatGPT and one specialized tool that addresses your biggest productivity challenge. Master these before expanding your AI toolkit. The key is consistent use—spend 15 minutes daily experimenting with prompts and workflows.
        </p>
      </div>

      <p class="text-gray-700 leading-relaxed mb-6">
        The AI revolution is happening now, and these tools are your gateway to unprecedented productivity. Don't wait for the perfect moment—start experimenting today and discover how AI can transform your work and creative processes.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">The Future is Here</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        We're only scratching the surface of what AI can do for productivity. As these tools continue to evolve, we can expect even more sophisticated capabilities, better integration between platforms, and increasingly personalized experiences that adapt to individual work styles.
      </p>

      <p class="text-gray-700 leading-relaxed mb-8">
        The key to success with AI tools isn't about replacing human creativity and intelligence—it's about augmenting our capabilities and freeing up time for higher-level thinking, strategy, and innovation. By embracing these tools today, you're positioning yourself at the forefront of the productivity revolution.
      </p>
    `,
    author: "ModernBlog Team",
    authorBio: "Our team of tech enthusiasts and productivity experts research and test the latest AI tools to help you stay ahead of the curve.",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "AI Technology",
    categoryColor: "bg-purple-100 text-purple-800",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380",
    tags: ["AI tools", "productivity", "automation", "technology", "artificial intelligence"],
    publishedTime: "2024-03-15T12:00:00.000Z",
    modifiedTime: "2024-03-15T12:00:00.000Z"
  },
  {
    id: "data-visualization-modern-apps",
    title: "Understanding Data Visualization in Modern Web Apps",
    excerpt: "Learn how to effectively present complex data through interactive visualizations that engage users and drive insights.",
    content: `
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        Data visualization has become a cornerstone of modern web applications. As businesses generate more data than ever before, the ability to present complex information in an intuitive, interactive format has become crucial for user engagement and decision-making.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">The Evolution of Data Visualization</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Gone are the days of static charts and graphs. Modern data visualization leverages interactive elements, real-time updates, and responsive design to create engaging user experiences. Libraries like D3.js, Chart.js, and Recharts have made it easier than ever to implement sophisticated visualizations.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Best Practices for Effective Visualizations</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Effective data visualization isn't just about making things look pretty—it's about telling a story with data. Choose the right chart type for your data, maintain consistency in design, and always prioritize clarity over complexity.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Tools and Technologies</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        The modern web developer has access to powerful tools for creating data visualizations. From React-based charting libraries to WebGL-powered 3D visualizations, the possibilities are endless.
      </p>
    `,
    author: "Alex Chen",
    authorBio: "Data Scientist and Frontend Developer specializing in interactive data visualizations and user experience design.",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Data Science",
    categoryColor: "bg-green-100 text-green-800",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380",
    tags: ["data visualization", "web development", "charts", "data science"],
    publishedTime: "2024-03-10T09:00:00.000Z"
  },
  {
    id: "design-systems-that-scale",
    title: "Design Systems That Scale: Building for the Future",
    excerpt: "Explore best practices for creating design systems that can grow with your product and maintain consistency across teams.",
    content: `
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        A well-designed design system is the backbone of any successful digital product. It ensures consistency, improves efficiency, and enables teams to work together seamlessly as products grow and evolve.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">What Makes a Design System Scalable?</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Scalable design systems are built with flexibility in mind. They use atomic design principles, maintain clear documentation, and provide components that can be easily adapted for different use cases without breaking the overall design language.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementation Strategies</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Start small with core components like buttons, forms, and typography. Build a solid foundation before expanding to more complex patterns. Use tools like Storybook for documentation and Figma for design collaboration.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Maintaining Consistency at Scale</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        As your team grows, maintaining consistency becomes challenging. Establish clear governance processes, regular reviews, and automated testing to ensure your design system remains coherent and useful.
      </p>
    `,
    author: "Maya Patel",
    authorBio: "Senior UX Designer with expertise in design systems, user research, and product strategy for enterprise applications.",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Design",
    categoryColor: "bg-purple-100 text-purple-800",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380",
    tags: ["design systems", "UX design", "scalability", "design"],
    publishedTime: "2024-03-08T11:00:00.000Z"
  }
];

export function getBlogById(id: string): BlogPost | undefined {
  return blogPosts.find(blog => blog.id === id);
}

export function getAllBlogs(): BlogPost[] {
  return blogPosts;
}