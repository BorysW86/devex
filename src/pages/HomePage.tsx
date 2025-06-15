import React from 'react';
import Hero from '../components/sections/Hero';
import OverviewCards from '../components/sections/OverviewCards';
import MetricChart from '../components/common/MetricChart';
import { SAMPLE_METRICS } from '../utils/constants';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Zap, 
  Target, 
  Clock, 
  Shield,
  Award,
  Lightbulb,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const HomePage: React.FC = () => {
  const businessBenefits = [
    {
      icon: TrendingUp,
      title: 'Enhanced Productivity and Efficiency',
      description: 'Streamlined workflows and optimized tools lead to measurable productivity gains across development teams.',
      metrics: ['40% faster delivery', 'Reduced cycle time', 'Higher throughput']
    },
    {
      icon: Lightbulb,
      title: 'Innovation and Competitive Advantage',
      description: 'Better developer experience enables teams to focus on innovation rather than fighting tools and processes.',
      metrics: ['More time for innovation', 'Faster feature delivery', 'Market responsiveness']
    },
    {
      icon: DollarSign,
      title: 'Operational Efficiency and Cost Savings',
      description: 'Reduced technical debt, fewer bugs, and optimized processes translate to significant cost reductions.',
      metrics: ['Lower maintenance costs', 'Reduced bug fixing time', 'Efficient resource usage']
    },
    {
      icon: Users,
      title: 'Retention and Recruitment of Top Talent',
      description: 'Great developer experience attracts and retains the best developers, reducing hiring and training costs.',
      metrics: ['Higher retention rates', 'Faster hiring', 'Improved team satisfaction']
    },
    {
      icon: Shield,
      title: 'Employee Satisfaction and Well-being',
      description: 'Developers with high-quality tools and processes report higher job satisfaction and lower stress levels.',
      metrics: ['Increased satisfaction', 'Better work-life balance', 'Reduced burnout']
    },
    {
      icon: Target,
      title: 'Alignment with Business Goals',
      description: 'Clear processes and efficient workflows ensure development efforts align with strategic business objectives.',
      metrics: ['Better goal alignment', 'Strategic focus', 'Measurable outcomes']
    }
  ];

  const impactAreas = [
    {
      category: 'Productivity',
      items: [
        { label: 'Baselines for actions', description: 'Establish clear metrics and benchmarks' },
        { label: 'Focus of biggest problems', description: 'Identify and prioritize critical issues' },
        { label: 'Better quality', description: 'Improved code quality and fewer defects' }
      ],
      color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
    },
    {
      category: 'Efficiency',
      items: [
        { label: 'Possibility to observe trends', description: 'Track performance over time' },
        { label: 'Clear metrics on various levels', description: 'Multi-level visibility and insights' },
        { label: 'Faster time to market', description: 'Accelerated delivery cycles' }
      ],
      color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
    },
    {
      category: 'Alignment',
      items: [
        { label: 'Aligned processes', description: 'Consistent workflows across teams' },
        { label: 'Aligned processes', description: 'Standardized development practices' }
      ],
      color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
    }
  ];

  const keyOutcomes = [
    {
      title: 'Maximized Productivity',
      description: 'Teams achieve higher output with better quality through optimized workflows and reduced friction.',
      icon: BarChart3,
      stats: ['40% productivity increase', '60% faster onboarding', '50% fewer blockers']
    },
    {
      title: 'Improved Developer Experience',
      description: 'Developers report higher satisfaction, better work-life balance, and increased engagement.',
      icon: Award,
      stats: ['85% satisfaction rate', '30% less burnout', '25% higher retention']
    },
    {
      title: 'Positive Business Impact',
      description: 'Organizations see measurable improvements in delivery speed, quality, and cost efficiency.',
      icon: TrendingUp,
      stats: ['2x faster delivery', '50% fewer bugs', '30% cost reduction']
    }
  ];

  // Animated stats for metrics section
  const metricsStats = [
    {
      icon: TrendingUp,
      value: '4.2',
      label: 'Deployments/Week',
      trend: 'up',
      change: '+15%'
    },
    {
      icon: Clock,
      value: '2.5',
      label: 'Days Lead Time',
      trend: 'down',
      change: '-20%'
    },
    {
      icon: Award,
      value: '8.1',
      label: 'Developer Satisfaction',
      trend: 'up',
      change: '+8%'
    },
    {
      icon: Shield,
      value: '92%',
      label: 'Code Quality Score',
      trend: 'stable',
      change: '+2%'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <OverviewCards />
      
      {/* Why DevEx Matters for Management */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why DevEx Matters for Management
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Understanding the business impact and strategic value of investing in developer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="space-y-2">
                  {benefit.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Impact Areas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Focus areas where developer experience improvements deliver the most significant business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className={`rounded-xl border-2 p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${area.color}`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {area.category}
                </h3>
                
                <div className="space-y-4">
                  {area.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {item.label}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get - Key Outcomes */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Measurable outcomes and benefits from investing in developer experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {keyOutcomes.map((outcome, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full shadow-lg mb-4">
                    <outcome.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {outcome.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {outcome.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center justify-center">
                      <span className="inline-flex items-center px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 shadow-sm">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                        {stat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Metrics Preview Section with Animated Stats */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Track What Matters
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Monitor key developer experience metrics to drive continuous improvement
            </p>
          </div>
          
          {/* Animated Stats Strip */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8 mb-12 shadow-2xl shadow-blue-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metricsStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl mb-4 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300 shadow-lg">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm mb-2">
                    {stat.label}
                  </div>
                  <div className={`text-xs font-medium ${
                    stat.trend === 'up' ? 'text-green-400' : 
                    stat.trend === 'down' ? 'text-red-400' : 
                    'text-gray-400'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <MetricChart 
            data={SAMPLE_METRICS} 
            type="line" 
            timeRange="30d" 
          />

          <div className="text-center mt-12">
            <Link
              to="/metrics"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="relative">Explore All Metrics</span>
              <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Developer Experience?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Start your journey towards better productivity, satisfaction, and business outcomes
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/getting-started"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
              <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/what-is-devex"
              className="group relative inline-flex items-center px-8 py-4 bg-white/10 dark:bg-gray-800 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;