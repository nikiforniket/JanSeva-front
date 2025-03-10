import { PageBreadcrumb } from "@/components";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Col } from "react-bootstrap";

const AllocationBarChart = () => {
//   const chartOpts = {
    // series: [
    //   {
    //     name: "Jan-March",
    //     data: [4400, 5500, 5700, 5600, 6100, 5800, 6300, 6000, 6600],
    //   },
    //   {
    //     name: "April-July",
    //     data: [7600, 8500, 10100, 9800, 8700, 10500, 9100, 11400, 9400],
    //   },
    //   {
    //     name: "August-October",
    //     data: [3500, 4100, 3600, 2600, 4500, 4800, 5200, 5300, 4100],
    //   },
    //   {
    //     name: "November-December",
    //     data: [7600, 8500, 10100, 9800, 8700, 10500, 9100, 11400, 9400],
    //   },
    // ],
//     options: {
//       chart: {
//         type: "bar",
//         height: 350,
//       },
//       plotOptions: {
//         bar: {
//           horizontal: true,
//           columnWidth: "55%",
//           borderRadius: 5,
//           borderRadiusApplication: "end",
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ["transparent"],
//       },
//       xaxis: {
//         categories: [
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//         ],
//       },
//       yaxis: {
//         title: {
//           text: "$ (thousands)",
//         },
//       },
//       fill: {
//         opacity: 1,
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return "$ " + val + " thousands";
//           },
//         },
//       },
//     },
//   };

  //   const chartOpt1 = {

  //     series: [{
  //         data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  //       }],
  //     options: {
  //       chart: {
  //         type: 'bar',
  //         height: 380
  //       },
  //       plotOptions: {
  //         bar: {
  //           barHeight: '100%',
  //           distributed: true,
  //           horizontal: true,
  //           dataLabels: {
  //             position: 'bottom'
  //           },
  //         }
  //       },
  //       colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
  //         '#f48024', '#69d2e7'
  //       ],
  //       dataLabels: {
  //         enabled: true,
  //         textAnchor: 'start',
  //         style: {
  //           colors: ['#fff']
  //         },
  //         formatter: function (val, opt) {
  //           return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
  //         },
  //         offsetX: 0,
  //         dropShadow: {
  //           enabled: true
  //         }
  //       },
  //       stroke: {
  //         width: 1,
  //         colors: ['#fff']
  //       },
  //       xaxis: {
  //         categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
  //           'United States', 'China', 'India'
  //         ],
  //       },
  //       yaxis: {
  //         labels: {
  //           show: false
  //         }
  //       },
  //       title: {
  //           text: 'Custom DataLabels',
  //           align: 'center',
  //           floating: true
  //       },
  //       subtitle: {
  //           text: 'Category Names as DataLabels inside bars',
  //           align: 'center',
  //       },
  //       tooltip: {
  //         theme: 'dark',
  //         x: {
  //           show: false
  //         },
  //         y: {
  //           title: {
  //             formatter: function () {
  //               return ''
  //             }
  //           }
  //         }
  //       }
  //     },

  // }

  const basicColumnChartOpts = {
	chart: {
		height: 396,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			// borderRadius:""
			columnWidth: '55%',
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent'],
	},
	colors: ['rgba(42, 118, 244, .18)', '#2a76f4', 'rgba(251, 182, 36, .6)','#3cb44b'],
	series: [
        {
          name: "Jan-March",
          data: [4400, 5500, 5700, 5600, 6100, 5800, 6300, 6000, 6600],
        },
        {
          name: "April-July",
          data: [7600, 8500, 10100, 9800, 8700, 10500, 9100, 11400, 9400],
        },
        {
          name: "August-October",
          data: [3500, 4100, 3600, 2600, 4500, 4800, 5200, 5300, 4100],
        },
        {
          name: "November-December",
          data: [7600, 8500, 10100, 9800, 8700, 10500, 9100, 11400, 9400],
        },
	],
	xaxis: {
		categories:[1,2,3,4,5,6,7,8,9],
		axisBorder: {
			show: true,
			color: '#bec7e0',
		},
		axisTicks: {
			show: true,
			color: '#bec7e0',
		},
	},
	legend: {
		offsetY: 6,
	},
	yaxis: {
		title: {
			text: '$ (thousands)',
		},
	},
	fill: {
		opacity: 1,
	},
	// legend: {
	//     floating: true
	// },
	grid: {
		row: {
			colors: ['transparent', 'transparent'],
			// takes an array which will be repeated on columns
			opacity: 0.2,
		},
		borderColor: '#f1f3fa',
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return '$ ' + val + ' thousands'
			},
		},
	},
}
  return (
    <>
      <PageBreadcrumb title={"Fund-Allocation Analytics"} />
      <Col id="chart">
        <ReactApexChart
          className="apex-charts"
          height={250}
          options={basicColumnChartOpts}
          series={basicColumnChartOpts.series}
          type="bar"
        />
        {/* <div id="html-dist"></div> */}
      </Col>
    </>
  );
};

export default AllocationBarChart;
