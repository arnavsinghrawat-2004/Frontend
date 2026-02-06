# Project Structure

## Overview
This is a League Tables application built with React + Vite. The structure is designed to be easily extensible for adding filter functionality and data integration.

## Directory Structure

```
src/
├── components/
│   ├── LeagueTable.jsx    # Main component - orchestrates filters and table
│   ├── FilterBar.jsx      # Filter dropdowns component
│   └── DataTable.jsx     # Table display component
├── styles/
│   ├── LeagueTable.css   # Main page styles
│   ├── FilterBar.css     # Filter bar styles
│   └── DataTable.css     # Table styles
├── App.jsx               # Root component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Components

### LeagueTable.jsx
- Main container component
- Manages filter state
- Contains `handleFilterChange` callback ready for API integration
- Currently uses sample data

### FilterBar.jsx
- Four filter dropdowns:
  1. **Rank By**: Organizations, Individuals, Regions, Sectors
  2. **Financial Advisor**: Financial Advisor (only)
  3. **By**: Deal Volume, Deal Count
  4. **Breakdown By**: Year, Month, Sector, Region, None
- Calls `onFilterChange` callback when any filter changes
- Ready for API integration

### DataTable.jsx
- Displays league table data
- Accepts `data` prop and `breakdownBy` prop
- Currently uses sample data structure
- Ready to receive real data from API

## Adding Functionality

### To Add Filter Functionality:

1. **In LeagueTable.jsx**, update `handleFilterChange`:
```javascript
const handleFilterChange = async (newFilters) => {
  setFilters(newFilters);
  // Add API call here
  const data = await fetchLeagueTableData(newFilters);
  setTableData(data);
};
```

2. **Add API service** (create `src/services/api.js`):
```javascript
export const fetchLeagueTableData = async (filters) => {
  // API call implementation
};
```

3. **Update DataTable** to use real data:
```javascript
<DataTable data={tableData} breakdownBy={filters.breakdownBy} />
```

## Filter Options

- **Rank By**: Organizations | Individuals | Regions | Sectors
- **Financial Advisor**: Financial Advisor
- **By**: Deal Volume | Deal Count
- **Breakdown By**: Year | Month | Sector | Region | None

All filter handlers are in place and ready for integration.
