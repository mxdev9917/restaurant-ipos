import ApexCharts from 'react-apexcharts';

function ChartTopProToDay() {
  const options: ApexCharts.ApexOptions = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
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
      categories: [
        'Product A', 'Product B', 'Product C', 'Product D', 'Product E',
        'Product F', 'Product G', 'Product H', 'Product I', 'Product J'
      ]
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
}

export default ChartTopProToDay;