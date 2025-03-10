import { getGeoComplaintList } from "@/api/actions";
import { ComponentContainerCard } from "@/components";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Carousel,
  CarouselItem,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbAlertTriangle } from "react-icons/tb";

const ActiveGeoComplaints = () => {
  const [activeGeoComplaints, setActiveGeoComplaints] = useState("");

  useEffect(() => {
    getGeoComplaintList().then((res) => {
        if (res.data?.results) {
          const a = [];
          res.data.results.map((obj) => {
            if (obj.status == "in_progress") {
              a.push(obj);
            }
          });
          setActiveGeoComplaints(a);
        }
      });
  }, []);
  return (
    <>
      <ComponentContainerCard
        title="Active Geo-Complaints"
        bodyClassName="dash-info-carousel"
      >
        <Carousel touch>
          {activeGeoComplaints &&
            activeGeoComplaints.map((obj, idx) => {
              return (
                <CarouselItem key={idx}>
                  <Row>
                    <Col xs={12} className="align-self-center">
                      {/* <Card> */}
                        {/* <CardBody> */}
                          <div className="d-flex">
                            <TbAlertTriangle className="align-self-center icon-md me-2"></TbAlertTriangle>
                            <div className="d-block ms-2 align-self-center">
                              <span className="text-warning">{obj.full_name} - {obj.phone_number}</span>
                              <h5 className="my-1">{obj.complaint_type}</h5>
                              <p className="my-1">Lat-Long : {obj.lat}-{obj.long}</p>
                              {/* <p className="mb-0 text-muted">
                                {obj.location_name}
                              </p> */}
                                <Link to={`/complaints/${obj.uuid}`} className="text-primary">
                                  More Details <i className="las la-arrow-right" />
                                </Link>
                            </div>
                          </div>
                        {/* </CardBody>
                      </Card> */}
                    </Col>
                  </Row>
                </CarouselItem>
              );
            })}
        </Carousel>
      </ComponentContainerCard>
    </>
  );
};

export default ActiveGeoComplaints;
