import { getNewsDetails } from "@/api/actions";
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
import { newsDetailsConfig } from "@/config/QuickFilters";
import { date_convert } from "@/config/dateConverter";
import { PageMetaData } from "@/components";
import UpdateNews from "./UpdateNews";

const NewsDetailPage = () => {
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState("");

  useEffect(() => {
    getNewsDetails(id).then((res) => {
      if (res?.data) {
        switch (res.data.status) {
          case "created":
            res.data.status = "Created";
            break;
          case "approved":
            res.data.status = "Approved";
            break;
          case "active":
            res.data.status = "Active";
            break;
          case "inactive":
            res.data.status = "In active";
            break;
          case "in_approval":
            res.data.status = "In approval";
            break;
        }
        const { d1, d2 } = date_convert(null, res.data.updated_at);
        // res.data.created_at = d1
        res.data.updated_at = d2;
        setNewsDetail(res.data);
      }
    });
  }, []);
  return (
    <>
    <PageMetaData title="News Details" />
      <Row>
        <Col lg="12">
          <Card className="m-2">
          <CardHeader style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <CardTitle>News Details</CardTitle>
              {newsDetail && (
                    <UpdateNews id={id} newsDetail={newsDetail} setNewsDetail={setNewsDetail}/>
                )}
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6">
                  {newsDetailsConfig.fields.map((each) => {
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
                              defaultValue={newsDetail[each.id]}
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
                            <p>{newsDetail[each.id]}</p>
                            {/* <FormControl
								as="textArea"
								defaultValue={newsDetail[each.id]}
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
                {/* <Col lg="6">
                
                  {newsDetailsConfig.fields.map((each) => {
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
                                statusValue ? statusValue : newsDetail[each.id]
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
                </Col> */}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NewsDetailPage;
