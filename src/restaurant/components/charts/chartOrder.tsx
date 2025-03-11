import React from "react";
import ApexCharts from "react-apexcharts";

interface ChartOrderProps {
  datalist: { hour: string; paid_count: string; unpaid_count: string }[];
}

const ChartOrder: React.FC<ChartOrderProps> = ({ datalist }) => {
  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name: "Paid",
        data: datalist.map((data) => parseInt(data.paid_count,10)), // Convert the paid_count to integers
      },
      {
        name: "Unpaid",
        data: datalist.map((data) => parseInt(data.unpaid_count,10)), // Convert the unpaid_count to integers
      },
    ],
    chart: {
      height: 285,
      type: "area",
    },
    colors: ["#247f00","#FF5733" ], 
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1.5,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical", // You can also use 'horizontal' or 'diagonal'
        shadeIntensity: 0.5,
        gradientToColors: ["#FFC300", "#28A745"], // Gradient color for each series
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    xaxis: {
      type: "category", // Changed to 'category' for strings (hours)
      categories: datalist.map((data) => data.hour), // Dynamically generate categories from datalist
    },
    tooltip: {
      x: {
        format: "HH:mm",
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

  return (
    <div>
      <h1 className='text-[16px] font-bold pl-5'>ກຣາບອໍເດີ</h1>
      <ApexCharts
        options={options}
        series={options.series} // Use the updated series from options
        type="area"
        height={285}
      />
    </div>
  );
};

export default ChartOrder;
