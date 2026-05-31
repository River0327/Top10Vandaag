import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    setActiveLink(window.location.pathname);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/trending', label: 'Trending' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg shadow-lg' 
        : 'bg-black/50 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14 md:h-16">
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {links.map((link, index) => (
              <div key={link.href} className="flex items-center">
                {index > 0 && (
                  <span className="text-gray-600 mx-1 sm:mx-2 hover:text-gray-400 transition-colors">|</span>
                )}
                <Link
                  href={link.href}
                  className={`relative px-1.5 sm:px-2 py-1 text-sm sm:text-base transition-all duration-300 ${
                    activeLink === link.href
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-main transform scale-x-100 transition-transform duration-300" />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 