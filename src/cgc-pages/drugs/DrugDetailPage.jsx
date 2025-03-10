import { getDrugDetails, updateDrugComplaint } from "@/api/actions";
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
import { drugComplaintFilterConfig } from "@/config/QuickFilters";
import { toast } from "sonner";
import { date_convert } from "@/config/dateConverter";
import { PageMetaData } from "@/components";

const DrugDetailPage = () => {
  const { id } = useParams();
  const [drugDetails, setDrugDetails] = useState("");
  const [statusValue, setStatusValue] = useState(null);

  useEffect(() => {
    getDrugDetails(id).then((res) => {
      if (res?.data) {
        const { d1, d2 } = date_convert(
          res.data.created_at,
          res.data.updated_at
        );
        res.data.created_at = d1;
        res.data.updated_at = d2;
        setDrugDetails(res.data);
      }
    });
  }, []);

  const handleStatusChange = (value) => {
    setStatusValue(value);
  };

  const updateStatus = () => {
    const reqObj = { status: statusValue };
    updateDrugComplaint(id, reqObj).then((res) => {
      toast.success("Status updated successfully", {
        position: "top-right",
        duration: 3000,
      });
    });
  };

  return (
    <>
        <PageMetaData title="Drug Complaints Details" />
      <Row>
        <Col lg="12">
          <Card className="m-2">
            <CardHeader>
              <CardTitle>Drug Complaint Details</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6">
                  {drugComplaintFilterConfig.fields.map((each) => {
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
                              defaultValue={drugDetails[each.id]}
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
                            <p>{drugDetails[each.id]}</p>
                            {/* <FormControl
                              as="textArea"
                              defaultValue={drugDetails[each.id]}
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
                  {drugComplaintFilterConfig.fields.map((each) => {
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
                                statusValue ? statusValue : drugDetails[each.id]
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DrugDetailPage;
