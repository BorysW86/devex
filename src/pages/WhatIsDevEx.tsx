import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, Brain, Zap, TrendingUp, Users, Target, CheckCircle, ExternalLink, BookOpen, Github, FileText, Settings, Cpu, GitBranch, Network } from 'lucide-react';
import Accordion from '../components/common/Accordion';
import Quote from '../components/common/Quote';
import { DEVEX_DIMENSIONS, DEVEX_RESOURCES } from '../utils/constants';
import * as Icons from 'lucide-react';

const WhatIsDevEx: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Streamlined workflows and better tools lead to faster delivery and higher output.'
    },
    {
      icon: CheckCircle,
      title: 'Higher Quality Code',
      description: 'Better testing tools and review processes result in fewer bugs and more maintainable code.'
    },
    {
      icon: Target,
      title: 'Enhanced Innovation',
      description: 'When developers spend less time on friction, they have more time for creative problem-solving.'
    },
    {
      icon: Users,
      title: 'Better Retention',
      description: 'Satisfied developers are more likely to stay, reducing turnover and knowledge loss.'
    }
  ];

  // Key DevEx components with glowing icons
  const devexComponents = [
    {
      icon: Settings,
      title: 'Tooling & Infrastructure',
      description: 'Modern IDEs, CI/CD pipelines, and development environments',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Cpu,
      title: 'Automation & AI',
      description: 'Intelligent testing, deployment, and code assistance',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: GitBranch,
      title: 'Workflows & Processes',
      description: 'Streamlined code review, incident management, and collaboration',
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Network,
      title: 'Communication & Culture',
      description: 'Cross-functional alignment and psychological safety',
      color: 'from-orange-500/20 to-amber-500/20',
      iconColor: 'text-orange-600 dark:text-orange-400'
    }
  ];

  const accordionItems = DEVEX_DIMENSIONS.map(dimension => {
    const IconComponent = Icons[dimension.icon as keyof typeof Icons] as React.ComponentType<any>;
    
    return {
      id: dimension.id,
      title: dimension.title,
      icon: <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      content: (
        <div className="space-y-4">
          <p className="text-base leading-relaxed">
            {dimension.details}
          </p>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Metrics:</h4>
            <ul className="space-y-1">
              {dimension.keyMetrics.map((metric, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    };
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'Knowledge Base':
        return <BookOpen className="h-5 w-5" />;
      case 'Playbook':
        return <FileText className="h-5 w-5" />;
      case 'Resource Collection':
        return <Github className="h-5 w-5" />;
      case 'Guide':
        return <Target className="h-5 w-5" />;
      case 'Case Study':
        return <Users className="h-5 w-5" />;
      case 'Research':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'comprehensive':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:shadow-blue-500/20';
      case 'enterprise':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:shadow-green-500/20';
      case 'community':
        return 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:shadow-purple-500/20';
      case 'foundational':
        return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 hover:shadow-orange-500/20';
      case 'case-study':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:shadow-yellow-500/20';
      case 'research':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:shadow-red-500/20';
      default:
        return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800 hover:shadow-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Enhanced Hero Section with Futuristic Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
        {/* Animated Circuit Background */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 25 50 L 25 25 L 75 25 L 75 75 L 100 75" 
                      fill="none" 
                      stroke="url(#circuitGradient)" 
                      strokeWidth="1" 
                      opacity="0.6">
                  <animate attributeName="stroke-dasharray" 
                           values="0,200;100,100;0,200" 
                           dur="8s" 
                           repeatCount="indefinite"/>
                </path>
                <circle cx="25" cy="25" r="2" fill="url(#circuitGradient)" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="75" cy="75" r="2" fill="url(#circuitGradient)" opacity="0.8">
                  <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
                </circle>
              </pattern>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-full h-full animate-pulse"></div>
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Enhanced Image with Glowing Frame */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                {/* Enhanced Image Container */}
                <div className="relative p-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-blue-500/30">
                  <img
                    src="/image copy copy copy.png"
                    alt="Developer experience infrastructure with cloud, code, and network connections"
                    className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
                  />
                  
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl blur-xl opacity-50"></div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float opacity-80 shadow-lg shadow-blue-500/50">
                  <div className="absolute inset-2 bg-white/20 rounded-full"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-float-delayed opacity-60 shadow-lg shadow-purple-500/50">
                  <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                </div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-float-slow opacity-70 shadow-lg shadow-green-500/50">
                  <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                </div>

                {/* Additional Tech Elements */}
                <div className="absolute top-8 -left-8 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute bottom-12 -right-6 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Right side - Enhanced Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Understanding Developer Experience
              </div>

              {/* Enhanced Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                <span className="block">What is</span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  Developer Experience?
                </span>
              </h1>

              {/* Enhanced Subtitle */}
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                More than tools — it's how developers feel, think, and deliver. 
                Understanding the holistic concept that shapes daily development work.
              </p>

              {/* Pull Quote with Enhanced Styling */}
              <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6 mb-8 border border-blue-200/50 dark:border-blue-700/50">
                <div className="absolute top-4 left-4 w-8 h-8 text-blue-300 dark:text-blue-600 opacity-50">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed pl-12">
                  "Developer experience (DevEx) is concerned with how software developers feel about, think about, and value their work."
                </blockquote>
                <footer className="mt-4 pl-12">
                  <cite className="text-sm text-gray-600 dark:text-gray-400 not-italic font-medium">
                    — LeadDev
                  </cite>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Key DevEx Components Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Components of Developer Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Four fundamental pillars that shape how developers work, collaborate, and deliver value
            </p>
          </div>

          {/* Enhanced DevEx Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {devexComponents.map((component, index) => (
              <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                {/* Subtle Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${component.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${component.color} backdrop-blur-sm rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <component.icon className={`h-8 w-8 ${component.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {component.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {component.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Definition and Why It Matters */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Definition and Why It Matters
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Developer Experience is a holistic concept that encompasses not just the tools and technologies 
              developers use, but also the processes, environments, and human elements that shape their daily work. 
              This includes psychological safety, clear goals, effective communication, and the overall culture 
              that enables developers to do their best work.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Research from McKinsey and DORA consistently shows that developer well-being and experience directly 
              correlate with business outcomes. Organizations with superior developer experience see higher 
              productivity, better retention rates, faster time-to-market, and improved software quality. 
              Investing in DevEx isn't just about making developers happy—it's a strategic business imperative.
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Dimensions */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Three Core Dimensions of DevEx
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Understanding the fundamental aspects that drive developer experience
            </p>
          </div>

          <Accordion items={accordionItems} allowMultiple={true} />
        </div>
      </section>

      {/* Enhanced Essential Resources */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Essential DevEx Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Curated collection of knowledge bases, guides, and research to deepen your understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVEX_RESOURCES.map((resource) => (
              <div key={resource.id} className={`group rounded-xl border-2 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${getCategoryColor(resource.category)}`}>
                {/* Resource Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg mr-3 shadow-sm group-hover:shadow-md transition-shadow">
                      {getResourceIcon(resource.type)}
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-400 rounded">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Resource Content */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </h3>
                {resource.subtitle && (
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    {resource.subtitle}
                  </p>
                )}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>

                {/* External Link */}
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  Explore Resource
                  <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why It Matters - Benefits */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Developer Experience Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Investing in DevEx delivers measurable business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mr-4 shadow-sm group-hover:shadow-md transition-shadow group-hover:scale-110 duration-300">
                    <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Improve Your Developer Experience?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Explore the key areas where you can make the biggest impact on your team's productivity and satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/key-areas"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="relative">Explore Key Areas</span>
              <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/metrics"
              className="group relative inline-flex items-center px-8 py-4 bg-white/10 dark:bg-gray-800 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Metrics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsDevEx;