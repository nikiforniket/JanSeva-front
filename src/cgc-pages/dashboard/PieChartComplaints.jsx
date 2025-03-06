import { ComponentContainerCard, PageBreadcrumb } from "@/components";
import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Col } from "react-bootstrap";

const PieChartComplaints = () => {

    const chartOpts = {
		chart: {
			height: 205,
			type: 'donut',
		},
		plotOptions: {
			pie: {
				donut: {
					size: '85%',
				},
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
		series: [80, 50, 100, 121, 40, 79],
		legend: {
			show: true,
			position: 'left',
			horizontalAlign: 'center',
			floating: false,
			fontSize: '14px',
			offsetX: 0,
			offsetY: 5,
		},
		labels: ['In Progress', 'Registered', 'Reported', 'Report Acknowledged','Rejected','Resolved'],
		colors: ['#4d79f6', '#ff5da0', '#e0e7fd', '#4ac7ec','#800000','#3cb44b'],
		responsive: [
			{
				breakpoint: 600,
				options: {
					plotOptions: {
						donut: {
							customScale: 0.2,
						},
					},
					chart: {
						height: 200,
					},
					legend: {
						show: false,
					},
				},
			},
		],
		tooltip: {
			y: {
				formatter: function (val) {
					return val
				},
			},
		},
	}
  return (
    <>
        <PageBreadcrumb title={'Complaint Analytics'} />
      <Col xxl={6}>
					<ReactApexChart
						className="apex-charts"
						height={205}
						options={chartOpts}
						series={chartOpts.series}
						type="donut"
					/>
					<div id="email_report" className="apex-charts" />
				</Col>
    </>
  );
};

export default PieChartComplaints;
