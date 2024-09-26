// ChartComponent.tsx
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const ChartComponent: React.FC = () => {
  const options: ApexOptions = {
    series: [
      {
        name: 'series1',
        data: [321, 400, 258, 501, 482, 409, 100]
      },
      {
        name: 'series2',
        data: [411, 321, 445, 302, 304, 522, 421]
      }
    ],
    chart: {
      height: 350,
      type: 'area'
    },
    colors: ['#FF5733', 'green'], // Define colors for each series
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width:1.5,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical', // You can also use 'horizontal' or 'diagonal'
        shadeIntensity: 0.5,
        gradientToColors: ['#FFC300', '#4CAF50'], // Colors for the gradient
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100]
      }
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  };

  return (
    <div>
      <h1>Area Chart Example</h1>
      <ApexCharts
        options={options}
        series={options.series} // Correctly use the series from options
        type="area"
        height={350}
      />
    </div>
  );
};

export default ChartComponent;
