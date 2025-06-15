import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, BarChart3, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Organizations', value: '500+', icon: Users },
    { label: 'Developers', value: '50K+', icon: BarChart3 },
    { label: 'Productivity Gain', value: '40%', icon: Zap },
  ];

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
          {/* Left side - Futuristic Developer Team Illustration */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20">
                {/* Developer Team Silhouettes */}
                <div className="relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
                  {/* Developer 1 */}
                  <div className="absolute top-12 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80">
                    <div className="absolute inset-2 bg-slate-800 rounded-full"></div>
                    <div className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Developer 2 */}
                  <div className="absolute top-20 right-12 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80">
                    <div className="absolute inset-2 bg-slate-800 rounded-full"></div>
                    <div className="absolute top-1 left-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Developer 3 */}
                  <div className="absolute bottom-16 left-12 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full opacity-80">
                    <div className="absolute inset-2 bg-slate-800 rounded-full"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Glowing UI Elements */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                  </div>
                  
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>

                  {/* Code Elements */}
                  <div className="absolute bottom-8 right-8 space-y-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-sm animate-pulse"></div>
                      <div className="w-8 h-2 bg-blue-400 rounded-sm opacity-60"></div>
                      <div className="w-4 h-2 bg-purple-400 rounded-sm opacity-40"></div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-cyan-400 rounded-sm opacity-60"></div>
                      <div className="w-6 h-2 bg-yellow-400 rounded-sm opacity-40"></div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-2 bg-pink-400 rounded-sm opacity-50"></div>
                      <div className="w-10 h-2 bg-indigo-400 rounded-sm opacity-30"></div>
                    </div>
                  </div>

                  {/* Network Connections */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                      </linearGradient>
                    </defs>
                    <path d="M 64 64 Q 200 100 240 120" 
                          stroke="url(#connectionGradient)" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <path d="M 80 80 Q 150 200 180 240" 
                          stroke="url(#connectionGradient)" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeDasharray="3,7">
                      <animate attributeName="stroke-dashoffset" values="0;-10" dur="3s" repeatCount="indefinite"/>
                    </path>
                  </svg>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center animate-float opacity-80 shadow-lg shadow-blue-500/25">
                  <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-float-delayed opacity-60 shadow-lg shadow-purple-500/25"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-float-slow opacity-70 shadow-lg shadow-green-500/25"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Developer Experience Platform
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">Elevate Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Developer Experience
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              Empower your development teams with insights, tools, and best practices 
              that transform productivity and satisfaction across your entire organization.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
              <Link
                to="/getting-started"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <span className="relative">Get Started</span>
                <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-white/10">
                <div className="absolute inset-0 bg-white/5 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Play className="relative mr-2 h-5 w-5 text-gray-300" />
                <span className="relative">Watch Demo</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg mb-4 border border-blue-500/20">
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