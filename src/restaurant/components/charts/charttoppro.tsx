import ApexCharts from 'react-apexcharts';

interface ChartTopProProps {
  datalist: { food_name: string; total_quantity: number }[]; // Assuming datalist is an array of objects
}

const ChartTopPro: React.FC<ChartTopProProps> = ({ datalist }) => {
  // Extract food names and total prices from datalist
  const foodNames = datalist.map(item => item.food_name);
  const totalQty = datalist.map(item => item.total_quantity);

  const options: ApexCharts.ApexOptions = {
    series: [{
      data: totalQty // Use the extracted total prices array
    }],
    chart: {
      type: 'bar' as const, // Ensure this is a valid type
      height: 350,
      toolbar: {
        show: true  // Show toolbar for interaction
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: foodNames // Use the extracted food names array
    },
    title: {
      text: 'Top 10 Products by Sales',
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#263238'
      }
    },
    colors: ['#FFA500']  // Set the color to orange
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>  {/* Center and constrain the chart */}
      <ApexCharts
        options={options}
        series={options.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ChartTopPro;
