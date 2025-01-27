import React from 'react';
import { Bar } from '@ant-design/charts';

const Purchase = () => {
  const data = [
    { year: 'A00008', value: 2200000 }, // Use numeric values
    { year: 'A00009', value: 1900000 },
    { year: 'A00002', value: 2100000 },
    { year: 'A20001', value: 2400000 },
    { year: 'A00001', value: 2000000 },
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
      <h1 className="fs-4">Top 5 Best-selling Items by Sales Amount</h1>
      <Bar {...config} />
    </div>
  );
};

export default Purchase;
