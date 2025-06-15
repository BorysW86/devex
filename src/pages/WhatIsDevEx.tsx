import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, Brain, Zap, TrendingUp, Users, Target, CheckCircle, ExternalLink, BookOpen, Github, FileText } from 'lucide-react';
import Accordion from '../components/common/Accordion';
import Quote from '../components/common/Quote';
import { DEVEX_DIMENSIONS, DEVEX_RESOURCES } from '../utils/constants';
import * as Icons from 'lucide-react';

const WhatIsDevEx: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Streamlined workflows and better tools lead to faster delivery and higher output.'
    },
    {
      icon: CheckCircle,
      title: 'Higher Quality Code',
      description: 'Better testing tools and review processes result in fewer bugs and more maintainable code.'
    },
    {
      icon: Target,
      title: 'Enhanced Innovation',
      description: 'When developers spend less time on friction, they have more time for creative problem-solving.'
    },
    {
      icon: Users,
      title: 'Better Retention',
      description: 'Satisfied developers are more likely to stay, reducing turnover and knowledge loss.'
    }
  ];

  const accordionItems = DEVEX_DIMENSIONS.map(dimension => {
    const IconComponent = Icons[dimension.icon as keyof typeof Icons] as React.ComponentType<any>;
    
    return {
      id: dimension.id,
      title: dimension.title,
      icon: <IconComponent className="h-6 w-6 text-gray-600 dark:text-gray-400" />,
      content: (
        <div className="space-y-4">
          <p className="text-base leading-relaxed">
            {dimension.details}
          </p>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Metrics:</h4>
            <ul className="space-y-1">
              {dimension.keyMetrics.map((metric, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    };
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'Knowledge Base':
        return <BookOpen className="h-5 w-5" />;
      case 'Playbook':
        return <FileText className="h-5 w-5" />;
      case 'Resource Collection':
        return <Github className="h-5 w-5" />;
      case 'Guide':
        return <Target className="h-5 w-5" />;
      case 'Case Study':
        return <Users className="h-5 w-5" />;
      case 'Research':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'comprehensive':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      case 'enterprise':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'community':
        return 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800';
      case 'foundational':
        return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800';
      case 'case-study':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'research':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      default:
        return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What is Developer Experience (DevEx)?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            More than tools — it's how developers feel, think, and deliver.
          </p>
          
          {/* Pull Quote */}
          <Quote 
            text="Developer experience (DevEx) is concerned with how software developers feel about, think about, and value their work."
            author="LeadDev"
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* Definition and Why It Matters */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Definition and Why It Matters
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Developer Experience is a holistic concept that encompasses not just the tools and technologies 
              developers use, but also the processes, environments, and human elements that shape their daily work. 
              This includes psychological safety, clear goals, effective communication, and the overall culture 
              that enables developers to do their best work.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Research from McKinsey and DORA consistently shows that developer well-being and experience directly 
              correlate with business outcomes. Organizations with superior developer experience see higher 
              productivity, better retention rates, faster time-to-market, and improved software quality. 
              Investing in DevEx isn't just about making developers happy—it's a strategic business imperative.
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Dimensions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Three Core Dimensions of DevEx
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Understanding the fundamental aspects that drive developer experience
            </p>
          </div>

          <Accordion items={accordionItems} allowMultiple={true} />
        </div>
      </section>

      {/* Essential Resources */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Essential DevEx Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Curated collection of knowledge bases, guides, and research to deepen your understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVEX_RESOURCES.map((resource) => (
              <div key={resource.id} className={`rounded-lg border-2 p-6 hover:shadow-lg transition-all duration-300 ${getCategoryColor(resource.category)}`}>
                {/* Resource Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg mr-3 shadow-sm">
                      {getResourceIcon(resource.type)}
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Resource Content */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                {resource.subtitle && (
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    {resource.subtitle}
                  </p>
                )}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>

                {/* External Link */}
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  Explore Resource
                  <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters - Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Developer Experience Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Investing in DevEx delivers measurable business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg mr-4">
                    <benefit.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Improve Your Developer Experience?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Explore the key areas where you can make the biggest impact on your team's productivity and satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/key-areas"
              className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg transition-all duration-200"
            >
              Explore Key Areas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/metrics"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
            >
              View Metrics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsDevEx;