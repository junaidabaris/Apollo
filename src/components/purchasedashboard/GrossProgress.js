import React from 'react';
import { Line } from '@ant-design/charts';

const GrossProgress = () => {
  const data = [
    { month: '2024-09', category: 'Revenue', value: 2500000 },
    { month: '2024-10', category: 'Revenue', value: 2300000 },
    { month: '2024-11', category: 'Revenue', value: 2400000 },
    { month: '2024-12', category: 'Revenue', value: 2600000 },
    { month: '2025-01', category: 'Revenue', value: 1500000 },
    { month: '2024-09', category: 'Gross Profit', value: 2000000 },
    { month: '2024-10', category: 'Gross Profit', value: 1800000 },
    { month: '2024-11', category: 'Gross Profit', value: 1900000 },
    { month: '2024-12', category: 'Gross Profit', value: 2100000 },
    { month: '2025-01', category: 'Gross Profit', value: 1200000 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'month',
    yField: 'value',
    seriesField: 'category', // Differentiates between Revenue and Gross Profit
    xAxis: {
      label: {
        autoRotate: true,
      },
    },
    yAxis: {
      label: {
        formatter: (v) => `${(v / 1000000).toFixed(1)}M`, // Formats as "M"
      },
    },
    point: {
      size: 4,
      shape: 'circle',
    },
    tooltip: {
      showMarkers: true,
      customContent: (title, items) => {
        return `<div style="padding: 10px;">
          <h4>${title}</h4>
          ${items
            .map(
              (item) =>
                `<div style="margin-bottom: 8px;">
                  <span style="color: ${item.color}; font-weight: bold;">${item.name}</span>: 
                  <span>${(item.data.value / 1000000).toFixed(1)}M</span>
                </div>`
            )
            .join('')}
        </div>`;
      },
    },
    smooth: true, // Makes the lines smooth
    legend: {
      position: 'top',
    },
  };

  return (
    <div className="card">
      <h1 className="fs-4">Revenue Versus Gross Profit for Last 6 Months</h1>
      <Line {...config} />
    </div>
  );
};

export default GrossProgress;
