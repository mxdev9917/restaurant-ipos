// Import React and the chart component
import ApexCharts from "react-apexcharts";

// Define the ChartchartKichen component
const ChartchartKichen = () => {
  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name: "series1",
        data: [321, 400, 258, 501, 482, 409, 100], // Keep only this series
      },
    ],
    chart: {
      height: 300,
      type: "area",
    },
    colors: ["#FF5733"], // Define color for the remaining series
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
        gradientToColors: ["#FFC300"], // Color for the gradient
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div>
      <h1>Area Chart Example</h1>
      <ApexCharts
        options={options}
        series={options.series} // Use the updated series from options
        type="area"
        height={300}
      />
    </div>
  );
};

// Define prop types
ChartchartKichen.propTypes = {
  // Removed series prop validation since we no longer use it
};

// Default props
ChartchartKichen.defaultProps = {
  // Removed series default props since we no longer use it
};

export default ChartchartKichen;
