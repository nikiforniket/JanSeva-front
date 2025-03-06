import { getSchemeDetails } from "@/api/actions";
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
import { schemeDetailsConfig } from "@/config/QuickFilters";
import { date_convert } from "@/config/dateConverter";
import UpdateScheme from "./UpdateScheme";

const SchemeDetails = () => {
  const { id } = useParams();
  const [schemeDetails,setSchemeDetails] = useState('')

  useEffect(() => {
    getSchemeDetails(id).then((res) => {
      if (res?.data) {
        // const { d1, d2 } = date_convert(
        //   res.data.created_at,
        //   res.data.updated_at
        // );
        // res.data.created_at = d1;
        // res.data.updated_at = d2;
        setSchemeDetails(res.data);
      }
    });
  },[]);
  return (
    <>
      <Row>
        <Col lg="12">
          <Card className="m-2">
            <CardHeader style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <CardTitle>Scheme Details</CardTitle>
              {schemeDetails && (
                    <UpdateScheme id={id} schemeDetails={schemeDetails} setSchemeDetails={setSchemeDetails} />
                )}
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6">
                  {schemeDetailsConfig.fields.map((each) => {
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
                              defaultValue={schemeDetails[each.id]}
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
                            <p>{schemeDetails[each.id]}</p>
                            {/* <FormControl
								as="textArea"
								defaultValue={schemeDetails[each.id]}
								id={each.id}
								readOnly={!each.edit}
							  /> */}
                          </Col>
                        </Row>
                      );
                    }
                  })}
                </Col>
                {/* <Col lg="6">
                
                </Col> */}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SchemeDetails;
