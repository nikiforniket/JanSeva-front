import { getAllocationDetails } from "@/api/actions";
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
import { allocationDetailsFilterConfig } from "@/config/QuickFilters";
import { date_convert } from "@/config/dateConverter";
import UpdateAllocation from "./UpdateAllocation";

const AllocationDetailsPage = () => {
  const { id } = useParams();
  const [allocationDetails, setAllocationDetails] = useState("");
  const monthObj = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  useEffect(() => {
    getAllocationDetails(id).then((res) => {
      if (res?.data) {
        const { d1, d2 } = date_convert(
          res.data.created_at,
          res.data.updated_at
        );
        res.data.created_at = d1;
        res.data.updated_at = d2;
        res.data.month_start = monthObj[res.data.month_start];
        res.data.month_end = monthObj[res.data.month_end];
        setAllocationDetails(res.data);
      }
    });
  }, []);
  return (
    <>
      <Row>
        <Col lg="12">
          <Card className="m-2">
            <CardHeader style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <CardTitle>Allocation Details</CardTitle>
              {allocationDetails && (
                  <UpdateAllocation allocationDetails={allocationDetails} setAllocationDetails={setAllocationDetails} monthObj={monthObj} />
                )}
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="9">
                  {allocationDetailsFilterConfig.fields.map((each) => {
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
                              defaultValue={allocationDetails[each.id]}
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
                            <p>{allocationDetails[each.id]}</p>
                            {/* <FormControl
								as="textArea"
								defaultValue={allocationDetails[each.id]}
								id={each.id}
								readOnly={!each.edit}
							  /> */}
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
                {/* <Col lg='6'>
                {fundDetailsFilterConfig.fields.map((each) => {
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
                                : allocationDetails[each.id]
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
                </Col> */}
                {/* <Col lg="3">
                
                </Col> */}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AllocationDetailsPage;
