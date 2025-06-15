import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { MetricData } from '../../types';
import { formatMetricValue, getMetricColor } from '../../utils/metrics';

interface MetricChartProps {
  data: MetricData[];
  type: 'line' | 'bar' | 'radar';
  timeRange: string;
  comparison?: boolean;
}

const MetricChart: React.FC<MetricChartProps> = ({
  data,
  type = 'line',
  timeRange,
  comparison = false
}) => {
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4" />;
      case 'down':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const generateSimpleChart = (metric: MetricData) => {
    const points = 12;
    const baseValue = metric.value;
    const variation = baseValue * 0.2;
    
    const dataPoints = Array.from({ length: points }, (_, i) => {
      const factor = metric.trend === 'up' ? (i / points) * 0.3 : 
                    metric.trend === 'down' ? -(i / points) * 0.3 : 0;
      return baseValue + factor + (Math.random() - 0.5) * variation;
    });

    const max = Math.max(...dataPoints);
    const min = Math.min(...dataPoints);
    const range = max - min || 1;

    const pathData = dataPoints
      .map((value, index) => {
        const x = (index / (points - 1)) * 100;
        const y = 100 - ((value - min) / range) * 100;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');

    return pathData;
  };

  if (type === 'line') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((metric) => (
          <div key={metric.id} className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {metric.name}
              </h3>
              <div className={`flex items-center space-x-1 ${getMetricColor(metric.trend, metric.category)}`}>
                {getTrendIcon(metric.trend)}
                <span className="text-sm font-medium">
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
              </div>
            </div>

            {/* Value */}
            <div className="mb-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatMetricValue(metric.value, metric.category)}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {metric.period}
              </div>
            </div>

            {/* Mini Chart */}
            <div className="h-16 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`gradient-${metric.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" className="stop-blue-500" stopOpacity="0.3" />
                    <stop offset="100%" className="stop-blue-500" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={`${generateSimpleChart(metric)} L 100 100 L 0 100 Z`}
                  fill={`url(#gradient-${metric.id})`}
                  className="fill-blue-500/20 dark:fill-blue-400/20"
                />
                <path
                  d={generateSimpleChart(metric)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-blue-600 dark:text-blue-400"
                />
              </svg>
            </div>

            {/* Time Range */}
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Last {timeRange === '7d' ? '7 days' : timeRange === '30d' ? '30 days' : '90 days'}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'bar') {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Metrics Overview
          </h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Last {timeRange === '7d' ? '7 days' : timeRange === '30d' ? '30 days' : '90 days'}
          </div>
        </div>

        <div className="space-y-4">
          {data.map((metric) => {
            const percentage = Math.min((metric.value / 100) * 100, 100);
            return (
              <div key={metric.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {metric.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {formatMetricValue(metric.value, metric.category)}
                    </span>
                    <div className={`flex items-center ${getMetricColor(metric.trend, metric.category)}`}>
                      {getTrendIcon(metric.trend)}
                      <span className="text-xs ml-1">
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Radar chart would need a more complex implementation
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Radar Chart (Coming Soon)
      </h3>
      <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
        Radar chart visualization will be implemented here
      </div>
    </div>
  );
};

export default MetricChart;