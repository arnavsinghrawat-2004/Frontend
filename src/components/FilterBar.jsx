import { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [rankBy, setRankBy] = useState('Organizations');
  const [advisorType, setAdvisorType] = useState('Financial Advisor');
  const [metric, setMetric] = useState('Deal Volume');
  const [breakdownBy, setBreakdownBy] = useState('Year');

  const rankOptions = ['Organizations', 'Individuals', 'Regions', 'Sectors'];
  const advisorOptions = ['Financial Advisor'];
  const metricOptions = ['Deal Volume', 'Deal Count'];
  const breakdownOptions = ['Year', 'Month', 'Sector', 'Region', 'None'];

  const handleRankChange = (value) => {
    setRankBy(value);
    onFilterChange?.({ rankBy: value, advisorType, metric, breakdownBy });
  };

  const handleAdvisorChange = (value) => {
    setAdvisorType(value);
    onFilterChange?.({ rankBy, advisorType: value, metric, breakdownBy });
  };

  const handleMetricChange = (value) => {
    setMetric(value);
    onFilterChange?.({ rankBy, advisorType, metric: value, breakdownBy });
  };

  const handleBreakdownChange = (value) => {
    setBreakdownBy(value);
    onFilterChange?.({ rankBy, advisorType, metric, breakdownBy: value });
  };

  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-dark-secondary border-b border-dark-border">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400 uppercase tracking-wide">Rank</label>
        <select
          value={rankBy}
          onChange={(e) => handleRankChange(e.target.value)}
          className="px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white min-w-[150px] hover:border-blue-accent focus:outline-none focus:border-blue-accent focus:ring-1 focus:ring-blue-accent"
        >
          {rankOptions.map(option => (
            <option key={option} value={option} className="bg-dark-primary">{option}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400 uppercase tracking-wide">Financial Advisor</label>
        <select
          value={advisorType}
          onChange={(e) => handleAdvisorChange(e.target.value)}
          className="px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white min-w-[200px] hover:border-blue-accent focus:outline-none focus:border-blue-accent focus:ring-1 focus:ring-blue-accent"
        >
          {advisorOptions.map(option => (
            <option key={option} value={option} className="bg-dark-primary">{option}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400 uppercase tracking-wide">By</label>
        <select
          value={metric}
          onChange={(e) => handleMetricChange(e.target.value)}
          className="px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white min-w-[150px] hover:border-blue-accent focus:outline-none focus:border-blue-accent focus:ring-1 focus:ring-blue-accent"
        >
          {metricOptions.map(option => (
            <option key={option} value={option} className="bg-dark-primary">{option}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400 uppercase tracking-wide">Breakdown By</label>
        <select
          value={breakdownBy}
          onChange={(e) => handleBreakdownChange(e.target.value)}
          className="px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white min-w-[150px] hover:border-blue-accent focus:outline-none focus:border-blue-accent focus:ring-1 focus:ring-blue-accent"
        >
          {breakdownOptions.map(option => (
            <option key={option} value={option} className="bg-dark-primary">{option}</option>
          ))}
        </select>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="px-4 py-2 bg-blue-accent text-white rounded text-sm hover:bg-blue-hover transition-colors">
          Optimize Filter
        </button>
        <button className="p-2 border border-dark-border rounded text-white hover:border-blue-accent hover:text-blue-accent transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="4" width="16" height="2" rx="1" fill="currentColor"/>
            <rect x="2" y="9" width="16" height="2" rx="1" fill="currentColor"/>
            <rect x="2" y="14" width="16" height="2" rx="1" fill="currentColor"/>
          </svg>
        </button>
        <button className="p-2 border border-dark-border rounded text-white hover:border-blue-accent hover:text-blue-accent transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2v12M10 14l-4-4m4 4l4-4M3 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
