import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Cpu, GitBranch, Network, Zap, Shield, Target, Users, BookOpen, TrendingUp } from 'lucide-react';
import { DEVEX_KEY_AREAS } from '../../utils/constants';

const OverviewCards: React.FC = () => {
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
      'text-blue-500',
      'text-purple-500',
      'text-green-500',
      'text-orange-500',
      'text-indigo-500',
      'text-teal-500',
      'text-rose-500',
      'text-amber-500',
      'text-violet-500',
      'text-cyan-500'
    ];
    return colors[index % colors.length];
  };

  const getHoverGlow = (index: number) => {
    const glows = [
      'group-hover:shadow-blue-500/20',
      'group-hover:shadow-purple-500/20',
      'group-hover:shadow-green-500/20',
      'group-hover:shadow-orange-500/20',
      'group-hover:shadow-indigo-500/20',
      'group-hover:shadow-teal-500/20',
      'group-hover:shadow-rose-500/20',
      'group-hover:shadow-amber-500/20',
      'group-hover:shadow-violet-500/20',
      'group-hover:shadow-cyan-500/20'
    ];
    return glows[index % glows.length];
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Key Areas of Developer Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ten essential components that make up an exceptional developer experience
            and drive productivity, satisfaction, and business outcomes.
          </p>
        </div>

        {/* First Row - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {DEVEX_KEY_AREAS.slice(0, 4).map((area, index) => {
            const IconComponent = getAreaIcon(index);
            const iconColor = getIconColor(index);
            const hoverGlow = getHoverGlow(index);
            
            return (
              <div key={index} className={`group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${hoverGlow}`}>
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container with Subtle Background */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-all duration-300">
                    <IconComponent className={`h-6 w-6 ${iconColor} dark:${iconColor.replace('500', '400')}`} />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-bold text-gray-600 dark:text-gray-400">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                    {area.summary}
                  </p>

                  {/* Metrics Preview */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                      Key Metrics
                    </div>
                    {area.keyMetrics.slice(0, 3).map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-xs">
                        <div className={`w-1.5 h-1.5 ${iconColor.replace('text-', 'bg-')} rounded-full mr-2 flex-shrink-0`}></div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{metric}</span>
                      </div>
                    ))}
                    {area.keyMetrics.length > 3 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        +{area.keyMetrics.length - 3} more metrics
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {DEVEX_KEY_AREAS.slice(4, 8).map((area, index) => {
            const IconComponent = getAreaIcon(index + 4);
            const iconColor = getIconColor(index + 4);
            const hoverGlow = getHoverGlow(index + 4);
            
            return (
              <div key={index + 4} className={`group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${hoverGlow}`}>
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container with Subtle Background */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-all duration-300">
                    <IconComponent className={`h-6 w-6 ${iconColor} dark:${iconColor.replace('500', '400')}`} />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-bold text-gray-600 dark:text-gray-400">
                    {index + 5}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                    {area.summary}
                  </p>

                  {/* Metrics Preview */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                      Key Metrics
                    </div>
                    {area.keyMetrics.slice(0, 3).map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-xs">
                        <div className={`w-1.5 h-1.5 ${iconColor.replace('text-', 'bg-')} rounded-full mr-2 flex-shrink-0`}></div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{metric}</span>
                      </div>
                    ))}
                    {area.keyMetrics.length > 3 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        +{area.keyMetrics.length - 3} more metrics
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Third Row - 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {DEVEX_KEY_AREAS.slice(8, 10).map((area, index) => {
            const IconComponent = getAreaIcon(index + 8);
            const iconColor = getIconColor(index + 8);
            const hoverGlow = getHoverGlow(index + 8);
            
            return (
              <div key={index + 8} className={`group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${hoverGlow}`}>
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container with Subtle Background */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-all duration-300">
                    <IconComponent className={`h-6 w-6 ${iconColor} dark:${iconColor.replace('500', '400')}`} />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-bold text-gray-600 dark:text-gray-400">
                    {index + 9}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                    {area.summary}
                  </p>

                  {/* Metrics Preview */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                      Key Metrics
                    </div>
                    {area.keyMetrics.slice(0, 3).map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-xs">
                        <div className={`w-1.5 h-1.5 ${iconColor.replace('text-', 'bg-')} rounded-full mr-2 flex-shrink-0`}></div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{metric}</span>
                      </div>
                    ))}
                    {area.keyMetrics.length > 3 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        +{area.keyMetrics.length - 3} more metrics
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <Link
            to="/key-areas"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <span className="relative">Explore Detailed Guides</span>
            <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OverviewCards;