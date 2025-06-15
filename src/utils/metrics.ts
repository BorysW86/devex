import { MetricData } from '../types';

export const calculateTrendDirection = (current: number, previous: number): 'up' | 'down' | 'stable' => {
  const threshold = 0.05; // 5% threshold for stability
  const change = (current - previous) / previous;
  
  if (Math.abs(change) < threshold) return 'stable';
  return change > 0 ? 'up' : 'down';
};

export const formatMetricValue = (value: number, category: string): string => {
  switch (category) {
    case 'productivity':
    case 'satisfaction':
      return value.toFixed(1);
    case 'quality':
      return `${Math.round(value)}%`;
    case 'delivery':
      return value.toFixed(1);
    default:
      return value.toString();
  }
};

export const getMetricColor = (trend: 'up' | 'down' | 'stable', category: string): string => {
  // For some metrics, "down" is actually good (like lead time, bug count)
  const inverseMetrics = ['Lead Time', 'Bug Count', 'Time to Recovery'];
  const isInverse = inverseMetrics.some(metric => category.includes(metric));
  
  if (trend === 'stable') return 'text-gray-600 dark:text-gray-400';
  
  const isPositive = isInverse ? trend === 'down' : trend === 'up';
  return isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
};

export const generateChartData = (metrics: MetricData[], timeRange: string) => {
  // Simulate historical data for charts
  const dataPoints = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
  
  return metrics.map(metric => ({
    name: metric.name,
    data: Array.from({ length: dataPoints }, (_, i) => ({
      x: new Date(Date.now() - (dataPoints - i - 1) * 24 * 60 * 60 * 1000),
      y: metric.value + (Math.random() - 0.5) * metric.value * 0.2
    }))
  }));
};