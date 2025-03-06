import ApexCharts from 'react-apexcharts';

interface ChartTopProProps {
  datalist: { food_name: string; total_quantity: number }[];
}

const ChartTopPro: React.FC<ChartTopProProps> = ({ datalist }) => {
  const foodNames = datalist.map(item => item.food_name);
  const totalQty = datalist.map(item => item.total_quantity);

  const options: ApexCharts.ApexOptions = {
    series: [{
      data: totalQty
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true
      },
      fontFamily: 'Noto Sans Lao, sans-serif' // Set the font family here
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
      categories: foodNames
    },
    title: {
      text: '10 ເມນູຂາຍດີ',
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#263238'
      }
    },
    colors: ['#FFA500']
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
