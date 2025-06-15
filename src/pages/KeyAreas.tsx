import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { DEVEX_KEY_AREAS } from '../utils/constants';

const KeyAreas: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
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
                  src="/image copy copy copy copy.png"
                  alt="Developer experience key areas with automation, AI, workflows, and network connections"
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
                Essential DevEx Components
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                <span className="block">Key Areas of</span>
                <span className="block text-gray-600 dark:text-gray-400">
                  Developer Experience
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Ten foundational areas for improving developer experience and productivity 
                across your organization. From tooling to culture, these components shape 
                how developers work and feel about their daily tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEVEX_KEY_AREAS.map((area, index) => (
              <div key={area.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-sm font-semibold mr-3">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
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
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Key Metrics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {area.keyMetrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2 py-1 text-xs bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Special callout for Performance Metrics */}
                {area.id === 'performance-metrics' && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Featured Framework:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      See how Spotify measures DevEx and productivity with platform insights and OKRs in their comprehensive approach to metrics-driven developer productivity.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
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
            ))}
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
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                DORA Metrics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Four key metrics that indicate the performance of software development and delivery:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Deployment Frequency:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">How often code is deployed to production</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Lead Time for Changes:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Time from code commit to production</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Change Failure Rate:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Percentage of deployments causing failures</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Time to Recovery:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Time to restore service after failure</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* SPACE Framework */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                SPACE Framework
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Five dimensions for measuring developer productivity holistically:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Satisfaction:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Developer fulfillment and well-being</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Performance:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Outcome of systems and processes</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Activity:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">Count of actions or outputs</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Communication:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">How people and teams collaborate</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Start Measuring Your Developer Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Learn how to implement these frameworks and start tracking the metrics that matter most to your team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/metrics"
              className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg transition-all duration-200"
            >
              Explore Metrics
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/getting-started"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
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