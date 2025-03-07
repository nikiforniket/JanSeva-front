import {
  getGeoComplaintDetails,
  updateGeoComplaintDetails,
} from "@/api/actions";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { geoComplaintDetailsFilterConfig } from "@/config/QuickFilters";
import Gallery from "@/pages/other-pages/Gallery";
import { PageMetaData } from "@/components";
import { date_convert } from "@/config/dateConverter";
import { toast } from "sonner";

const GeoComplaintDetailsPage = () => {
  const { id } = useParams();
  const [geoComplaintDetails, setGeoComplaintList] = useState({});
  const [statusValue, setStatusValue] = useState(null);

  useEffect(() => {
    getGeoComplaintDetails(id).then((res) => {
      if (res?.data) {
        const { d1, d2 } = date_convert(
          res.data.created_at,
          res.data.updated_at
        );
        res.data.created_at = d1;
        res.data.updated_at = d2;
        switch (res.data.complaint_type){
          case "poot_hole":
            res.data.complaint_type = "Poot Hole"
            break;
          case "street_light":
            res.data.complaint_type = "Street Light"
            break;
          case "garbage":
            res.data.complaint_type = "Garbage"
            break;
          case "drainage":
            res.data.complaint_type = "Drainage"
            break;
          case "pipe_leak":
            res.data.complaint_type = "Pipe Leak"
            break;
        }
        setGeoComplaintList(res.data);
      }
    });
  }, []);

  const handleStatusChange = (value) => {
    setStatusValue(value);
  };
  const updateStatus = () => {
    const reqObj = { status: statusValue };
    updateGeoComplaintDetails(id, reqObj).then((res) => {
      toast.success("Status updated successfully", {
        position: "top-right",
        duration: 3000,
      });
    });
  };

  return (
    <>
      <PageMetaData title="GeoComplaintDetails" />
      <Row>
        <Col lg="12">
          <Card className="m-2">
            <CardHeader>
              <CardTitle>Geo-Complaint Details</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6">
                  {geoComplaintDetailsFilterConfig.fields.map((each) => {
                    if (each.type == "input") {
                      return (
                        <Row className="mb-3">
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10">
                            <FormControl
                              type="text"
                              defaultValue={geoComplaintDetails[each.id]}
                              id={each.id}
                              readOnly={!each.edit}
                              disabled={!each.edit}
                            />
                          </Col>
                        </Row>
                      );
                    } else if (each.type == "textarea") {
                      return (
                        <Row className="mb-3">
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10">
                            <p>{geoComplaintDetails[each.id]}</p>
                            {/* <FormControl
                                    as="textArea"
                                    defaultValue={geoComplaintDetails[each.id]}
                                    id={each.id}
                                    readOnly={!each.edit}
                                  /> */}
                          </Col>
                        </Row>
                      );
                    }

                    // <Row className="mb-3">
                    //   <Col></Col>
                    //   <Col sm="10">
                    //     <Button onClick={updateStatus}>Save Status</Button>
                    //   </Col>
                    // </Row>;
                  })}
                </Col>
                <Col lg="6">
                  {geoComplaintDetailsFilterConfig.fields.map((each) => {
                    if (each.type == "dropdown") {
                      return (
                        <Row className="mb-3">
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10">
                            <FormSelect
                              value={
                                statusValue
                                  ? statusValue
                                  : geoComplaintDetails[each.id]
                              }
                              id={each.id}
                              onChange={(e) =>
                                handleStatusChange(e.target.value)
                              }
                            >
                              {each.options.map((opt, i) => {
                                return (
                                  <option value={opt.value}>{opt.label}</option>
                                );
                              })}
                            </FormSelect>
                          </Col>
                        </Row>
                      );
                    }
                  })}
                  <Row className="mb-3">
                    <Col></Col>
                    <Col sm="10">
                      <Button onClick={updateStatus}>Update Status</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm="10">
                  <h4>Complaint Images</h4>
                  {geoComplaintDetails.length > 0 ? 
                  <Gallery imgData={geoComplaintDetails.files} />
                  : <p>No images present</p>
                  }
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default GeoComplaintDetailsPage;
