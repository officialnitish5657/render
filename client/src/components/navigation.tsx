import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMobileMenu}>
              <h1 className="text-xl font-bold text-gray-900">ModernBlog</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/blog') 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Blog
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-600"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link 
                href="/" 
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/blog') 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
