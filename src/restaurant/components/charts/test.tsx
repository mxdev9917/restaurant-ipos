import React, { useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartsMenuItemProps {
  datalist: { hour: string; qty: number }[];
}

const chartsMenuItem: React.FC<ChartsMenuItemProps> = ({ datalist }) => {
  useEffect(() => {
    console.log(datalist);
  }, [datalist]);

  // Ensure 'hour' is in a valid datetime format
  const hours = datalist.map(item => item.hour);
  const Qtys = datalist.map(item => item.qty);

  const options: ApexOptions = {
    series: [
      {
        name: 'Series 1',
        data: Qtys,
      },
    ],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: ['#FF5733'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 1.5,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#FFC300'],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    xaxis: {
      type: 'datetime',
      categories: hours,
      labels: {
        format: 'dd/MM',
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
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

export default chartsMenuItem;
