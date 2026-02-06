import { useState } from 'react';
import FilterSettings from './FilterSettings';
import FilterBar from './FilterBar';
import DataTable from './DataTable';

const LeagueTable = () => {
  const [filters, setFilters] = useState({
    rankBy: 'Organizations',
    advisorType: 'Financial Advisor',
    metric: 'Deal Volume',
    breakdownBy: 'Year'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // This is where you'll add the logic to fetch/update data based on filters
    // For now, just storing the filter state
    console.log('Filters changed:', newFilters);
  };

  return (
    <div className="flex h-screen bg-dark-primary overflow-hidden">
      {/* Filter Settings Sidebar (Left) */}
      {/* Main Content Area (Right) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-primary border-b border-dark-border">
          <div className="flex items-center gap-1">
            <button className="px-4 py-2 bg-blue-accent text-white rounded text-sm hover:bg-blue-hover transition-colors">
              Screener
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm">
              PR Firms 2026 YTD
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm">
              Legal Advisors 2026 YTD
            </button>
            <button className="px-4 py-2 text-white border-b-2 border-white transition-colors text-sm">
              Financial Advisors 2026 YTD
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-blue-accent text-white rounded text-sm hover:bg-blue-hover transition-colors">
              Save Search
            </button>
            <select className="px-3 py-2 bg-dark-secondary border border-dark-border rounded text-sm text-white">
              <option>USD</option>
            </select>
            <a href="#" className="text-gray-400 hover:text-white text-sm flex items-center gap-1">
              Go to Classic
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        <FilterBar onFilterChange={handleFilterChange} />

        <div className="flex-1 overflow-y-auto">
          <DataTable breakdownBy={filters.breakdownBy} />
        </div>
      </div>
    </div>
  );
};

export default LeagueTable;
