import { getGeoComplaintDetails, updateGeoComplaintDetails } from '@/api/actions'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
import { geoComplaintDetailsFilterConfig } from '@/config/QuickFilters';

const GeoComplaintDetailsPage = () => {
    const {id} = useParams()
    const [geoComplaintDetails,setGeoComplaintList] = useState({})
    const [statusValue, setStatusValue] = useState(null);

    useEffect(() => {
        getGeoComplaintDetails(id).then((res) => {
            // console.log(res)
            setGeoComplaintList(res.data)
        })
    },[])

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
                                />
                              </Col>
                            </Row>
                          );
                        }else if (each.type == "textarea") {
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
                         else if (each.type == "dropdown") {
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
                                    value={statusValue ? statusValue : geoComplaintDetails[each.id]}
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
                        <Row className="mb-3">
                          <Col></Col>
                          <Col sm="10">
                            <Button onClick={updateStatus}>Save Status</Button>
                          </Col>
                        </Row>;
                      })}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col></Col>
                    <Col sm="10">
                      <Button onClick={updateStatus}>Save Status</Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
      );
}

export default GeoComplaintDetailsPage