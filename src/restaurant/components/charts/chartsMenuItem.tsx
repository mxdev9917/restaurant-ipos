import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartsMenuItemProps {
  datalist: { hour: string; qty: string }[];
}

const ChartsMenuItem: React.FC<ChartsMenuItemProps> = ({ datalist }) => {
  // Transform datalist into the format ApexCharts expects
  const categories = datalist.map(item => item.hour);
  const seriesData = datalist.map(item => parseInt(item.qty, 10));

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'area',
      fontFamily: 'Noto Sans Lao, sans-serif'
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
      categories: categories,
    },
    tooltip: {
      x: {
        format: 'HH:mm',
      },
    },
    noData: {
      text: 'ຍັງບໍ່ມີລາຍການ',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontSize: '16px',
        color: '#888',
      },
    },
  };

  const series = [
    {
      name: 'ຈຳນວນ',
      data: seriesData,
    },
  ];

  return (
    <div>
      <h1 className='text-[16px] font-bold'>ກຣາບສັ່ງອາຫານ</h1>
      <ApexCharts
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default ChartsMenuItem;
