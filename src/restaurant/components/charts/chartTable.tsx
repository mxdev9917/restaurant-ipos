import React from "react";
import ApexCharts from "react-apexcharts";
import { useTranslation } from "react-i18next";

interface ChartTableProps {
  datalist: {
    hour: string;
    reserved_count: string;
    busy_count: string;
    empty_count: string;
  }[];
}

const ChartTable: React.FC<ChartTableProps> = ({ datalist }) => {
  const { t } = useTranslation();
  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name:t("reserved"),
        data: datalist.map((data) => parseInt(data.reserved_count, 10)), // Use reserved_count data
      },
      {
        name: t("busy"),
        data: datalist.map((data) => parseInt(data.busy_count, 10)), // Use busy_count data
      },
      {
        name: t("none"),
        data: datalist.map((data) => parseInt(data.empty_count, 10)), // Use empty_count data
      },
    ],
    chart: {
      height: 285,
      type: "area",
      fontFamily: 'Noto Sans Lao, sans-serif'
    },
    colors: ["#faca15", "#e02424", "#0e9f6e"], // Removed extra space in color
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
        gradientToColors: ["#faca15", "#e02424", "#0e9f6e"], // Gradient colors for each series
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    xaxis: {
      type: "category", // Use 'category' because we're using hours (strings) as categories
      categories: datalist.map((data) => data.hour), // Use hour values from datalist
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}`, // Shows the value of the series when hovered
      },
      x: {
        format: "HH:mm", // Format for the x-axis tooltip
      },
    },
    noData: {
      text: t("noIem"),
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
      <h1 className='text-[16px] font-bold pl-5'>{t("tableGrab")}</h1>
      <ApexCharts
        options={options}
        series={options.series} // Use the updated series from options
        type="area"
        height={285}
      />
    </div>
  );
};

export default ChartTable;
