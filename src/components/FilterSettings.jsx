import { useState } from 'react';

const FilterSettings = () => {
  const [activeTab, setActiveTab] = useState('Filters');
  const [expandedSections, setExpandedSections] = useState({
    date: true,
    geography: true,
    sector: false,
    dealValue: false,
    dealDetails: false,
    dealParticipants: false,
    excludeDeals: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="w-100 p-6 bg-dark-secondary border-r border-dark-border h-screen overflow-y-auto flex flex-col custom-scrollbar">
      {/* Tabs */}
      <div className="flex border-b border-dark-border">
        <button
          onClick={() => setActiveTab('Filters')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'Filters'
              ? 'text-white border-b-2 border-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Filters
        </button>
        <button
          onClick={() => setActiveTab('Saved Searches')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
            activeTab === 'Saved Searches'
              ? 'text-white border-b-2 border-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          Saved Searches
        </button>
        <button
          onClick={() => setActiveTab('Recent')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
            activeTab === 'Recent'
              ? 'text-white border-b-2 border-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Recent
        </button>
      </div>

      {/* Filter Content */}
      {activeTab === 'Filters' && (
        <div className="flex-1 p-4 space-y-4">
          {/* Date Section */}
          <div className="border-b border-dark-border pb-4">
            <button
              onClick={() => toggleSection('date')}
              className="w-full flex items-center justify-between text-white font-medium mb-3"
            >
              <span>Date</span>
              <svg
                className={`w-5 h-5 transition-transform ${expandedSections.date ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.date && (
              <div className="space-y-3">
                <button className="w-full px-3 py-2 bg-blue-accent text-white rounded text-sm hover:bg-blue-hover transition-colors">
                  Saved Searches
                </button>
                <select className="w-full px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white">
                  <option>Type</option>
                </select>
                <select className="w-full px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white">
                  <option>Announcement date (excl. lapsed/withdrawn)</option>
                </select>
                <select className="w-full px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white">
                  <option>Dynamic</option>
                </select>
                <select className="w-full px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white">
                  <option>Last 12 Months (06 Feb 2025 - 06 Feb 2026)</option>
                </select>
              </div>
            )}
          </div>

          {/* Geography Section */}
          <div className="border-b border-dark-border pb-4">
            <button
              onClick={() => toggleSection('geography')}
              className="w-full flex items-center justify-between text-white font-medium mb-3"
            >
              <div className="flex items-center gap-2">
                <span>Geography</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <svg
                className={`w-5 h-5 transition-transform ${expandedSections.geography ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.geography && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Acquirer"
                    className="flex-1 px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white placeholder-gray-400"
                  />
                  <button className="px-3 py-2 bg-dark-tertiary border border-dark-border rounded text-sm text-white hover:bg-dark-border">
                    =
                  </button>
                  <button className="px-3 py-2 bg-dark-tertiary border border-dark-border rounded text-sm text-white hover:bg-dark-border">
                    ≠
                  </button>
                </div>
                <select className="w-full px-3 py-2 bg-dark-primary border border-dark-border rounded text-sm text-white">
                  <option>Select Geography</option>
                </select>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-accent/20 text-blue-accent rounded text-sm flex items-center gap-2">
                    Asia Pacific
                    <button className="hover:text-white">×</button>
                  </span>
                </div>
                <button className="w-full px-3 py-2 border border-dark-border rounded text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
                  + Add Criteria
                </button>
              </div>
            )}
          </div>

          {/* Collapsed Sections */}
          {['sector', 'dealValue', 'dealDetails', 'dealParticipants', 'excludeDeals'].map((section) => (
            <div key={section} className="border-b border-dark-border pb-4">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex items-center justify-between text-white font-medium capitalize"
              >
                <span>{section.replace(/([A-Z])/g, ' $1').trim()}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedSections[section] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Saved Searches Content */}
      {activeTab === 'Saved Searches' && (
        <div className="flex-1 p-4">
          <p className="text-gray-400 text-sm">No saved searches yet</p>
        </div>
      )}

      {/* Recent Content */}
      {activeTab === 'Recent' && (
        <div className="flex-1 p-4">
          <p className="text-gray-400 text-sm">No recent searches</p>
        </div>
      )}

      <style jsx>{
      `
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f172a;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `
      }</style>

    </div>

    
  );
};

export default FilterSettings;
