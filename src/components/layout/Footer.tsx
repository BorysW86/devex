import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  ArrowUp,
  Network
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: 'What is DevEx?', href: '/what-is-devex' },
      { name: 'Key Areas', href: '/key-areas' },
      { name: 'Metrics', href: '/metrics' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    resources: [
      { name: 'Getting Started', href: '/getting-started' },
      { name: 'Templates', href: '/templates' },
      { name: 'Resources', href: '/resources' },
      { name: 'Documentation', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Accessibility', href: '#' }
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-t border-blue-500/20">
      {/* Abstract Glowing Network Illustration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2"/>
            </radialGradient>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          
          {/* Network Connections */}
          <g stroke="url(#connectionGradient)" strokeWidth="1" fill="none">
            <path d="M 100 150 Q 300 100 500 200 T 900 150" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,1000;500,500;0,1000" dur="8s" repeatCount="indefinite"/>
            </path>
            <path d="M 200 300 Q 400 250 600 350 T 1000 300" opacity="0.4">
              <animate attributeName="stroke-dasharray" values="1000,0;500,500;1000,0" dur="10s" repeatCount="indefinite"/>
            </path>
            <path d="M 50 250 Q 250 200 450 300 T 850 250" opacity="0.5">
              <animate attributeName="stroke-dasharray" values="0,800;400,400;0,800" dur="12s" repeatCount="indefinite"/>
            </path>
          </g>
          
          {/* Network Nodes */}
          <g fill="url(#nodeGradient)">
            <circle cx="100" cy="150" r="4">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="300" cy="120" r="3">
              <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="500" cy="200" r="5">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="700" cy="180" r="3">
              <animate attributeName="opacity" values="1;0.3;1" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="300" r="4">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="4.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="600" cy="350" r="3">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white hover:text-blue-400 transition-colors">
              <div className="p-2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg backdrop-blur-sm border border-blue-500/20">
                <Code2 className="h-6 w-6 text-blue-400" />
              </div>
              <span>DevEx Hub</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Empowering developers with tools, insights, and best practices for exceptional developer experience.
            </p>
            
            {/* Social Links with Glow Effects */}
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="group p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="group p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="group p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="group p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-blue-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © 2024 DevEx Hub. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 text-sm text-gray-300 hover:text-blue-400 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 mr-1 group-hover:-translate-y-1 transition-transform" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;