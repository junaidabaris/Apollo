import React from 'react';
import { Bar } from '@ant-design/charts';

const Vendor = () => {
  const data = [
    { year: 'V10000', value: 2500000 }, // Use numeric values
    { year: 'V23000', value: 1000000 },
    { year: 'V50000', value: 1500000 },
    { year: 'V21000', value: 500000 },
    { year: 'V60000', value: 1300000 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    xAxis: {
      label: {
        autoHide: true, // Prevent overlapping labels
        autoRotate: true,
      },
    },
    yAxis: {
      label: {
        formatter: (v) => `${(v / 1000000).toFixed(1)}M`, // Format values as "M"
      },
    },
    tooltip: {
      customContent: (title, items) => {
        return `<div style="padding: 10px;">
          <h4>${title}</h4>
          ${items
            .map(
              (item) =>
                `<div style="margin-bottom: 8px;">
                  <span style="color: ${item.color}; font-weight: bold;">${item.data.year}</span>: 
                  <span>${(item.data.value / 1000000).toFixed(1)}M</span>
                </div>`
            )
            .join('')}
        </div>`;
      },
    },
    colorField: 'year', // Optional: Use different colors for each bar
    barWidthRatio: 0.6, // Adjust bar width
  };

  return (
    <div className="card">
      <h1 className="fs-4">Top 5 Vendor by payables overdue</h1>
      <Bar {...config} />
    </div>
  );
};

export default Vendor;
