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

  const getGlowColor = (index: number) => {
    const colors = [
      'from-blue-500/20 to-cyan-500/20 border-blue-500/30 shadow-blue-500/20',
      'from-purple-500/20 to-pink-500/20 border-purple-500/30 shadow-purple-500/20',
      'from-green-500/20 to-emerald-500/20 border-green-500/30 shadow-green-500/20',
      'from-orange-500/20 to-red-500/20 border-orange-500/30 shadow-orange-500/20',
      'from-indigo-500/20 to-blue-500/20 border-indigo-500/30 shadow-indigo-500/20',
      'from-teal-500/20 to-cyan-500/20 border-teal-500/30 shadow-teal-500/20',
      'from-rose-500/20 to-pink-500/20 border-rose-500/30 shadow-rose-500/20',
      'from-amber-500/20 to-yellow-500/20 border-amber-500/30 shadow-amber-500/20',
      'from-violet-500/20 to-purple-500/20 border-violet-500/30 shadow-violet-500/20',
      'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 shadow-cyan-500/20'
    ];
    return colors[index % colors.length];
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

        {/* Responsive Grid with Glowing Futuristic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {DEVEX_KEY_AREAS.slice(0, 4).map((area, index) => {
            const IconComponent = getAreaIcon(index);
            const glowColor = getGlowColor(index);
            
            return (
              <div key={index} className={`group relative bg-gradient-to-br ${glowColor} backdrop-blur-sm rounded-xl border p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                {/* Glowing Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${glowColor.split(' ')[0]} ${glowColor.split(' ')[1]} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Futuristic Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl mb-6 group-hover:bg-white/20 dark:group-hover:bg-gray-700/50 transition-all duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white dark:text-gray-200" />
                    
                    {/* Pulsing Ring Effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white dark:text-white mb-3 group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-white/80 dark:text-gray-200 mb-6 leading-relaxed text-sm">
                    {area.summary}
                  </p>

                  {/* Metrics Preview */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-white/90 dark:text-white mb-3 uppercase tracking-wider">
                      Key Metrics
                    </div>
                    {area.keyMetrics.slice(0, 3).map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-xs">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2 flex-shrink-0 animate-pulse"></div>
                        <span className="font-medium text-white/80 dark:text-gray-200">{metric}</span>
                      </div>
                    ))}
                    {area.keyMetrics.length > 3 && (
                      <div className="text-xs text-white/60 dark:text-gray-300 font-medium">
                        +{area.keyMetrics.length - 3} more metrics
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {DEVEX_KEY_AREAS.slice(4, 8).map((area, index) => {
            const IconComponent = getAreaIcon(index + 4);
            const glowColor = getGlowColor(index + 4);
            
            return (
              <div key={index + 4} className={`group relative bg-gradient-to-br ${glowColor} backdrop-blur-sm rounded-xl border p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                {/* Glowing Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${glowColor.split(' ')[0]} ${glowColor.split(' ')[1]} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Futuristic Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl mb-6 group-hover:bg-white/20 dark:group-hover:bg-gray-700/50 transition-all duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white dark:text-gray-200" />
                    
                    {/* Pulsing Ring Effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white dark:text-white mb-3 group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-white/80 dark:text-gray-200 mb-6 leading-relaxed text-sm">
                    {area.summary}
                  </p>

                  {/* Metrics Preview */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-white/90 dark:text-white mb-3 uppercase tracking-wider">
                      Key Metrics
                    </div>
                    {area.keyMetrics.slice(0, 3).map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-xs">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2 flex-shrink-0 animate-pulse"></div>
                        <span className="font-medium text-white/80 dark:text-gray-200">{metric}</span>
                      </div>
                    ))}
                    {area.keyMetrics.length > 3 && (
                      <div className="text-xs text-white/60 dark:text-gray-300 font-medium">
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
            const glowColor = getGlowColor(index + 8);
            
            return (
              <div key={index + 8} className={`group relative bg-gradient-to-br ${glowColor} backdrop-blur-sm rounded-xl border p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                {/* Glowing Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${glowColor.split(' ')[0]} ${glowColor.split(' ')[1]} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Futuristic Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl mb-6 group-hover:bg-white/20 dark:group-hover:bg-gray-700/50 transition-all duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white dark:text-gray-200" />
                    
                    {/* Pulsing Ring Effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white dark:text-white mb-3 group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-white/80 dark:text-gray-200 mb-6 leading-relaxed text-sm">
                    {area.summary}
                  </p>

                  {/* Metrics Preview */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-white/90 dark:text-white mb-3 uppercase tracking-wider">
                      Key Metrics
                    </div>
                    {area.keyMetrics.slice(0, 3).map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-xs">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2 flex-shrink-0 animate-pulse"></div>
                        <span className="font-medium text-white/80 dark:text-gray-200">{metric}</span>
                      </div>
                    ))}
                    {area.keyMetrics.length > 3 && (
                      <div className="text-xs text-white/60 dark:text-gray-300 font-medium">
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