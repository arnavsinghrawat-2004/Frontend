const DataTable = ({ data, breakdownBy }) => {
  const sampleData = [
    { rank: 1, name: 'Goldman Sachs', dealVolume2026: 1250, dealCount2026: 45, mktShare2026: 12.5, dealVolume2025: 1100, dealCount2025: 42, mktShare2025: 11.2, trend: 'up' },
    { rank: 2, name: 'JPMorgan', dealVolume2026: 1180, dealCount2026: 43, mktShare2026: 11.8, dealVolume2025: 1050, dealCount2025: 40, mktShare2025: 10.7, trend: 'up' },
    { rank: 3, name: 'Morgan Stanley', dealVolume2026: 980, dealCount2026: 38, mktShare2026: 9.8, dealVolume2025: 920, dealCount2025: 35, mktShare2025: 9.4, trend: 'up' },
    { rank: 4, name: 'BofA Securities', dealVolume2026: 850, dealCount2026: 32, mktShare2026: 8.5, dealVolume2025: 800, dealCount2025: 30, mktShare2025: 8.2, trend: 'up' },
    { rank: 5, name: 'Citi', dealVolume2026: 720, dealCount2026: 28, mktShare2026: 7.2, dealVolume2025: 680, dealCount2025: 26, mktShare2025: 6.9, trend: 'up' },
  ];

  const displayData = data || sampleData;

  const formatCurrency = (value) => {
    return `$${value.toLocaleString()}`;
  };

  const totalDealVolume2026 = displayData.reduce((sum, item) => sum + item.dealVolume2026, 0);
  const totalDealCount2026 = displayData.reduce((sum, item) => sum + item.dealCount2026, 0);
  const totalDealVolume2025 = displayData.reduce((sum, item) => sum + item.dealVolume2025, 0);
  const totalDealCount2025 = displayData.reduce((sum, item) => sum + item.dealCount2025, 0);

  return (
    <div className="p-4 bg-dark-primary">
      
      {/* SCROLL CONTAINER */}
      <div className="overflow-x-auto custom-scrollbar">
        
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-dark-secondary">
              <th colSpan="5" className="px-4 py-3 text-center text-sm font-semibold text-white border-b-2 border-dark-border min-w-[80px]">
                Total
              </th>
              <th colSpan="4" className="px-4 py-3 text-center text-sm font-semibold text-white border-b-2 border-dark-border bg-dark-tertiary">
                2026
              </th>
              <th colSpan="4" className="px-4 py-3 text-center text-sm font-semibold text-white border-b-2 border-dark-border bg-dark-tertiary">
                2025
              </th>
            </tr>

            <tr className="bg-dark-secondary">
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Rank</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Financial Advisor</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Deal Volume $m</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Deal Count</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Mkt Share by Amount %</th>

              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Rank</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Deal Volume $m</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Deal Count</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Mkt Share by Amount %</th>

              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Rank</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Deal Volume $m</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Deal Count</th>
              <th className="px-4 py-2 text-center text-xs text-white-200 font-medium">Mkt Share by Amount %</th>
            </tr>
          </thead>

          <tbody>
            {displayData.map((row, index) => (
              <tr key={index} className="border-b border-dark-border hover:bg-dark-secondary/50 transition-colors">
                <td className="px-4 py-3 text-center text-gray-400">{row.rank}</td>
                <td className="px-4 py-3 flex items-center gap-2 text-white font-medium">
                  <span className="text-blue-accent cursor-pointer text-xl hover:text-blue-hover transition-colors">›</span>
                  {row.name}
                </td>
                <td className="px-4 py-3 text-center text-gray-200">{formatCurrency(row.dealVolume2026)}</td>
                <td className="px-4 py-3 text-center text-gray-200">{row.dealCount2026}</td>
                <td className="px-4 py-3 text-center text-gray-200">{row.mktShare2026}%</td>
                <td className="px-4 py-3 text-center text-gray-200">{formatCurrency(row.dealVolume2025)}</td>
                <td className="px-4 py-3 text-center text-gray-200">{row.dealCount2025}</td>
                <td className="px-4 py-3 text-center text-gray-200">{row.mktShare2025}%</td>
              </tr>
            ))}

            <tr className="bg-dark-secondary font-semibold">
              <td colSpan="2" className="px-4 py-3 text-white">
                {displayData.length} Total
              </td>
              <td className="px-4 py-3 text-white text-center">{formatCurrency(totalDealVolume2026)}</td>
              <td className="px-4 py-3 text-white text-center">{totalDealCount2026}</td>
              <td></td>
              <td className="px-4 py-3 text-white text-center">{formatCurrency(totalDealVolume2025)}</td>
              <td className="px-4 py-3 text-white text-center">{totalDealCount2025}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SCROLLBAR STYLE */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
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
      `}</style>
    </div>
  );
};

export default DataTable;
