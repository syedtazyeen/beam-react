import React from 'react';

const EventsShimmerTable: React.FC = () => {
  const shimmerRows = Array(5).fill(0).map((_, index) => (
    <tr key={index} className="animate-pulse">
      <td className=" py-4 whitespace-nowrap">
        <div className="h-24 bg-gray-200 rounded"></div>
      </td>
      <td className=" py-4 whitespace-nowrap">
        <div className="h-6 bg-gray-200 rounded"></div>
      </td>
      <td className=" py-4 whitespace-nowrap">
        <div className="h-6 bg-gray-200 rounded"></div>
      </td>
    </tr>
  ));

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className=" py-3 text-left text-xs font-medium tracking-wider">
            Events
          </th>
          <th className=" py-3 text-left text-xs font-medium tracking-wider">
            Status
          </th>
          <th className=" py-3 text-left text-xs font-medium tracking-wider">
            Date
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {shimmerRows}
      </tbody>
    </table>
  );
};

export default EventsShimmerTable;
