import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DEVEX_KEY_AREAS } from '../../utils/constants';

const OverviewCards: React.FC = () => {
  // Show first 4 areas as preview
  const previewAreas = DEVEX_KEY_AREAS.slice(0, 4);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Key Areas of Developer Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the essential components that make up an exceptional developer experience
            and learn how to optimize each area for maximum impact.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewAreas.map((area, index) => (
            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <span className="text-lg font-bold text-gray-600 dark:text-gray-400">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                {area.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {area.summary}
              </p>

              {/* Metrics Preview */}
              <div className="space-y-2 mb-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Key Metrics:
                </div>
                {area.keyMetrics.slice(0, 2).map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                    {metric}
                  </div>
                ))}
                {area.keyMetrics.length > 2 && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    +{area.keyMetrics.length - 2} more
                  </div>
                )}
              </div>

              {/* Learn More Link */}
              <Link
                to="/key-areas"
                className="inline-flex items-center text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors group/link"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            to="/key-areas"
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Explore All Areas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OverviewCards;