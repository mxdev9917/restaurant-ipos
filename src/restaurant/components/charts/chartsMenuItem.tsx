import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartsMenuItemProps {
  datalist: {
    hour: string;
    pending_qty: string;
    completed_qty: string;
    cancelled_qty: string;
    cooking_qty: string;
  }[];
}

const ChartsMenuItem: React.FC<ChartsMenuItemProps> = ({ datalist }) => {


  const series = [
    {
      name: 'ລໍຖ້າ', // Pending
      data: datalist.map(item => parseInt(item.pending_qty, 10)),
    },
    {
      name: 'ສຳເລັດ', // Completed
      data: datalist.map(item => parseInt(item.completed_qty, 10)),
    },
    {
      name: 'ຍົກເລີກ', // Cancelled
      data: datalist.map(item => parseInt(item.cancelled_qty, 10)),
    },
    {
      name: 'ກຳລັງເຮັດ', // Cooking
      data: datalist.map(item => parseInt(item.cooking_qty, 10)),
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'area',
      fontFamily: 'Noto Sans Lao, sans-serif',
      toolbar: { show: false },
    },
    colors: ['#FFA500', '#28A745', '#DC3545', '#FFD700'], // Orange, Green, Red, Yellow
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
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
   
    tooltip: {
      x: { format: 'HH:mm' },
      y: {
        formatter: (value) => `${value} ລາຍການ`,
      },
    },
    legend: { position: 'bottom' },
    noData: {
      text: 'ຍັງບໍ່ມີລາຍການ',
      align: 'center',
      verticalAlign: 'middle',
      style: { fontSize: '16px', color: '#888' },
    },
  };

  return (
    <div>
      <h1 className="text-[16px] font-bold mb-3">ກຣາບສັ່ງອາຫານ</h1>
      <ApexCharts options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default ChartsMenuItem;
