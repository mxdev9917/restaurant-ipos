import React from 'react';
import ApexCharts from 'react-apexcharts';

function ChartSales() {
    const options = {
        chart: {
            sparkline: {
                enabled: false
            },
            height: "100%",
            width: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
        },
        legend: {
            show: false
        },
        grid: {
            show: false,
        },
        xaxis: {
            show: true,
            categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: true,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                },
                formatter: function (value: string) {
                    return '$' + value;
                }
            }
        },
        series: [
            {
                name: "Developer Edition",
                data: [500, 1410, 145, 1502, 225, 900, 233],
                color: "#1A56DB",
            },
            {
                name: "Designer Edition",
                data: [430, 13, 700, 120, 300, 73, 908],
                color: "#7E3BF2",
            },
        ],
    };

    return (
        <div className="w-full  bg-white rounded-lg shadow-2xl">
            <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
                <div>
                    <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">$12,423</h5>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                    23%
                    <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                    </svg>
                </div>
            </div>
            <div className="px-2.5">
                {/* <ApexCharts options={options} series={options.series} type="area" height="100%" width="100%" /> */}
            </div>
        </div>
    );
}

export default ChartSales;
