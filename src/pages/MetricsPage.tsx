import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, BarChart3, TrendingUp, Users, Target, Zap, Brain, RefreshCw, Activity } from 'lucide-react';
import { METRICS_FRAMEWORKS } from '../utils/constants';

const MetricsPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const overviewStats = [
    {
      title: 'Frameworks',
      value: '4+',
      description: 'Industry-standard measurement frameworks',
      icon: BarChart3,
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Research Papers',
      value: '8+',
      description: 'Academic and industry research articles',
      icon: Target,
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Organizations',
      value: '1000+',
      description: 'Companies using these frameworks',
      icon: Users,
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Metrics',
      value: '50+',
      description: 'Individual metrics across all frameworks',
      icon: TrendingUp,
      color: 'from-orange-500/20 to-amber-500/20',
      iconColor: 'text-orange-600 dark:text-orange-400'
    }
  ];

  // Enhanced framework icons
  const getFrameworkIcon = (id: string) => {
    switch (id) {
      case 'kede':
        return Brain;
      case 'dora':
        return TrendingUp;
      case 'space':
        return Activity;
      case 'devex':
        return Zap;
      default:
        return BarChart3;
    }
  };

  const getFrameworkIconColor = (id: string) => {
    switch (id) {
      case 'kede':
        return 'text-blue-600 dark:text-blue-400';
      case 'dora':
        return 'text-green-600 dark:text-green-400';
      case 'space':
        return 'text-purple-600 dark:text-purple-400';
      case 'devex':
        return 'text-orange-600 dark:text-orange-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getFrameworkGradient = (id: string) => {
    switch (id) {
      case 'kede':
        return 'from-blue-500/20 to-cyan-500/20';
      case 'dora':
        return 'from-green-500/20 to-emerald-500/20';
      case 'space':
        return 'from-purple-500/20 to-pink-500/20';
      case 'devex':
        return 'from-orange-500/20 to-amber-500/20';
      default:
        return 'from-gray-500/20 to-gray-600/20';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
        {/* Animated Circuit Background */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="metrics-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 25 50 L 25 25 L 75 25 L 75 75 L 100 75" 
                      fill="none" 
                      stroke="url(#metricsGradient)" 
                      strokeWidth="1" 
                      opacity="0.6">
                  <animate attributeName="stroke-dasharray" 
                           values="0,200;100,100;0,200" 
                           dur="8s" 
                           repeatCount="indefinite"/>
                </path>
                <circle cx="25" cy="25" r="2" fill="url(#metricsGradient)" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="75" cy="75" r="2" fill="url(#metricsGradient)" opacity="0.8">
                  <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
                </circle>
              </pattern>
              <linearGradient id="metricsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#metrics-grid)" />
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
          <div className="text-center">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Measurement & Analytics
            </div>

            {/* Enhanced Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="block">Developer Experience</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Metrics & Frameworks
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Comprehensive frameworks and research for measuring developer productivity, satisfaction, and experience.
              Data-driven insights to transform your development organization.
            </p>
            
            {/* Enhanced Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {overviewStats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Metrics Matter for Developer Experience
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Measuring developer experience isn't just about tracking productivity—it's about understanding 
              the holistic factors that contribute to developer satisfaction, team effectiveness, and 
              organizational success. The frameworks below represent years of research and real-world 
              application across thousands of organizations.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Each framework offers unique perspectives and complementary insights. DORA focuses on delivery 
              performance, SPACE provides a holistic view of productivity, KEDE emphasizes knowledge and 
              cognitive aspects, while DevEx metrics specifically target the developer experience itself.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Frameworks Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Measurement Frameworks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Industry-leading approaches to measuring developer experience and productivity
            </p>
          </div>

          <div className="space-y-12">
            {METRICS_FRAMEWORKS.map((framework, index) => {
              const FrameworkIcon = getFrameworkIcon(framework.id);
              const iconColor = getFrameworkIconColor(framework.id);
              const gradientColor = getFrameworkGradient(framework.id);
              
              return (
                <div key={framework.id} className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                  {/* Enhanced Framework Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      {/* Enhanced Icon Container */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradientColor} backdrop-blur-sm rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <FrameworkIcon className={`h-8 w-8 ${iconColor}`} />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center justify-center w-12 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg text-lg font-bold text-gray-900 dark:text-white mr-4 shadow-sm">
                            {framework.name}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {framework.title}
                          </h3>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                          {framework.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Articles Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {framework.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="group/article bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                        {/* Article Type Badge */}
                        <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg mb-4 shadow-sm">
                          {article.type}
                        </div>

                        {/* Article Content */}
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover/article:text-blue-600 dark:group-hover/article:text-blue-400 transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                          {article.subtitle}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                          {article.description}
                        </p>

                        {/* Enhanced Read More Link */}
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors group/link"
                        >
                          Read Article
                          <ExternalLink className="ml-1 h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Additional Resources */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive guide to measuring developer productivity
            </p>
          </div>

          <div className="group bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mr-4 shadow-sm group-hover:shadow-md transition-shadow group-hover:scale-110 duration-300">
                <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                How to measure developer productivity?
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              A comprehensive overview comparing DORA, SPACE, GSM, and DevEx frameworks, 
              helping you understand which metrics and approaches work best for your organization.
            </p>
            <a
              href="https://shiftmag.dev/how-to-measure-developer-productivity-dora-space-gsm-devex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
            >
              Read Comprehensive Guide
              <ExternalLink className="ml-1 h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Implementation Guide CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Measuring?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Learn how to implement these frameworks in your organization with our step-by-step guides and templates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/getting-started"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="relative">Implementation Guide</span>
              <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/templates"
              className="group relative inline-flex items-center px-8 py-4 bg-white/10 dark:bg-gray-800 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Download Templates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetricsPage;