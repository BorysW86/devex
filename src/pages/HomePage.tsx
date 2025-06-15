import React from 'react';
import Hero from '../components/sections/Hero';
import OverviewCards from '../components/sections/OverviewCards';
import MetricChart from '../components/common/MetricChart';
import { SAMPLE_METRICS } from '../utils/constants';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <OverviewCards />
      
      {/* Metrics Preview Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Track What Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Monitor key developer experience metrics to drive continuous improvement
            </p>
          </div>
          
          <MetricChart 
            data={SAMPLE_METRICS} 
            type="line" 
            timeRange="30d" 
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;