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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/image copy.png"
                alt="Developer working with modern tools and analytics"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
              />
              {/* Floating elements for visual enhancement */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-float-delayed opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-500 rounded-full animate-float-slow opacity-70"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 animate-pulse"></span>
              Developer Experience Platform
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="block">Elevate Your</span>
              <span className="block text-gray-600 dark:text-gray-400">
                Developer Experience
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Empower your development teams with insights, tools, and best practices 
              that transform productivity and satisfaction across your entire organization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-16">
              <Link
                to="/getting-started"
                className="group inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
                <Play className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-400" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
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