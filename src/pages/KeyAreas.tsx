import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Settings, Cpu, GitBranch, Network, Zap, Shield, Target, Users, BookOpen, TrendingUp } from 'lucide-react';
import { DEVEX_KEY_AREAS } from '../utils/constants';

const KeyAreas: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Map key areas to futuristic glowing icons
  const getAreaIcon = (index: number) => {
    const icons = [
      Settings,    // Tooling & Infrastructure
      Zap,         // Automation
      GitBranch,   // Processes & Workflows
      Network,     // Collaboration & Communication
      BookOpen,    // Documentation
      Users,       // Onboarding
      TrendingUp,  // Feedback Loops
      Shield,      // Work Environment
      Target,      // Learning & Development
      Cpu          // Performance Metrics
    ];
    return icons[index] || Settings;
  };

  const getIconColor = (index: number) => {
    const colors = [
      'text-blue-600 dark:text-blue-400',
      'text-purple-600 dark:text-purple-400',
      'text-green-600 dark:text-green-400',
      'text-orange-600 dark:text-orange-400',
      'text-indigo-600 dark:text-indigo-400',
      'text-teal-600 dark:text-teal-400',
      'text-rose-600 dark:text-rose-400',
      'text-amber-600 dark:text-amber-400',
      'text-violet-600 dark:text-violet-400',
      'text-cyan-600 dark:text-cyan-400'
    ];
    return colors[index % colors.length];
  };

  const getGradientColor = (index: number) => {
    const gradients = [
      'from-blue-500/20 to-cyan-500/20',
      'from-purple-500/20 to-pink-500/20',
      'from-green-500/20 to-emerald-500/20',
      'from-orange-500/20 to-amber-500/20',
      'from-indigo-500/20 to-blue-500/20',
      'from-teal-500/20 to-cyan-500/20',
      'from-rose-500/20 to-pink-500/20',
      'from-amber-500/20 to-yellow-500/20',
      'from-violet-500/20 to-purple-500/20',
      'from-cyan-500/20 to-blue-500/20'
    ];
    return gradients[index % gradients.length];
  };

  const getHoverShadow = (index: number) => {
    const shadows = [
      'hover:shadow-blue-500/20',
      'hover:shadow-purple-500/20',
      'hover:shadow-green-500/20',
      'hover:shadow-orange-500/20',
      'hover:shadow-indigo-500/20',
      'hover:shadow-teal-500/20',
      'hover:shadow-rose-500/20',
      'hover:shadow-amber-500/20',
      'hover:shadow-violet-500/20',
      'hover:shadow-cyan-500/20'
    ];
    return shadows[index % shadows.length];
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
        {/* Animated Circuit Background */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="key-areas-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 25 50 L 25 25 L 75 25 L 75 75 L 100 75" 
                      fill="none" 
                      stroke="url(#keyAreasGradient)" 
                      strokeWidth="1" 
                      opacity="0.6">
                  <animate attributeName="stroke-dasharray" 
                           values="0,200;100,100;0,200" 
                           dur="8s" 
                           repeatCount="indefinite"/>
                </path>
                <circle cx="25" cy="25" r="2" fill="url(#keyAreasGradient)" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="75" cy="75" r="2" fill="url(#keyAreasGradient)" opacity="0.8">
                  <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
                </circle>
              </pattern>
              <linearGradient id="keyAreasGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#key-areas-grid)" />
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
                    src="/image copy copy copy copy.png"
                    alt="Developer experience key areas with automation, AI, workflows, and network connections"
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
                Essential DevEx Components
              </div>

              {/* Enhanced Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                <span className="block">Key Areas of</span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  Developer Experience
                </span>
              </h1>

              {/* Enhanced Subtitle */}
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Ten foundational areas for improving developer experience and productivity 
                across your organization. From tooling to culture, these components shape 
                how developers work and feel about their daily tasks.
              </p>

              {/* Enhanced Key Areas Preview Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[0, 1, 2, 3].map((index) => {
                  const IconComponent = getAreaIcon(index);
                  const iconColor = getIconColor(index);
                  const gradientColor = getGradientColor(index);
                  
                  return (
                    <div key={index} className="group text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradientColor} backdrop-blur-sm rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className={`h-8 w-8 ${iconColor}`} />
                      </div>
                      <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        {DEVEX_KEY_AREAS[index]?.title.split(' ')[0]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Key Areas Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Developer Experience Framework
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ten essential components that make up an exceptional developer experience
              and drive productivity, satisfaction, and business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEVEX_KEY_AREAS.map((area, index) => {
              const IconComponent = getAreaIcon(index);
              const iconColor = getIconColor(index);
              const gradientColor = getGradientColor(index);
              const hoverShadow = getHoverShadow(index);
              
              return (
                <div key={area.id} className={`group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${hoverShadow}`}>
                  {/* Subtle Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        {/* Enhanced Icon Container */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradientColor} backdrop-blur-sm rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className={`h-8 w-8 ${iconColor}`} />
                        </div>
                        <div>
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-sm font-semibold mb-2">
                            {index + 1}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {area.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {area.summary}
                    </p>

                    {/* Key Metrics */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                        Key Metrics:
                      </h4>
                      <div className="space-y-2">
                        {area.keyMetrics.slice(0, 3).map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center text-sm">
                            <div className={`w-1.5 h-1.5 ${iconColor.replace('text-', 'bg-')} rounded-full mr-3 flex-shrink-0`}></div>
                            <span className="font-medium text-gray-700 dark:text-gray-300">{metric}</span>
                          </div>
                        ))}
                        {area.keyMetrics.length > 3 && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium ml-5">
                            +{area.keyMetrics.length - 3} more metrics
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {area.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Special callout for Performance Metrics */}
                    {area.id === 'performance-metrics' && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-200/50 dark:border-blue-700/50">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                          Featured Framework:
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                          See how Spotify measures DevEx and productivity with platform insights and OKRs in their comprehensive approach to metrics-driven developer productivity.
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                        >
                          Read Spotify's Approach
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    )}

                    {/* Learn More Link */}
                    <Link
                      to={`/key-areas/${area.id}`}
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors group"
                    >
                      Learn more about {area.title.toLowerCase()}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DORA and SPACE Metrics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Industry-Standard Frameworks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Understanding DORA and SPACE metrics for comprehensive DevEx measurement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DORA Metrics */}
            <div className="group bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  DORA Metrics
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Four key metrics that indicate the performance of software development and delivery:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Deployment Frequency:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">How often code is deployed to production</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Lead Time for Changes:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Time from code commit to production</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Change Failure Rate:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Percentage of deployments causing failures</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Time to Recovery:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Time to restore service after failure</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* SPACE Framework */}
            <div className="group bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  SPACE Framework
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Five dimensions for measuring developer productivity holistically:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Satisfaction:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Developer fulfillment and well-being</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Performance:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Outcome of systems and processes</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Activity:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Count of actions or outputs</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Communication:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">How people and teams collaborate</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Efficiency:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Ability to complete work with minimal interruptions</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Start Measuring Your Developer Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Learn how to implement these frameworks and start tracking the metrics that matter most to your team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/metrics"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="relative">Explore Metrics</span>
              <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/getting-started"
              className="group relative inline-flex items-center px-8 py-4 bg-white/10 dark:bg-gray-800 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Getting Started Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyAreas;