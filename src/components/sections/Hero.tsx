import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, BarChart3, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Organizations', value: '500+', icon: Users },
    { label: 'Developers', value: '50K+', icon: BarChart3 },
    { label: 'Productivity Gain', value: '40%', icon: Zap },
  ];

  const handleVideoClick = () => {
    window.open('https://sora.chatgpt.com/g/gen_01jxthy2rte71ba80drafk89bt', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
          {/* Left side - Original Image with Enhanced Frame */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Enhanced Image Container */}
              <div className="relative p-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-blue-500/30">
                <img
                  src="/image copy copy.png"
                  alt="Developer working with modern tools and analytics"
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
          <div className="order-1 lg:order-2 text-left">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Developer Experience Platform
            </div>

            {/* Enhanced Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">Elevate Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Developer Experience
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              Empower your development teams with insights, tools, and best practices 
              that transform productivity and satisfaction across your entire organization.
            </p>

            {/* Enhanced CTA Buttons with Glow Effects */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
              <Link
                to="/getting-started"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 animate-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <span className="relative">Get Started</span>
                <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={handleVideoClick}
                className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-white/10"
              >
                <div className="absolute inset-0 bg-white/5 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Play className="relative mr-2 h-5 w-5 text-gray-300" />
                <span className="relative">Watch Video</span>
              </button>
            </div>

            {/* Enhanced Stats with Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg mb-4 border border-blue-500/20 shadow-lg shadow-blue-500/10">
                    <stat.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;