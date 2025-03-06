import React from "react";
import { PageBreadcrumb, PageMetaData } from "@/components";
import StatisticWidget from "./StatisticsWidget";
import { Col, Row } from "react-bootstrap";
import ActiveComplaints from "./ActiveComplaints";
import PieChartComplaints from "./PieChartComplaints";
import ActiveGeoComplaints from "./ActiveGeoComplaints";
import AllocationBarChart from "./AllocationBarChart";

const Dashboard = () => {

  const statisticData = [
    {
      state: '42',
      // icon: 'lab la-accessible-icon',
      title: 'Total Complaints',
    },
    {
      state: '18',
      // icon: 'las la-bed',
      title: 'Active Complaints',
    },
    {
      state: '67',
      // icon: 'las la-cut',
      title: 'Total Geo-Complaints',
    },
    {
      state: '33',
      // icon: 'las la-stethoscope',
      title: 'Active Geo-Complaints',
    },
    {
      state: '100',
      // icon: 'las la-user-nurse',
      title: 'Sectors',
    },
    {
      state: '200+',
      // icon: 'las la-hand-holding-usd',
      title: 'Categories',
    },
  ]

  return (
    <>
      <PageMetaData title="Dashboard" />
      <PageBreadcrumb title={"Dashboard"}/>
      <Row>
				{statisticData.map((item, idx) => {
					return (
						<Col key={idx} xs={12} md={4} lg={2}>
							<StatisticWidget
								icon={item.icon}
								state={item.state}
								title={item.title}
							/>
						</Col>
					)
				})}
			</Row>
      <Row>
        <Col lg={3}>
        <ActiveComplaints />
        <ActiveGeoComplaints/>
        </Col>
        <Col lg={8}>
        <PieChartComplaints/>
        </Col>
      </Row>
      <Row>
        <Col>
          <AllocationBarChart/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard;
