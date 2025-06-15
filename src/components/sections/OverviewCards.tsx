import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DEVEX_KEY_AREAS } from '../../utils/constants';

const OverviewCards: React.FC = () => {
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
          {DEVEX_KEY_AREAS.slice(0, 4).map((area, index) => (
            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                  {index + 1}
                </span>
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
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{metric}</span>
                  </div>
                ))}
                {area.keyMetrics.length > 3 && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    +{area.keyMetrics.length - 3} more metrics
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {DEVEX_KEY_AREAS.slice(4, 8).map((area, index) => (
            <div key={index + 4} className="group relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                  {index + 5}
                </span>
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
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{metric}</span>
                  </div>
                ))}
                {area.keyMetrics.length > 3 && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    +{area.keyMetrics.length - 3} more metrics
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {DEVEX_KEY_AREAS.slice(8, 10).map((area, index) => (
            <div key={index + 8} className="group relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                  {index + 9}
                </span>
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
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{metric}</span>
                  </div>
                ))}
                {area.keyMetrics.length > 3 && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    +{area.keyMetrics.length - 3} more metrics
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            to="/key-areas"
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Explore Detailed Guides
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OverviewCards;