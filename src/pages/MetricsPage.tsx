import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, BarChart3, TrendingUp, Users, Target } from 'lucide-react';
import { METRICS_FRAMEWORKS } from '../utils/constants';

const MetricsPage: React.FC = () => {
  const overviewStats = [
    {
      title: 'Frameworks',
      value: '4+',
      description: 'Industry-standard measurement frameworks',
      icon: BarChart3
    },
    {
      title: 'Research Papers',
      value: '8+',
      description: 'Academic and industry research articles',
      icon: Target
    },
    {
      title: 'Organizations',
      value: '1000+',
      description: 'Companies using these frameworks',
      icon: Users
    },
    {
      title: 'Metrics',
      value: '50+',
      description: 'Individual metrics across all frameworks',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Developer Experience Metrics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Comprehensive frameworks and research for measuring developer productivity, satisfaction, and experience.
          </p>
          
          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {overviewStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-700 rounded-lg mb-3 shadow-sm">
                  <stat.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
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

      {/* Frameworks Section */}
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
            {METRICS_FRAMEWORKS.map((framework, index) => (
              <div key={framework.id} className={`rounded-xl border-2 ${framework.color} p-8`}>
                {/* Framework Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg text-xl font-bold text-gray-900 dark:text-white mr-4 shadow-sm">
                        {framework.name}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {framework.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      {framework.description}
                    </p>
                  </div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {framework.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                      {/* Article Type Badge */}
                      <div className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded mb-3">
                        {article.type}
                      </div>

                      {/* Article Content */}
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {article.title}
                      </h4>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                        {article.subtitle}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {article.description}
                      </p>

                      {/* Read More Link */}
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors group"
                      >
                        Read Article
                        <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive guide to measuring developer productivity
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              How to measure developer productivity?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              A comprehensive overview comparing DORA, SPACE, GSM, and DevEx frameworks, 
              helping you understand which metrics and approaches work best for your organization.
            </p>
            <a
              href="https://shiftmag.dev/how-to-measure-developer-productivity-dora-space-gsm-devex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors group"
            >
              Read Comprehensive Guide
              <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Implementation Guide CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Measuring?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Learn how to implement these frameworks in your organization with our step-by-step guides and templates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/getting-started"
              className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg transition-all duration-200"
            >
              Implementation Guide
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/templates"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
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